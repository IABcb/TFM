#!/usr/bin/perl -w
# VoIP Traffic Generator - Client
# Created By: Bruno Benchimol <brunobenchimol@terra.com.br
#
# Testado em:
# Linux - Debian 3.0 - perl v5.6.1
# FreeBSD 5.4 - perl v5.8
# 
# Should work on any perl v5.x
#
# Version: v0.1b

use Time::HiRes qw(usleep ualarm gettimeofday);
use IO::Socket::INET; 
use Getopt::Long;

print "	           >>>> VoIP Traffic Generator <<<<\n";

sub QueryStatistics
{
 # Create a new socket
 $Socket=new IO::Socket::INET->new (PeerPort=>$port,
					Proto=>'udp',
					PeerAddr=>$peer) 
	or die "Couldnt connect to host $peer on port $port using udp\n";
	
  $smsg="status,$_[0]";	
  if(!$Socket->send($smsg))
  {
  print "Socket failed to send data !!!\n";
  }
  
}

# Send 1 second burst!
sub SendBurst
{
 # Create a new socket
 $Socket=new IO::Socket::INET->new (PeerPort=>$port,
					Proto=>'udp',
					PeerAddr=>$peer) 
	or die "Couldnt connect to host $peer on port $port using udp\n";

 $count_duration=0;
 $duration = $_[0];
 
 $count=0;
 $pps=$_[1];
 

 # calculte inter-packet time (in microseconds)
 $sleep_time = (1/$pps)*100;

 while($count_duration < $duration)
 {
  # reset inner counter so it will run again
  $count = 0;
  while($count < $pps)
  {
     if(!$Socket->send($msg))
     {
      print "Socket failed to send data !!!\n";
     }

  $count++;
  # microseconds sleep time
  Time::HiRes::usleep($sleep_time);
  }

 $count_duration++;
 }

}

sub usage
{
print <<END

 --size, -s		payload size of udp packet (bytes)
 --pps, -k		packets per second
 --time, -t		time of the duration of test (seconds)
 --streams, -m		number of parallel connections (streams)
 --port, -p		port to connect
 --host, -h		ip to connect
	
END
}

## >>>>>> Main Program <<<<<

if (@ARGV < 6)
{
 print "\nNot enough arguments.\n";
 usage();
 exit(-1);
}


# parameters

GetOptions ("size|s=i" => \$udp_payload_size,
	    "pps|k=i" => \$packet_per_second,
	    "time|t=i" => \$duration_test,
	    "streams|m=i" => \$maxfork,
	    "port|p=i" => \$port,
	    "host|h=s" => \$peer);


print "\nConnecting to $peer on $port, crafting UDP packets with payload of $udp_payload_size bytes, sending $packet_per_second packets per second, test will run for $duration_test seconds and has $maxfork streams. \n\n";

# udp payload size in bytes
 $msg = "";
 for ($i=0 ; $i < $udp_payload_size; $i++)  {
  $msg .= ".";
 }
# expected number of packets to send
$totalpackets = $packet_per_second * $duration_test * $maxfork;

$ifork=0;
print "Spawning childrens processes ...\n";
while ($ifork < $maxfork)
{
 if (fork) {
 # parent do almost nothing
  $ifork++;
 } else {
 # child send burst
  &SendBurst($duration_test, $packet_per_second);
  exit(0);
 }
}

print "Waiting on childrens to finish ...\n";
print "Total Packets expected to be sent: " . $totalpackets;
# wait childrens to finish
wait();

print "\nTraffic Sent, now making server dump statistics on screen, wait...\n";
sleep(1);
&QueryStatistics($totalpackets);
print "Done, Check Server Screen.\n";

exit(0);

