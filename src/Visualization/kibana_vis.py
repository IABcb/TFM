import os
import sys
import json
import elasticsearch
import datetime
import ast
path_to_append = os.path.dirname(os.path.abspath(__file__)).replace("/Visualization", "")
sys.path.append(path_to_append)
from KafkaConnection.kafka_connection import KafkaConnection as KFK


def str_to_time(str_time):
    time = datetime.datetime.strptime(str_time, '%H:%M:%S.%f')
    return time.strftime('%H:%M:%S.%f')

def convert_bytes(bytes, unit):
    new_bytes = bytes
    if unit == 'k':
        new_bytes = bytes/1000
    elif unit == 'M':
        new_bytes = bytes / 1000000
    return new_bytes

def transform_message(message):
    '''Thins function transforms the received messages into correct values'''
    transformed_message = ast.literal_eval(json.loads(message.replace("u'", "'")))
    # Transform string labels to integer
    transformed_message['is_youtube'] = int(transformed_message['is_youtube'])
    transformed_message['voIP'] = int(transformed_message['voIP'])
    transformed_message['browsing'] = int(transformed_message['browsing'])
    # Zip location
    transformed_message['coord_1'] = float(transformed_message['coord_1'])
    transformed_message['coord_2'] = float(transformed_message['coord_2'])
    transformed_message['location'] = [float(transformed_message['coord_1']), float(transformed_message['coord_2'])]
    del transformed_message['coord_1']
    del transformed_message['coord_2']
    # Transform others strings
    transformed_message['IP_UpLink'] = int(transformed_message['IP_UpLink'])
    transformed_message['IP_TotLen'] = int(convert_bytes(int(transformed_message['IP_TotLen']), 'k'))
    # Model prediction
    transformed_message['model_predict'] = int(transformed_message['model_predict'])
    # Format time-stamp
    transformed_message['timeStamp'] = str_to_time(transformed_message['timeStamp'])[0:-3]

    return transformed_message

def fMap(document_type, index):
    '''This function maps message fields with type'''
    structure = {"properties":{
                   "is_youtube": {"type": "integer"},
                    "voIP": {"type": "integer"},
                    "browsing": {"type": "integer"},
                    "IP_UpLink": {"type": "integer"},
                    "IP_TotLen": {"type": "integer"},
                    "timeStamp": {"type": "date", "format": "strict_hour_minute_second_fraction"},
                    'IP_FiveTuple': {"type": "keyword"},
                    'IP_SrcIP': {"type": "keyword"},
                    'proto': {"type": "keyword"},
                    'location': {"type": "geo_point"},
                    'dpiPktNum': {"type": "keyword"},
                    'IP_DstIP': {"type": "keyword"},
                    'IP_Version': {"type": "integer"},
                    'label_service': {"type": "keyword"},
                    'model_predict': {"type": "integer"}
             }
    }

    return structure

if __name__ == "__main__":

    # Kafka config
    kfk_object = KFK(topic="parserOutput")
    consumer = kfk_object.init_Kafka_consumer()

    # Elasticsearch config
    es = elasticsearch.Elasticsearch([{'host': 'localhost', 'port': 9200}])
    index = "tfmindex"
    doc_type = 'traffic_data'
    mapping = fMap(doc_type, index)

    if len(sys.argv) > 1:
        if sys.argv[1] == '-del':
            if es.indices.exists(index=index):
                print('Deleting existing index')
                es.indices.delete(index=index)

    print('Creating index')
    es.indices.create(index=index)
    es.indices.put_mapping(index=index, doc_type=doc_type, body=mapping)


    # Index
    message_id=1
    for message in consumer:

        print('Received message with id: ' + str(message_id))
        # Transform messages
        body = transform_message(message.value)
        # print('BODY TO INSERT: ', body)

        r = es.index(index=index, id=message_id, body=body, doc_type=doc_type)
        # print(r)
        message_id+=1
