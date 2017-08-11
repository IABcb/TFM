sudo tcpdump -c 20 -s 0 -i eth1 -A host 192.168.1.1 and tcp port http

The parameter breakdown:
-c 20: Exit after capturing 20 packets.
-s 0: Don't limit the amount of payload data that is printed out. Print it all.
-i eth1: Capture packets on interface eth1
-A: Print packets in ASCII.
host 192.168.1.1: Only capture packets coming to or from 192.168.1.1.
and tcp port http: Only capture HTTP packets.




sudo tcpdump -s 0 -i enp1s0 host 159.107.45.204 and tcp port http test.txt
