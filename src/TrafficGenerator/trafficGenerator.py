import sys
import os
path_to_append = os.path.dirname(os.path.abspath(__file__)).replace("/TrafficGenerator", "")
print(path_to_append)
sys.path.append(path_to_append)
from TrafficAnalyzer.tcpdump import tcpdump as analyzer
import threading
import time
import netifaces as ni

class traffic_generator():
    def __init__(self, myIP, iface,
                 ip_kafka='localhost', port_kafka=9092,
                 topics=['analyzed_traffic']):

        # My own features
        self.myIP = myIP
        self.myIface = iface

        # IPS and ports for Kafka
        self.ip_kafka = ip_kafka
        self.port_kafka = port_kafka
        self.topics = topics

    def generate_traffic(self, traffic_type, time_running):
        # Inputs
        # Updated model
        print(self.myIP + ': Generating traffic')

        #### SOURCES CONFIG
        video_page = 'https://www.youtube.com/watch?v=ruabyha_mGI'
        webpage = 'www.as.com'
        # Launch shell script in order to generate a kind of traffic
        if traffic_type == 'video':
            os.system('./generator.sh video ' + str(time_running) + ' ' + video_page)
        elif traffic_type == 'browsing':
            os.system('./generator.sh browsing ' + str(time_running) + ' ' + webpage)
        elif traffic_type == 'voip':
            os.system('./generator.sh voip ' + str(time_running))
        else:
            print('Non recognized traffic type')

    def launch_traffic_analyzer(self, traffic_type, time_running):
        # Inputs
        print(self.myIP + ': Launching traffic analyzer')
        self.analyzer = analyzer(traffic_type, time_running,
                                topics= self.topics, ip_kafka=self.ip_kafka, port_kafka=self.port_kafka,
                                offsetType=True, iface=self.myIface,
                                ip_host=self.myIP)
        self.analyzer.activate_tcpdump()

    def activate(self, time_running = 20, traffic_type = 'browsing'):
        sleep_time = 3
        threads = []

        # TCPDUMP traffic analyzer
        t = threading.Thread(target=self.launch_traffic_analyzer, args=(traffic_type, time_running))
        threads.append(t)
        t.start()

        time.sleep(sleep_time)

        # Generate traffic
        t = threading.Thread(target=self.generate_traffic, args=(traffic_type, time_running))
        threads.append(t)
        t.start()

        time.sleep(sleep_time)

        for thread in threads:
            thread.join()

        time.sleep(sleep_time)


if __name__ == "__main__":
    iface = ni.gateways()['default'][ni.AF_INET][1]
    myIP = ni.ifaddresses(iface)[2][0]['addr']
    user = traffic_generator(myIP = myIP, iface= iface)

    traffic_types = ['voip', 'browsing', 'video']
    error_message = 'Usage: python trafficGenerator.py <voip or browsing or video> <time running>'
    if len(sys.argv) != 3:
        print(error_message)
    else:
        traffic_type = sys.argv[1]
        time_running = sys.argv[2]
        try:
            int(time_running)
            if traffic_type not in traffic_types:
                print(error_message)
            print(traffic_type)
            print(time_running)
            user.activate(time_running, traffic_type)
        except:
            print(error_message)





    # traffic_type = 'voip'
    # user.activate(time_running, traffic_type)
    # traffic_type = 'browsing'
    # user.activate(time_running, traffic_type)
    # traffic_type = 'video'
    # user.activate(time_running, traffic_type)
