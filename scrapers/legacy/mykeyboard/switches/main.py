#!/usr/bin/env python3

import requests
from bs4 import BeautifulSoup
import json
import re

baseUrl = "https://mykeyboard.eu"
switchCategoryUrl = baseUrl + "/catalogue/category/switches_11/"
initalUrl = switchCategoryUrl + \
    "?selected_facets=num_in_stock_exact%3A%5B1+TO+*%5D&q=&sort_by=title-asc"


class Switch:
    def __init__(self,
                 url='',
                 name='',
                 desc='',
                 brand='',
                 price='',
                 feedback='',
                 weight='',
                 travel='',
                 lubrication=''):
        self.url = url
        self.name = name
        self.desc = desc
        self.brand = brand
        self.price = price
        self.feedback = feedback
        self.weight = weight
        self.travel = travel
        self.lubrication = lubrication


def collectHrefs(soup):
    items = soup.find_all("div", class_="image_container")

    hrefs = []

    for item in items:
        hrefs.append(item.find("a")["href"])

    return hrefs


def collectAndNavigate(soup, url_list):
    for url in collectHrefs(soup):
        url_list.append(url)

    print("Collected, checking next page")

    try:
        next_page = soup.find("li", class_="next").a["href"]
        print("Next page found")
        r = requests.get(switchCategoryUrl + next_page)
        soup = BeautifulSoup(r.text, 'html.parser')
        collectAndNavigate(soup, url_list)
    except:
        print("Done")
        return url_list


def scrapeSwitchFrom(url):
    switch_url = baseUrl + url

    r = requests.get(switch_url)
    soup = BeautifulSoup(r.text, 'html.parser')

    name = soup.find("div", class_="col-sm-6 product_main").h1.getText()

    price = soup.find("p", class_="price_color").getText()
    price = re.search('€\s*([0-9,.]+)', price).group(1)

    desc = ""
    desc_start = soup.find("div", id="product_description")

    for tag in desc_start.next_siblings:
        if tag.name == "div":
            break
        desc += tag.getText(separator="\n", strip=True)

    brand = ""
    for b in ["Gateron", "Durock", "JWK", "TTC", "Hako", "Kailh", "NovelKeys", "Cherry"]:
        if b.lower() in desc.lower():
            brand = b
            break

    feedback = ""
    if [itm for itm in ["Linear", "linear"] if (itm in desc)]:
        feedback = "Linear"
    if [itm for itm in ["Tactile", "tactile"] if (itm in desc)]:
        feedback = "Tactile"
    if [itm for itm in ["Clicky", "clicky"] if (itm in desc)]:
        feedback = "Clicky"

    try:
        weight = re.findall(
            '([0-9,.]+\s*[g,c]+N*)', desc, re.IGNORECASE)[-1]
    except:
        weight = ""
        print(f'No weight at url: {switch_url}')

    try:
        travel = re.search('([0-9,.]+\s*[a-z]*)\s*travel',
                           desc, re.IGNORECASE).group(1)
    except:
        travel = ""
        print(f'No travel at url: {switch_url}')

    return json.dumps(Switch(
        switch_url,
        name,
        desc,
        brand,
        price,
        feedback,
        weight,
        travel
    ).__dict__)

#####################################################################################


r = requests.get(initalUrl)
soup = BeautifulSoup(r.text, 'html.parser')

product_urls = []
switches = []

collectAndNavigate(soup, product_urls)

for idx, url in enumerate(product_urls):
    print(f'{idx + 1}/{len(product_urls)}: {url}')
    switches.append(scrapeSwitchFrom(url))

f = open("res.json", "a")
f.write("[")
f.write(",".join(switches))
f.write("]")
f.close()
