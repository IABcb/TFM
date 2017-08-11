import os
import sys
import time
import random
import json
path_to_spark = "/home/nacho/spark"
import findspark
findspark.init(path_to_spark)
import pyspark
from pyspark.sql import SparkSession
from pyspark.streaming import StreamingContext
from pyspark.mllib.tree import RandomForest, RandomForestModel
from pyspark.streaming.kafka import KafkaUtils
from pyspark.mllib.util import MLUtils
from pyspark.mllib.linalg import Vectors

path_to_append = os.path.dirname(os.path.abspath(__file__)).replace("/TrafficAnalyzer", "")
sys.path.append(path_to_append)

from KafkaConnection.kafka_connection import KafkaConnection as KFK

'''Command for spark streaming
    # python StreamingLogAnalyzer.py

    # spark-submit --jars <path to spark-streaming-kafka-assembley.jar> <file_to_be_executed>
    # spark-submit --jars /home/nacho/spark/jars/spark-streaming-kafka-0-8-assembly_2.11-2.1.0.jar StreamingLogAnalyzer.py'''

def proto2code(proto):
    '''Thins function converts proto into a code. This code has been set according to the model'''
    protos = {'ICMP': 3, 'UDP': 2, 'tcp': 1}
    return protos[proto]

def code2label(code):
    '''Thins function converts a code into the service label. This code has been set according to the model'''
    codes = {1: 'is_youtube', 2: 'voIP', 3:'browsing'}
    return codes[code]

def compare_results(label, predicted_value):
    '''This function will compare the real label of the service with the predicted one
    1: predicted result is correct
    0: predicted value is incorrect'''
    result = 0
    if label == code2label(int(predicted_value)):
        result = 1
    return result

def predict_send2kafka(message, producer_kafka, model):
    '''This function makes the prediction of the model and send data through kafka class.
    Data is encoded to bytes for being sent'''
    records = message.collect()
    for record in records:
        # Get the real service from the message
        label_service = record['label_service']
        # Get the payload length
        packet_length = int(record['IP_TotLen'])
        # Get the protocol
        proto = record['proto']
        # Make the prediction (transforming protocol according to the established code)
        predicted_value = model.predict([proto2code(proto), packet_length])
        # Save if the prediction was correct or was not (transforming predicted value according to the established code)
        record['model_predict'] = str(compare_results(label_service, predicted_value))
        # Send the data
        producer_kafka.produce(json.dumps(str(record)))

def get_itemsinfo(info_splitted):

    '''This function gets the info from the packets that can be extracted in the same way
    TCP Items structure (info_splitted)
    [u'224', u'video', u'159.107.45.204', u'13:51:30.883523', u'IP',
     u'162.125.18.133.443', u'>', u'192.168.1.135.50522:', u'tcp', u'257']

    UDP Items structure (splitted_info)
    [u'222', u'video', u'159.107.45.204', u'09:45:05.617593', u'IP',
     u'216.58.214.174.443', u'>', u'192.168.1.135.47250:', u'UDP,', u'length', u'1350']

    ICMP Items structure (splitted_info)
    [u'744', u'voip', u'159.107.45.204', u'13:51:32.828884', u'IP',
     u'8.8.8.8', u'>', u'192.168.1.135:', u'ICMP', u'echo', u'reply,', u'id', u'2159,',
     u'seq', u'1,', u'length', u'175']

    [u'745', u'voip', u'159.107.45.204', u'13:51:32.828884', u'IP',
     u'8.8.8.8', u'>', u'192.168.1.135:', u'ICMP', u'echo', u'reply,', u'id', u'2159,',
     u'seq', u'1,', u'length', u'175']

    '''


    info_analyzed =  info_splitted.map(lambda items:  ({"timeStamp": items[3],
                                                      "coord_1": str(random.randint(0, 180)),
                                                      "coord_2": str(random.randint(-90, 90)),
                                                      "is_youtube": "1" if items[1] == 'video' else "0",
                                                      "voIP": "1" if items[1] == 'voip' else "0",
                                                      "browsing": "1" if items[1] == "browsing" else "0",
                                                      "IP_Version": "4",
                                                      "label_service": items[1]}, items))
    return info_analyzed

def tcp_analysis(tcp_packets, producer_kafka, model):

    '''This function analyzes the data received from tcp traffic analyzer and then turns it out to another structure.
    After that, sends this new packets through kafka for being listened for the rest of the system

    Items structure (info_splitted)
    [u'224', u'video', u'159.107.45.204', u'13:51:30.883523', u'IP',
     u'162.125.18.133.443', u'>', u'192.168.1.135.50522:', u'tcp', u'257']

     FiveTupleInfo
    'IP_FiveTuple 17;192.168.6.5/0;10.0.4.3/0;62234;53 (IP Proto + IP cliente + Ip servidor + SrcPort + DstPort'
    '''

    # Protocol to analyze
    proto = 'tcp'

    # First step to get the items of each message
    tcp_packets_items = tcp_packets.map(lambda line: line.split("|"))

    # Get a final list of all message elements
    info_splitted = tcp_packets_items.map(lambda line: line[0:3] + line[3].split(' '))

    # Get general info from packets
    infoitems = get_itemsinfo(info_splitted)

    # Get the message structure
    analyzed_info = infoitems.map(lambda items:
                                    dict(items[0].items() + {
                                        "proto": proto,
                                        "IP_UpLink": "0" if items[1][2] == '.'.join(items[1][7].split('.')[:-1]) else "1",
                                    "dpiPktNum": "0-" + items[1][0] if items[1][2] == '.'.join(items[1][7].split('.')[:-1])
                                               else "1-" + items[1][0],
                                    "IP_TotLen": items[1][9],
                                    "IP_SrcIP": '.'.join(items[1][5].split('.')[:-1]),
                                    "IP_DstIP": '.'.join(items[1][7].split('.')[:-1]),
                                    "IP_FiveTuple": "17;" + items[1][2] + "/0;" +
                                       '.'.join(items[1][5].split('.')[:-1]) + "/0;" +
                                                    items[1][5].split('.')[-1] + ";" +
                                                    items[1][7].split('.')[-1].split(':')[0]
                                       if items[1][2] == '.'.join(items[1][7].split('.')[:-1])
                                       else "17;" + items[1][2] + "/0;" +
                                       '.'.join(items[1][7].split('.')[:-1]) + "/0;" +
                                            items[1][7].split('.')[-1].split(':')[0] + ";" +
                                            items[1][5].split('.')[-1],
                                }.items()))

    # Send processed data through kafka
    analyzed_info.foreachRDD(lambda x: predict_send2kafka(x, producer_kafka, model))
    # analyzed_info.foreachRDD(lambda x: send_RDDtokafka(x, producer_kafka))

def UDP_analysis(UDP_packets, producer_kafka, model):
    '''This function analyzes the data received from UDP traffic analyzer and then turns it out to another structure.
    After that, sends this new packets through kafka for being listened for the rest of the system

    Items structure (splitted_info)
    [u'222', u'video', u'159.107.45.204',  u'13:51:31.265380', u'IP',
     u'216.58.214.174.443', u'>', u'192.168.1.135.47250:', u'UDP,', u'length', u'1350']

     FiveTupleInfo
    'IP_FiveTuple 17;192.168.6.5/0;10.0.4.3/0;62234;53 (IP Proto + IP cliente + Ip servidor + SrcPort + DstPort'
    '''

    # Protocol to analyze
    proto = 'UDP'

    # First step to get the items of each message
    UDP_packets_items = UDP_packets.map(lambda line: line.split("|"))

    # Get a final list of all message elements
    info_splitted = UDP_packets_items.map(lambda line: line[0:3] + line[3].split(' '))

    # Get general info from packets
    infoitems = get_itemsinfo(info_splitted)

    # Get the message structure
    analyzed_info = infoitems.map(lambda items:
                                    dict(items[0].items() + {
                                        "proto": proto,
                                        "IP_UpLink": "0" if items[1][2] == '.'.join(items[1][7].split('.')[:-1]) else "1",
                                        "dpiPktNum": "0-" + items[1][0] if items[1][2] == '.'.join(items[1][7].split('.')[:-1])
                                               else "1-" + items[1][0],
                                        "IP_TotLen": items[1][10],
                                        "IP_SrcIP": '.'.join(items[1][5].split('.')[:-1]),
                                        "IP_DstIP": '.'.join(items[1][7].split('.')[:-1]),
                                        "IP_FiveTuple": "17;" + items[1][2] + "/0;" +
                                       '.'.join(items[1][5].split('.')[:-1]) + "/0;" +
                                                    items[1][5].split('.')[-1] + ";" +
                                                    items[1][7].split('.')[-1].split(':')[0]
                                       if items[1][2] == '.'.join(items[1][7].split('.')[:-1])
                                       else "17;" + items[1][2] + "/0;" +
                                       '.'.join(items[1][7].split('.')[:-1]) + "/0;" +
                                            items[1][7].split('.')[-1].split(':')[0] + ";" +
                                            items[1][5].split('.')[-1],
                                }.items()))

    # Send data to kafka
    analyzed_info.foreachRDD(lambda x: predict_send2kafka(x, producer_kafka, model))
    # analyzed_info.foreachRDD(lambda x: send_RDDtokafka(x, producer_kafka))

def ICMP_analysis(ICMP_packtes, producer_kafka, model):
    '''This function analyzes the data received from ICMP traffic analyzer and then turns it out to another structure.
        After that, sends this new packets through kafka for being listened for the rest of the system

    Items structure (splitted_info)
    [u'744', u'voip', u'159.107.45.204', u'09:43:46.803574, IP,
     159.107.45.204, >, 8.8.8.8:, ICMP, echo, request, id, 7244, seq, 338, length, 175']

    [u'745', u'voip', u'159.107.45.204', u'09:43:46.806324, IP,
     8.8.8.8, >, 159.07.45.204:, ICMP, echo, reply, id, 7244, seq, 338, length, 175']

    FiveTupleInfo
    'IP_FiveTuple 17;192.168.6.5/0;10.0.4.3/0;62234;53 (IP Proto + IP cliente + Ip servidor + SrcPort + DstPort'
     '''

    # Protocol to analyze
    proto = 'ICMP'

    # First step to get the items of each message
    ICMP_packtes_items = ICMP_packtes.map(lambda line: line.split("|"))

    # Get a final list of all message elements
    info_splitted = ICMP_packtes_items.map(lambda line: line[0:3] + line[3].split(' '))

    # Get general info from packets
    infoitems = get_itemsinfo(info_splitted)

    # Get the message structure
    analyzed_info = infoitems.map(lambda items:
                                  dict(items[0].items() + {
                                      "proto": proto,
                                      "IP_UpLink": "0" if items[1][2] == items[1][7].split(':')[0] else "1",
                                      "dpiPktNum": "0-" + items[1][0] if items[1][2] == items[1][7].split(':')[0]
                                      else "1-" + items[1][0],
                                      "IP_TotLen": items[1][16],
                                      "IP_SrcIP": items[1][5],
                                      "IP_DstIP": items[1][7].split(':')[0],
                                      "IP_FiveTuple": "17;" + items[1][2] + "/0;" +
                                                      items[1][5] + "/0;0000;0000"
                                      if items[1][2] == items[1][7].split(':')[0]
                                      else "17;" + items[1][2] + "/0;" +
                                           items[1][7].split(':')[0] + "/0;0000;0000",
                                  }.items()))

    # Send data to kafka
    analyzed_info.foreachRDD(lambda x: predict_send2kafka(x, producer_kafka, model))
    # analyzed_info.foreachRDD(lambda x: send_RDDtokafka(x, producer_kafka))

if __name__ == "__main__":

    ''' InfoMapping
    IP_UpLink 0 (downlink) 1 (uplink)
    is_youtube 0 (no) 1 (yes)
    voIP 0 0 (no) 1 (yes)
    IP_FiveTuple 17;192.168.6.5/0;10.0.4.3/0;62234;53 (IP Proto + IP cliente + Ip servidor + SrcPort + DstPort
    dpiPktNum 1-1 number packet + IP_Uplink
    IP_NetworkAddress 10.0.4.3
    IP_DstIP 10.0.4.3
    IP_SrcIP 192.168.6.5
    '''

    # # Message structure
    # data_message = {'dpiPktNum': '', 'IP_UpLink': '','IP_DstIP': '',
    #                 'IP_FiveTuple': '', 'voIP': 0,'IP_Version': '4', 'is_youtube': 0,
    #                   'IP_TotLen': '', 'IP_SrcIP': '', "timeStamp":'', 'coord_1':0, 'coord_2':0,
    #                    'service_label': ''}

    # Received messages
    topic = "analyzed_traffic"
    brokers = "localhost:9092"

    # Sent messages
    output_topic = str.encode('parserOutput')
    broker_send = "localhost:9092"
    kafka_send = KFK(host = broker_send.split(":")[0],port = int(broker_send.split(":")[1]),topic = output_topic)
    producer_kafka = kafka_send.init_Kafka_producer()

    # Spark
    spark = (SparkSession.builder
             .master("local[*]")
             .config("spark.driver.cores", 1)
             .appName("LogAnalyzer")
             .getOrCreate())
    sc = spark.sparkContext
    reading_time_window = 1
    ssc = StreamingContext(sc, reading_time_window)

    # Load model
    RF_streaming_path = '../Model/RandomForest_Streaming'
    model = RandomForestModel.load(sc, RF_streaming_path)

    # Spark Streaming Kafka
    kvs = KafkaUtils.createDirectStream(ssc, [topic], {"metadata.broker.list": brokers})
    lines = kvs.map(lambda x: x[1])

    # Spark Streaming socket (in console: nc -lk 10001)
    # receiver_socket_ip = "localhost"
    # receiver_socket_port = 10001
    # lines = ssc.socketTextStream(receiver_socker_ip, receiver_socket_port)

    # Start analysis
    tcp_packets = lines.filter(lambda line: "tcp" in line)
    tcp_analysis(tcp_packets, producer_kafka, model)

    UDP_packets = lines.filter(lambda line: "UDP" in line)
    UDP_analysis(UDP_packets, producer_kafka, model)

    ICMP_packtes = lines.filter(lambda line: "ICMP" in line)
    ICMP_analysis(ICMP_packtes, producer_kafka, model)

    ssc.start()
    ssc.awaitTermination()