import os
import sys

import validators
from dotenv import load_dotenv
from pymongo import MongoClient

# Load env
load_dotenv()
mongo_url = os.environ["MONGODB"]

# Setup DB
client = MongoClient(mongo_url)
db = client.ignore_list

# Prompt
reason = input("Enter reason: ").strip()
url = input("Enter URL: ").strip()

if not validators.url(url):
    print("⚠️  Provided URL is not correct ⚠️")
    sys.exit()

query_res = db.switches.find_one({"url": url})

if query_res:
    print("⚠️  Given URL is already ignored ⚠️")
    print(f'Reason: {query_res["reason"]}')
    sys.exit()
else:
    db.switches.insert_one({
        "reason": reason,
        "url": url
    })
    print("Succefully added URL to the ignore list ✅")
