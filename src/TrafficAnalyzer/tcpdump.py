import os
import sys
import getpass
import threading
import subprocess as sub
import netifaces as ni
import time
import signal
import psutil
path_to_append = os.path.dirname(os.path.abspath(__file__)).replace("/TrafficAnalyzer", "")
sys.path.append(path_to_append)
from KafkaConnection.kafka_connection import KafkaConnection as KFK


class tcpdump():

    def __init__(self, traffic_type, time_running,
                 topics, ip_kafka = 'localhost', port_kafka = 9092,
                 offsetType=True, iface = ni.gateways()['default'][ni.AF_INET][1],
                 ip_host=None):

        # Host features
        self.iface = iface
        self.host = ni.ifaddresses(self.iface)
        self.ip_host = ip_host
        if not self.ip_host:
            self.ip_host = ni.ifaddresses(self.iface)[2][0]['addr']
        # Time and traffic
        self.traffic_type = traffic_type
        self.time_running = time_running
        self.time_init_process = time.time()
        self.time_end_process = self.time_init_process + self.time_running

        # Traffic tags
        self.traffic_tags = {'voip':'voip','video':'video','browsing':'browsing'}

        # Analyzed packets in filter
        self.analyzed_packets = 0

        # Start TCPDUMP
        self.main_command = 'sudo tcpdump -l -s 0 -q -U -n -i' + self.iface
        # -l : Make stdout line buffered. Useful if you want to see the data while capturing it.
        # -s : truncated data for each packet
        # -q : print less information than normal
        # -U : show buffered information
        # -n : do not convert address
        # -i : analyzed interface
        self.listener = sub.Popen("exec " + self.main_command, stdout=sub.PIPE, shell=True)

        # Global packet filter
        self.filter_packet = ' IP '
        # self.filter_packet = ' '

        # Send to kafka
        self.topics = topics
        self.ip_kafka = ip_kafka
        self.port_kafka = port_kafka
        self.offsetType = offsetType
        # More Kafka data
        self.connections = dict()
        self.producers = dict()

    def init_connections(self):
        for topic in self.topics:
            # Python 2.7
            self.connections[topic] = KFK(topic=topic, host=self.ip_kafka, port=self.port_kafka)
            # Python 3.5
            # self.connections[topic] = KFK(topic=str.encode(topic), host=self.ip_kafka, port=self.port_kafka)

    def init_producers(self):
        for topic in self.topics:
            self.producers[topic] = self.connections[topic].init_Kafka_producer()

    def send2kafka(self, data):
        print_pack = 10
        for topic in self.topics:
            # Python 2.7
            self.producers[topic].produce(str(data))
            # Python 3.5
            # self.producers[topic].produce(str.encode(data))
            if self.analyzed_packets % print_pack == 0:
                print('Sent packets ' + str(self.analyzed_packets))

    def check_end_of_running(self):
        return time.time() > self.time_end_process

    def reset_analyzed_packets(self):
        self.analyzed_packets = 0

    def kill_tcpdump(self):
        os.system('sudo kill ' + str(self.listener.pid))
        os.system('sudo pkill tcpdump')

    def process_packet(self, packet, traffic_type):
        processed_packet = None
        sep = '|'
        if self.filter_packet in packet:
            self.analyzed_packets += 1
            processed_packet = str(self.analyzed_packets) + sep +\
                            traffic_type + sep + self.ip_host + sep + packet
            # print(processed_packet)
        return processed_packet

    def filter_voip(self):
        self.reset_analyzed_packets()

        for row in iter(self.listener.stdout.readline, b''):
            raw_packet = str(row.rstrip())
            processed_packet = self.process_packet(raw_packet, self.traffic_tags['voip'])
            if processed_packet:
                self.send2kafka(processed_packet)
            if self.check_end_of_running():
                self.kill_tcpdump()
                break

    def filter_video(self):
        self.reset_analyzed_packets()
        for row in iter(self.listener.stdout.readline, b''):
            raw_packet = str(row.rstrip())
            processed_packet = self.process_packet(raw_packet, self.traffic_tags['video'])
            if processed_packet:
                self.send2kafka(processed_packet)

            if self.check_end_of_running():
                self.kill_tcpdump()
                break

    def filter_browsing(self):
        self.reset_analyzed_packets()
        for row in iter(self.listener.stdout.readline, b''):
            raw_packet = str(row.rstrip())
            processed_packet = self.process_packet(raw_packet, self.traffic_tags['browsing'])
            if processed_packet:
                self.send2kafka(processed_packet)
            if self.check_end_of_running():
                self.kill_tcpdump()
                break

    def get_curr_pid(self):
        return self.curr_pid

    def activate_tcpdump(self):
        self.init_connections()
        self.init_producers()

        threads = []
        if  self.traffic_type == self.traffic_tags['voip']:
            t = threading.Thread(target=self.filter_voip, args=())

        elif self.traffic_type == self.traffic_tags['video']:
            t = threading.Thread(target=self.filter_video, args=())

        elif self.traffic_type == self.traffic_tags['browsing']:
            t = threading.Thread(target=self.filter_browsing, args=())

        threads.append(t)
        t.start()

        for thread in threads:
            thread.join()
        print('END OF TCPDUMP')

# if __name__ == "__main__":
#     topics = ['analyzed_traffic']
#     analyzer = tcpdump('video', 15, topics)
#     # analyzer = tcpdump('voip', 15, topics)
#     # analyzer = tcpdump('browsing', 15, topics)
#     analyzer.activate_tcpdump()

