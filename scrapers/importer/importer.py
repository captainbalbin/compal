#!/usr/bin/env python3

import getopt
import os
import sys
import json

from dotenv import load_dotenv
from pymongo import MongoClient

# Check arguments
(optlist, _) = getopt.getopt(sys.argv[1:], '', ["path="])

try:
    (_, path) = optlist[0]
except:
    print("Please provide path to the res file with --path")
    sys.exit()

# Load env
load_dotenv()
mongo_url = os.environ["MONGODB"]

# Setup DB
client = MongoClient(mongo_url)
db = client.ignore_list

# Get url's from ignore list
ignore_urls = []

for entry in db.switches.find():
    ignore_urls.append(entry["url"])

# Load data

f = open(path)
try:
    data = json.load(f)
except:
    print("Path dosen't contain JSON")
    sys.exit()

for i in data[:2]:
    print(i["name"])

f.close()
