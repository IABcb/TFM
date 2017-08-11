# -*- coding: utf-8 -*-

import json
import requests

class geoIP():
    def __init__(self, ip=None, ip_list = None):
        if ip:
            self.ip = ip
            try:
                self.response = requests.get("http://freegeoip.net/json/"+self.ip)
                # responseJson = json.loads(response.text) #lo serializa y convierte en un objeto Python
                self.responseJson = json.loads(self.response.content.decode('utf-8'))  # lo serializa y convierte en un objeto Python
            except:
                print('Impossible retrieving info from IP ' + self.ip)
        elif ip_list:
            self.ip_list = ip_list
            self.ip_dicc_response = dict()
            for ip in self.ip_list:
                try:
                    self.ip_dicc_response[ip] = json.loads((requests.get("http://freegeoip.net/json/"+ ip)).content.decode('utf-8'))
                except:
                    print('Impossible retrieving info from IP ' + ip)
        else:
            print('Empty ip or ip list in class geoIP')

        self.list_summary = ['country_name','city','region_name','latitude',
                             'longitude','country_code','region_code','zip_code']

    def getCountry(self):
        return self.responseJson["country_name"]

    def getCity(self):
        return self.responseJson["city"]

    def getRegion(self):
        return self.responseJson['region_name']

    def getLatitude(self):
        return self.responseJson['latitude']

    def getLongitude(self):
        return self.responseJson['longitude']

    def getCoordinates(self):
        return {"latitude":self.getLatitude(),"longitude":self.getLongitude()}

    def getCountryCode(self):
        return self.responseJson['country_code']

    def getRegionCode(self):
        return self.responseJson['region_code']

    def getPostal(self):
        return self.responseJson['zip_code']

    def summary_list(self):
        ip_dicc_summary = dict()
        for ip in self.ip_dicc_response.keys():
            dicc_summary = {item:self.ip_dicc_response[ip][item] for item in self.list_summary}
            ip_dicc_summary[ip] = dicc_summary
        return(ip_dicc_summary)


class ipInfo():
    def __init__(self, ip=None, ip_list=None):
        if ip:
            self.ip = ip
            try:
                self.response = requests.get("http://ipinfo.io/" + self.ip)
                # responseJson = json.loads(response.text) #lo serializa y convierte en un objeto Python
                self.responseJson = json.loads(
                    self.response.content.decode('utf-8'))  # lo serializa y convierte en un objeto Python
            except:
                print('Impossible retrieving info from IP ' + ip)
        elif ip_list:
            self.ip_list = ip_list
            self.ip_dicc_response = dict()
            for ip in self.ip_list:
                try:
                    self.ip_dicc_response[ip] = json.loads((requests.get("http://freegeoip.net/json/"+ ip)).content.decode('utf-8'))
                except:
                    print('Impossible retrieving info from IP ' + ip)
        else:
            print('Empty ip or ip list in class geoIP')

        self.list_summary = ['country_name','city','region_name','latitude',
                             'longitude','country_code','region_code','zip_code']

    def getCountry(self):
        return self.responseJson["country"]

    def getCity(self):
        return self.responseJson["city"]

    def getRegion(self):
        return self.responseJson['region']

    def getCoordinates(self):
        loc =  self.responseJson['loc']
        lat = loc.split(',')[0]
        long = loc.split(',')[1]
        return {"latitude":lat,"longitude":long}

    def getPostal(self):
        return self.responseJson['postal']

    def summary_list(self):
        ip_dicc_summary = dict()
        for ip in self.ip_dicc_response.keys():
            dicc_summary = {item:self.ip_dicc_response[ip][item] for item in self.list_summary}
            ip_dicc_summary[ip] = dicc_summary
        return(ip_dicc_summary)

if __name__ == "__main__":
    print('Info API 1\n')
    # API freeGeoIP
    # 1 IP
    # ip1 = geoIP(ip = "50.78.253.58")
    # print(ip1.getCountry())
    # print(ip1.getCity())
    # print(ip1.getRegion())
    # print(ip1.getLatitude())
    # print(ip1.getLongitude())
    # print(ip1.getCoordinates())
    # print(ip1.getCountryCode())
    # print(ip1.getRegionCode())
    # print(ip1.getPostal())

    # List of IPs
    ip_list1 = geoIP(ip_list=["50.78.253.58", '81.32.434.2', '23.4.2.2'])
    print(ip_list1.summary_list())



    # API ipInfo
    # 1 IP
    # print('Info API 2\n')

    # ip2 = ipInfo("81.32.44.2")
    # print(ip2.getCountry())
    # print(ip2.getCity())
    # print(ip2.getRegion())
    # print(ip2.getCoordinates())
    # print(ip2.getPostal())
    #
    # # List of IPs
    # ip_list2 = ipInfo(ip_list=["50.78.253.58", '50.78.253.57','81.32.434.2'])
    # print(ip_list2.summary_list())