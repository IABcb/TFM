import os
import sys
import csv
import json
import ast
path_to_append = os.path.dirname(os.path.abspath(__file__)).replace("/TrafficAnalyzer", "")
sys.path.append(path_to_append)
from KafkaConnection.kafka_connection import KafkaConnection as KFK

IP_KAFKA = 'localhost'
PORT_KAFKA = 9092

if len(sys.argv) < 2:
    print('Please use: python simple_consumer.py <topic_name> <csv (optional)>')
else:
    topic = sys.argv[1]
    kafka = KFK(topic=topic, host=IP_KAFKA, port=PORT_KAFKA)
    consumer = kafka.init_Kafka_consumer()
    p = 0

    if len(sys.argv) == 3:
        if sys.argv[2] == 'csv':
            csv_path = '../Data/'
            csv_name = 'voIP'

            for message in consumer:
                p += 1
                transformed_message = ast.literal_eval(json.loads(message.value.replace("u'", "'")))
                if p == 1:
                    header = transformed_message.keys()
                    csv_file = open(csv_path + csv_name, 'w')
                    spamwriter = csv.writer(csv_file, delimiter = '#')
                    spamwriter.writerow(header)
                    print('Writing header')
                row = transformed_message.values()
                spamwriter.writerow(row)
                print('Writing row', p)
        else:
            print('Please use: python simple_consumer.py <topic_name> <csv (optional)>')
    else:

        for message in consumer:
            p += 1
            print('Consume ' + str(message.value) + ' for topic "'
                  + str(topic) + '" and packet number ' + str(p))

