import requests
import urllib
import os
import base64
import configparser

config = configparser.ConfigParser()
config.read('conf.ini')

consumerKey = config.get('configSettings','consumerKey')
consumerSecret = config.get('configSettings','consumerSecret')
token_url = config.get('configSettings','token_url')
rest_url = config.get('configSettings','rest_url')

applicationToken = consumerKey + ":" + consumerSecret

applicationToken_byte = applicationToken.encode("utf-8")
b64Val = base64.b64encode(applicationToken_byte)

params = urllib.parse.urlencode({'grant_type': 'client_credentials'})

headers = {"Content-type": "application/x-www-form-urlencoded",
           "Authorization": "Basic " + b64Val.decode()}

r = requests.post(url = token_url,
                  data = params,
                  headers = headers)

token = r.json()['access_token']

headersReq = {"Authorization" :"Bearer " + token,
              "Accept" : "*/*"}

req = requests.get(rest_url, headers=headersReq, verify=False)

print("Request status: " + str(req.status_code))

response = req.json()

