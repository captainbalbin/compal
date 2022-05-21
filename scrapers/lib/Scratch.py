from dataclasses import replace
import json
import re
import os

from dotenv import load_dotenv
from pymongo import MongoClient

# Load env
load_dotenv()
mongo_url = os.environ["MONGODB"]

# Setup DB
client = MongoClient(mongo_url)


class Scraper:
    def __init__(self,
                 storeName,
                 urlProvider,
                 dataProvider,
                 weirdNameChecker,
                 weirdPriceBoundry,
                 typicalQuantity,
                 customAttributer=None):

        self.storeName = storeName
        self.urlProvider = urlProvider
        self.dataProvider = dataProvider
        self.weirdNameChecker = weirdNameChecker
        self.weirdPriceBoundry = weirdPriceBoundry
        self.typicalQuantity = typicalQuantity
        self.customAttributer = customAttributer

    def run(self):
        urls = self.urlProvider()
        urls = filterExistingURLs(urls)
        urls = filterIgnoredURLs(urls)

        products = []

        for idx, url in enumerate(urls):
            print(f'{idx + 1}/{len(urls)}: {url}')
            for product in self.dataProvider(url):
                products.append(product)

        self.__dividePricing(products)
        self.__markWithCustomAttributes(products)
        self.__replaceNonBreakableSpace(products)
        self.__markWeirdAttributes(products)
        self.__addMissingVariantIndicators(products)

        result_dict = {}

        result_dict["storeName"] = self.storeName
        result_dict["products"] = products

        self.__writeToFile(result_dict)

    def __dividePricing(self, products):
        for product in products:
            product["price"] = round(
                product["price"] / self.typicalQuantity, 2)

    def __replaceNonBreakableSpace(self, products):
        for product in products:
            for key in product.keys():
                if isinstance(product[key], str):
                    product[key] = product[key].replace(u"\u00A0", " ")

    def __addMissingVariantIndicators(products):
        for product in products:
            if "variantIndicator" in product:
                if product["variantIndicator"]:
                    continue
            try:
                if product["bottomOut"]:
                    product["variantIndicator"] = product["bottomOut"]
                    continue
            except:
                pass

            try:
                if product["actuation"]:
                    product["variantIndicator"] = product["actuation"]
                    continue
            except:
                pass

            product["variantIndicator"] = "Unique"

    def __markWeirdAttributes(self, products):
        for product in products:
            if self.weirdNameChecker(product["name"]):
                product["weirdName"] = True

            price = product["price"]
            if price >= self.weirdPriceBoundry or price < 0.3:
                product["weirdPrice"] = True

    def __markWithCustomAttributes(self, products):
        if self.customAttributer == None:
            return

        for product in products:
            self.customAttributer(product)

    def __writeToFile(self, products):
        json.dump(products, open(self.storeName + ".json", 'w'))


def feedbackFinder(text):
    if "linear" in text.lower():
        return "Linear"
    if "tactile" in text.lower():
        return "Tactile"
    if "clicky" in text.lower():
        return "Clicky"
    print("No feedback found")
    return None


def travelDistanceFinder(text):
    try:
        distance = re.search(
            r'([3-9]{1}[,.]?[0-9]*\s*[m]{2})', text, re.IGNORECASE).group(1)
        distance = distance.replace(" ", "")
        return distance
    except:
        return None


def brandFinder(text):
    return "Cherry"


def weightFinder(text):
    try:
        weight = re.search(
            r'([0-9,.]{2,}\s*[g,c]+N*)', text, re.IGNORECASE).group(1)
        weight = centiNewtonsToGram(weight)
        weight = weight.replace(",", ".").strip()
        return weight
    except:
        return None


def centiNewtonsToGram(text):
    if "g" in text.lower():
        return text

    cleaned = text.lower().replace("cn", "")
    value = float(cleaned) * 1.019716213
    rounded = round(value, 1)

    return f'{rounded}g'


def priceFinder(text):
    price = re.search(r'€?\s*([0-9,.]+)\s*€?', text).group(1)
    price = float(price.replace(",", "."))
    return price


def filterExistingURLs(urls):
    print("This will clear existing urls so we don't spam the servers")
    return urls


def filterIgnoredURLs(urls):
    # Get url's from ignore list
    ignored_urls = []

    db = client.ignore_list
    for entry in db.switches.find():
        ignored_urls.append(entry["url"])

    return list(filter(lambda url: url not in ignored_urls, urls))
