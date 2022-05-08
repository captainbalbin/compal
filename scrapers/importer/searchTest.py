#!/usr/bin/env python3

import os
import sys

from dotenv import load_dotenv
from pymongo import MongoClient

# Load env
load_dotenv()
mongo_url = os.environ["MONGODB"]

# Setup DB
client = MongoClient(mongo_url)
db = client.products

# Prompt
query = input("Enter your search query: ").strip()

query_res = db.switches.aggregate([
    {"$search": {
        "text": {
            "query": query,
            "path": "name",
            "fuzzy": {}
        }
    }
    },
    {"$project": {
        "_id": 0,
        "name": 1
    }
    }
])

for res in query_res:
    print(res)
