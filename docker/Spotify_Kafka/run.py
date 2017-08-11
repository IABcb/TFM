#!/usr/bin/env python2
# -*- coding: utf-8 -*-
import os
os.system("sudo docker run -p 2181:2181 -p 9092:9092 --env ADVERTISED_HOST='localhost' --env ADVERTISED_PORT=9092 --env CONSUMER_THREADS=10 spotify/kafka")

# os.system("sudo docker run -p 2181:2181 -p 9092:9092 --env ADVERTISED_HOST='localhost' --env ADVERTISED_PORT=9092 --env --TOPIC kafka_traffic --env CONSUMER_THREADS=10 spotify/kafka --env NEW_PRODUCER < /home/nacho/traffic.txt")

# os.system("sudo docker run -p 2181:2181 -p 9092:9092 --env ADVERTISED_HOST='192.168.1.135' --env ADVERTISED_PORT=9092 --env CONSUMER_THREADS=10 spotify/kafka")

