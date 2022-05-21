#!/usr/bin/env python3
import sys
import os

sys.path.append(os.path.abspath('../lib'))

from Scratch import Scraper
from Scratch import priceFinder, feedbackFinder, weightFinder, travelDistanceFinder
import requests
import re
from bs4 import BeautifulSoup


################################################################################

baseUrl = "https://keygem.store"
switchCategoryUrl = baseUrl + "/collections/switches?page=1&sort_by=title-ascending"


def urlProvider():
    r = requests.get(switchCategoryUrl)
    soup = BeautifulSoup(r.text, 'html.parser')
    return collectAndNavigate(soup)


def dataProvider(url):
    switch = {}

    switch["url"] = url

    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')

    name = soup.find("h1", class_="ProductMeta__Title Heading u-h2").getText()
    name = re.sub("((switch|switches)+)", "", name, flags=re.IGNORECASE)
    switch["name"] = re.sub(r'(\/\s*10\s*pcs)', "", name).strip()

    switch["brand"] = name.split(" ")[0]

    price = soup.find("span", class_="money").getText()
    switch["price"] = priceFinder(price)

    description = soup.find(
        "div", class_="ProductMeta__Description").getText(separator="\n", strip=True)

    switch["description"] = description

    switch["feedback"] = feedbackFinder(description)
    switch["travelDistance"] = travelDistanceFinder(description)

    variants = soup.find_all("button", attrs={"data-action": "select-value"})

    switch["bottomOut"] = weightFinder(description)
    switch["actuation"] = None
    switch["purchaseQuantity"] = 10

    if variants:
        switches = []
        for variant in variants:

            switchCpy = switch.copy()
            switchCpy["variantIndicator"] = variant.getText(
            ).lower(
            ).replace(",", ".")

            if switchCpy["bottomOut"] == None:
                switchCpy["bottomOut"] = weightFinder(variant.getText())

            switches.append(switchCpy)
        return switches
    else:
        switch["variantIndicator"] = None
        return [switch]


def weirdNameChecker(name):
    return "pcs" in name.lower() or "switch" in name.lower()


def customAttributer(product):
    weight = weightFinder(product["name"])
    if weight:
        product["name"] = product["name"].replace(weight, "").strip()
        product["weightInName"] = weight
        product["variantIndicator"] = weight.lower()


def collectAndNavigate(soup, url_list=[]):
    for url in collectHrefs(soup):
        url_list.append(baseUrl + url)

    print("Collected, checking next page")

    try:
        next_page = soup.find("a", attrs={"title": "Next page"})["href"]
        print("Next page found")
        r = requests.get(baseUrl + next_page)
        soup = BeautifulSoup(r.text, 'html.parser')
        return collectAndNavigate(soup, url_list)
    except:
        print("Done")
        return url_list


def collectHrefs(soup):
    items = soup.find_all("a", class_="ProductItem__ImageWrapper")

    hrefs = []

    for item in items:
        hrefs.append(item["href"])

    return hrefs

################################################################################


scraper = Scraper(
    storeName="keygem",
    urlProvider=urlProvider,
    dataProvider=dataProvider,
    weirdNameChecker=weirdNameChecker,
    weirdPriceBoundry=1.0,
    typicalQuantity=10,
    customAttributer=customAttributer
)

scraper.run()
