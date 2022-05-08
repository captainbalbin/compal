#!/usr/bin/env python3

import getopt
import os
import sys
import json

from dotenv import load_dotenv
from pymongo import MongoClient

# Load env
load_dotenv()
mongo_url = os.environ["MONGODB"]

# Setup DB
client = MongoClient(mongo_url)

# Upsert into Mongo
db = client.products

for prod in db.switches.find({}):
    print(prod["name"])
