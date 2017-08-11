#!/bin/bash

LOG_FILE_NAME="dpi.logfile.log"
#LOG_FILE_NAME="README.txt"
LOG_FILE_HOME="/tmp"
#LOG_FILE_HOME="$HOME"
GB_LOGFILE_SIZE=.02
PART_TO_DELETE=0.5


LOG_FILE_NAME="$LOG_FILE_HOME/$LOG_FILE_NAME"
CONVERSION_SIZE=$((1024**3))
MAX_SIZE=$(echo "$CONVERSION_SIZE*$GB_LOGFILE_SIZE" | bc)
MAX_SIZE=$(echo ${MAX_SIZE%%.*})

downloadPage () {
	wget 'www.as.com'
}

downloadPage &

while true; do
	
	SIZE_FILE=$(stat -c %s $LOG_FILE_NAME)

	if [ $((SIZE_FILE)) -gt $MAX_SIZE ]
	then

		echo 'File is' $SIZE_FILE 'bytes'
		echo 'Max file is' $MAX_SIZE 'bytes'
		echo 'cut' $BYTES_TO_MOVE

		BYTES_TO_MOVE=$(echo "$SIZE_FILE-$MAX_SIZE+$MAX_SIZE*$PART_TO_DELETE" | bc)
		BYTES_TO_MOVE=$(echo ${BYTES_TO_MOVE%%.*})

		dd if="$LOG_FILE_NAME" of="$LOG_FILE_NAME~" bs=1 skip=$BYTES_TO_MOVE
		mv "$LOG_FILE_NAME~" "$LOG_FILE_NAME"
	fi
done
