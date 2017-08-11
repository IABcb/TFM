#!/bin/bash

#### SOURCES CONFIG
VIDEO_PAGE='https://www.youtube.com/watch?v=ruabyha_mGI'
PAGE='www.as.com'
#### GENERAL PARAMETERS CONFIG
PER_GARBAGE_TIME=0.3
GARBAGE_PATH='.Garbage'

# HTTP
HTTP_DW_TO_SLEEP=3

# VIDEO
VIDEO_DW_TO_SLEEP=0

# VOIP
# BITS PER SECOND
CODEC=64000 
# VOICE PAYLOAD SECONDS PER PACKET
PACKETVOICE=0.02 
# 8 BITS ARE 1 BYTE
BIT_TO_BYTE=8 
IPHEADER=40 # BYTES
ETHERNETHEADER=18 # BYTES
VOIP_PACKET_SIZE=$(echo "($CODEC * $PACKETVOICE + $IPHEADER + $ETHERNETHEADER) * (1/$BIT_TO_BYTE)" | bc -l | awk '{print int($1+0.5)}') # BYTES
VOIP_IP=8.8.8.8

TRAFFIC_TYPE=$1
TIME_RUNNING=$2
TRAFFIC_TARGET=$3

TCPDUMP_PATH="TrafficAnalyzer"
TCPDUMP_SLEEP_NEXT=3
TCPDUMP_PID=$(ps -ef | awk '/\/bin\/bash .\/tcpdump.sh/ {print $2}')
############## FUNCTIONS

startTcpdump () {
	sudo ./$TCPDUMP_PATH/tcpdump.sh $TRAFFIC_TYPE &
	sleep $TCPDUMP_SLEEP_NEXT
}

finishTcpdump () {
	sudo pkill tcpdump
}

emptyTrash () {
	echo 'Empty TRASH!'
	rm -rf ~/.local/share/Trash/*
}

forceRemoveGarbage () {
	echo 'FORCE REMOVE GARBAGE'
	(rm -f $GARBAGE_PATH/* && echo 'Removed all garbage') || echo 'Does not exist garbage'
}

removeGarbage () {
	GARBAGE_TOTAL_TIME=$((START_GARBAGE_TIME + TIME_TO_REMOVE_GARBAGE))
	if [ $SECONDS -gt $GARBAGE_TOTAL_TIME ]; then
		echo 'Removing downloaded files..'
		(rm -f $GARBAGE_PATH/* && echo 'Removed all garbage') || echo 'Does not exist garbage'
		START_GARBAGE_TIME=$SECONDS
	fi
}

downloadPage () {
	echo 'Downloading page...'
#	wget --no-cache $PAGE -P $GARBAGE_PATH
	wget --no-cache $TRAFFIC_TARGET -P $GARBAGE_PATH
}

downloadVideo () {
	VIDEO_ID=$(shuf -i1-10000 -n1)
	echo 'Downloading video...'
#	youtube-dl -o "$GARBAGE_PATH/$VIDEO_ID-%(uploader)s%(title)s.%(ext)s" $VIDEO_PAGE
	youtube-dl -o "$GARBAGE_PATH/$VIDEO_ID-%(uploader)s%(title)s.%(ext)s" $TRAFFIC_TARGET
}

generateBrowsingTraffic () {

	BROW_END=$((SECONDS+TIME_RUNNING))

	while [ $SECONDS -lt $BROW_END ]; do
		echo 'Generating traffic of type: ' $TRAFFIC_TYPE
		downloadPage
		sleep $HTTP_DW_TO_SLEEP
		removeGarbage		
	done
}

generateVideoTraffic () {

	VIDEO_END=$((SECONDS+TIME_RUNNING))
	while [ $SECONDS -lt $VIDEO_END ]; do
		echo 'Generating traffic of type: ' $TRAFFIC_TYPE
		downloadVideo
		sleep $VIDEO_DW_TO_SLEEP
		removeGarbage
	done
}

generateVoIPTraffic () {
	echo 'Generating VoIP traffic'
	sudo ping -i $PACKETVOICE -w $TIME_RUNNING -s $VOIP_PACKET_SIZE $VOIP_IP
}

startGarbageContainer () {
	if [ ! -d "$GARBAGE_PATH" ]; then
		echo 'Creating container for garbage..'
		mkdir $GARBAGE_PATH
	fi
	TIME_TO_REMOVE_GARBAGE=$(echo "$TIME_RUNNING * $PER_GARBAGE_TIME" | bc -l | awk '{print int($1+0.5)}')
	START_GARBAGE_TIME=$SECONDS
}

############### MAIN

if [ "$1" == "--help" ]; then
	echo 'Welcome to Traffic Generator'
	echo '-> For Video Traffic, please introduce: ./generator.sh video <time_running_seconds> <Video target URL>'
	echo '-> For Browsing Traffic, please introduce: ./generator.sh browsing <time_running_seconds> <WebPage URL>'
	echo '-> For VoIP Traffic, please introduce: ./generator.sh voip <time_running_seconds>'

elif [ "$#" -eq 3 ] && [ $((TIME_RUNNING)) -eq $TIME_RUNNING ]; then

	startGarbageContainer

	if [ "$TRAFFIC_TYPE" == "browsing" ]; then
		#startTcpdump
		generateBrowsingTraffic
		forceRemoveGarbage
		emptyTrash
		#finishTcpdump
		exit 0
	elif [ "$TRAFFIC_TYPE" == "video" ]; then
		#startTcpdump
		generateVideoTraffic
		forceRemoveGarbage
		emptyTrash
		#finishTcpdump
		exit 0
	else
		echo 'Try: ./generator.sh --help'	
		finishTcpdump
		exit 1
	fi

elif [ "$#" -eq 2 ] && [ $((TIME_RUNNING)) -eq $TIME_RUNNING ]; then

	if [ "$TRAFFIC_TYPE" == "voip" ]; then
		#startTcpdump
		generateVoIPTraffic
		#finishTcpdump
		exit 0
	else
		echo 'Try: ./generator.sh --help'	
		finishTcpdump
		exit 1
	fi

else
	echo 'Try: ./generator.sh --help'
	exit 1
fi



