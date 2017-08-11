#!/bin/bash

IFACE=$(ip route get 8.8.8.8 | awk '{ print $5; exit }')
HOST=$(ip addr show $IFACE | grep "inet\b" | awk '{print $2}' | cut -d/ -f1)	

USER_NAME=$(whoami)
#OUTPUT_FILE="/home/nacho/traffic.txt"
PCAP_OUTPUT_FILE="/home/nacho/traffic.pcap"

#sudo rm $OUTPUT_FILE
#sudo touch $OUTPUT_FILE

sudo rm $PCAP_OUTPUT_FILE
sudo touch $PCAP_OUTPUT_FILE

if [ "$1" == "http" ]; then
	echo 'Listening only http packets'
	sudo tcpdump -s 0 -n -U -i $IFACE host $HOST and tcp port http >> $OUTPUT_FILE
	exit 0
elif [ "$1" == "tcp" ]; then
	echo 'Listening to tcp packets'
	sudo tcpdump -s 0 -n -U -i $IFACE "tcp[tcpflags] & (tcp-syn|tcp-ack|tcp-fin) != 0" >> $OUTPUT_FILE

elif [ "$1" == "udp" ]; then
	echo 'Listening udp packets'
	sudo tcpdump -s 0 -n -U -i $IFACE udp host $HOST >> $OUTPUT_FILE

elif [ "$1" == "ip" ]; then
	echo 'Listening ip packets'
	sudo tcpdump -s 0 -n -U -i $IFACE ip host $HOST >> $OUTPUT_FILE

elif [ "$1" == "video" ]; then
	echo 'Listening video packets'
#	sudo tcpdump -s 0 -q -U -n -i $IFACE -w $PCAP_OUTPUT_FILE
	sudo tcpdump -s 0 -q -U -n -i $IFACE | awk '/IP/ {c++; print(c "|video|'"$HOST"'|" $0)} {}' >> $OUTPUT_FILE
#	sudo tcpdump -s 0 -q -U -n -i $IFACE | awk '/IP/ {c++; print(c "|video|'"$HOST"'|" $0)} {}'
	exit 0
elif [ "$1" == "voip" ]; then
	echo 'Listening VoIP calls'
#	sudo tcpdump -s 0 -q -U -n -i $IFACE -w $PCAP_OUTPUT_FILE
	sudo tcpdump -s 0 -q -U -n -i $IFACE | awk '/IP/ {c++; print(c "|voip|'"$HOST"'|" $0)} {}' >> $OUTPUT_FILE
#	sudo tcpdump -s 0 -q -U -n -i $IFACE | awk '/IP/ {c++; print(c "|voip|'"$HOST"'|" $0)} {}'

elif [ "$1" == "browsing" ]; then
	echo 'Listening browsing packets'
#	sudo tcpdump -s 0 -q -U -n -i $IFACE -w $PCAP_OUTPUT_FILE
	sudo tcpdump -s 0 -q -U -n -i $IFACE | awk '/IP/ {c++; print(c "|browsing|'"$HOST"'|" $0)} {}' >> $OUTPUT_FILE
#	sudo tcpdump -s 0 -q -U -n -i $IFACE | awk '/IP/ {c++; print(c "|browsing|'"$HOST"'|" $0)} {}'

elif [ "$1" == "host" ]; then
#	sudo tcpdump -s 0 -q -U -n -i $IFACE host $HOST  >> $OUTPUT_FILE
	sudo tcpdump -s 0 -q -U -n -i $IFACE host $HOST 
else
	echo 'Listening every packet in my host'
	sudo tcpdump -s 0 -q -U -n -i $IFACE 
fi

