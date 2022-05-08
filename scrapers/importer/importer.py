#!/usr/bin/env python3

import getopt
import os
import sys
import json

from dotenv import load_dotenv
from pymongo import MongoClient


def formatVendorEntry(entry):
    return {
        "url": entry["url"],
        "vendorName": vendor,
        "price": entry["price"],
        "purchaseQuantity": entry["purchaseQuantity"]
    }


keylist = ["desc", "brand", "feedback", "factoryLubed"]


# Check arguments
(optlist, _) = getopt.getopt(sys.argv[1:], '', ["path=", "vendor="])

try:
    (_, path) = next(filter(lambda opt: opt[0] == "--path", optlist))
except:
    print("Please provide path to the res file with --path")
    sys.exit()

try:
    (_, vendor) = next(filter(lambda opt: opt[0] == "--vendor", optlist))
except:
    print("Please provide vendor being imported with --vendor")
    sys.exit()

# Load env
load_dotenv()
mongo_url = os.environ["MONGODB"]

# Setup DB
client = MongoClient(mongo_url)

# Get url's from ignore list
ignore_urls = []

db = client.ignore_list
for entry in db.switches.find():
    ignore_urls.append(entry["url"])

# Load data
f = open(path)
try:
    data = json.load(f)
except:
    print("Path dosen't contain JSON")
    sys.exit()


# Upsert into Mongo
db = client.products
for entry in data:
    # try:
    # Remove ignored
    if entry["url"] in ignore_urls:
        print(f'Ignoring {entry["name"]}')
        continue

    # Grab if item already exists
    existing = db.switches.find_one({"name": entry["name"]})

    # Update if existing
    if existing:
        # Check if this URL specifically already exists
        if "vendors" in existing:
            if any(elem["url"] == entry["url"] for elem in existing["vendors"]):
                print(f'URL for {entry["name"]} already in Mongo, omitting.')
                continue

        # Item exists but can be updated with vendor
        setDict = {}

        for key in keylist:
            if key in existing:
                continue
            elif key in entry and entry[key] != "":
                setDict[key] = entry[key]

        db.switches.update_one({"name": entry["name"]}, {
            "$set": setDict,
            "$push": {
                "vendors": formatVendorEntry(entry)
            }
        })
        print(f'Updated {entry["name"]} succesfully')

    # Doesn't exist insert new
    else:
        insertDict = {}
        insertDict["name"] = entry["name"].strip()

        for key in keylist:
            if key in entry and entry[key] != "":
                insertDict[key] = entry[key]

        insertDict["vendors"] = [formatVendorEntry(entry)]

        db.switches.insert_one(insertDict)
        print(f'Inserted {entry["name"]} succesfully')

    # except:
    #     print(f'Something went wrong when inserting {entry["name"]}')
