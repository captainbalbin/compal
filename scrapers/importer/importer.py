#!/usr/bin/env python3

import getopt
import re
import os
import sys
import json

from bson import ObjectId

sys.path.append(os.path.abspath('../lib'))

from Keys import urlK, nameK, brandK, priceK, descriptionK, feedbackK, travelDistanceK, bottomOutK, actuationK, purchaseQuantityK, variantIndicatorK
from Keys import variantIdK, storeNameK, vendorsK, variantsK
from dotenv import load_dotenv
from pymongo import MongoClient

######################################################################


def formatVariant(entry):
    variant = {}

    variant[variantIdK] = ObjectId()
    variant[variantIndicatorK] = entry[variantIndicatorK]
    variant[descriptionK] = entry[descriptionK]
    variant[bottomOutK] = entry[bottomOutK]
    variant[actuationK] = entry[actuationK]
    variant[travelDistanceK] = entry[travelDistanceK]
    variant[vendorsK] = [formatVendorEntry(entry)]

    return variant


def formatVendorEntry(entry):
    return {
        urlK: entry[urlK],
        storeNameK: storeName,
        priceK: entry[priceK],
        purchaseQuantityK: entry[purchaseQuantityK]
    }
######################################################################

# Keys which are checked on existing entites for empty when importing
# If not empty nothing happens
# If empty we attempt to complement the data from the new import
# keylist = ["desc", "brand", "feedback", "bottomOut", "actuation"]


# Check arguments
(optlist, _) = getopt.getopt(sys.argv[1:], '', ["path="])

try:
    (_, path) = next(filter(lambda opt: opt[0] == "--path", optlist))
except:
    print("Please provide path to the res file with --path")
    sys.exit()

# Load env
load_dotenv(dotenv_path='../lib/.env')
mongo_url = os.environ["MONGODB"]

# Setup DB
client = MongoClient(mongo_url)

# Load data
f = open(path)
try:
    data = json.load(f)
except:
    print("Path dosen't contain JSON")
    sys.exit()

try:
    storeName = data["storeName"]
    productData = data["products"]
except:
    print("Path dosen't contain JSON")
    sys.exit()


# Upsert into Mongo
db = client.products
for entry in productData:
    # Check if name already exists
    existing = db.switches.find_one(
        {nameK: re.compile(entry[nameK], re.IGNORECASE)})  # Find name case insensitive

    # Update if existing
    if existing:

        # Check if variant already exists
        existingVariant = next(filter(
            lambda existing: entry[variantIndicatorK] == existing[variantIndicatorK], existing[variantsK]), None)

        if existingVariant:
            # Check if the URL is already in the Mongo
            if any(elem["url"] == entry["url"] for elem in existingVariant["vendors"]):
                print(f'URL for {entry["name"]} already in Mongo, omitting.')
                continue

            db.switches.update_one({nameK: entry[nameK], "variants.variantIndicator": entry[variantIndicatorK]}, {
                "$push": {
                    "variants.$.vendors": formatVendorEntry(entry)
                }
            })

            print("This vendor should be added exists")

        else:
            db.switches.update_one({nameK: entry[nameK]}, {
                "$push": {
                    variantsK: formatVariant(entry)
                }
            })

            print(f'Updated {entry[nameK]} with new variant')

        # # Try finding a variant with matching variantIndicator

        # # Check if existing entry has matching variant
        # if existingVariant:

        #     # Create setDict with missing data from variant
        #     setDict = {}
        #     for key in keylist:
        #         if key in existingVariant and existingVariant[key]:
        #             continue
        #         elif key in entry and entry[key]:
        #             setDict[key] = entry[key]

        #     db.switches.update_one({"name": entry["name"], "variants.variantIndicator": entry["variantIndicator"]}, {
        #         "$set": {
        #             "variants.$": setDict
        #         }
        #     })

        # # Item exists but can be updated with vendor

        # # Check for missing keys that can be complemented

        # db.switches.update_one({"name": entry["name"]}, {
        #     "$set": setDict,
        #     "$push": {
        #         "vendors": formatVendorEntry(entry)
        #     }
        # })
        # print(f'Updated {entry["name"]} succesfully')

    # Doesn't exist insert new
    else:
        insertDict = {}
        insertDict[nameK] = entry[nameK]
        insertDict[brandK] = entry[brandK]
        insertDict[feedbackK] = entry[feedbackK]

        insertDict[variantsK] = [formatVariant(entry)]

        db.switches.insert_one(insertDict)
        print(f'Inserted {entry["name"]} succesfully')

    # except:
    #     print(f'Something went wrong when inserting {entry["name"]}')
