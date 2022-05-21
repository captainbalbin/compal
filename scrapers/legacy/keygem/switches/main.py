#!/usr/bin/env python3

import requests
from bs4 import BeautifulSoup
import json
import re


class Switch:
    def __init__(self,
                 url='',
                 name='',
                 desc='',
                 brand='',
                 price='',
                 feedback='',
                 weight='',
                 wierdPrice=False,
                 wierdName=False
                 ):
        self.url = url
        self.name = name
        self.desc = desc
        self.brand = brand
        self.price = price
        self.feedback = feedback
        self.weight = weight
        self.wierdPrice = wierdPrice
        self.wierdName = wierdName
        self.purchaseQuantity = 10


def collectHrefs(soup):
    items = soup.find_all("a", class_="ProductItem__ImageWrapper")

    hrefs = []

    for item in items:
        hrefs.append(item["href"])

    return hrefs


def collectAndNavigate(soup, url_list):
    for url in collectHrefs(soup):
        url_list.append(url)

    print("Collected, checking next page")

    try:
        next_page = soup.find("a", attrs={"title": "Next page"})["href"]
        print("Next page found")
        r = requests.get("https://keygem.store" + next_page)
        soup = BeautifulSoup(r.text, 'html.parser')
        collectAndNavigate(soup, url_list)
    except:
        print("Done")
        return url_list


def scrapeSwitchFrom(url):
    switch_url = "https://keygem.store" + url

    r = requests.get(switch_url)
    soup = BeautifulSoup(r.text, 'html.parser')

    name = soup.find("h1", class_="ProductMeta__Title Heading u-h2").getText()
    name = name.replace(" / 10pcs", "").strip()

    wierdName = "pcs" in name.lower() or "switch" in name.lower()

    brand = name.split(" ")[0]

    price = soup.find("span", class_="money").getText()
    price = re.search('€ ([0-9,]+)', price).group(1)
    price = float(price.replace(",", "."))

    if not wierdName:
        price = price/10

    wierdPrice = price > 1

    desc = soup.find(
        "div", class_="ProductMeta__Description").getText(separator="\n", strip=True)

    feedback = ""
    if [itm for itm in ["Linear", "linear"] if (itm in desc)]:
        feedback = "Linear"
    if [itm for itm in ["Tactile", "tactile"] if (itm in desc)]:
        feedback = "Tactile"
    if [itm for itm in ["Clicky", "clicky"] if (itm in desc)]:
        feedback = "Clicky"

    weights = []

    weight_options = soup.find_all(
        "button", attrs={"data-action": "select-value"})
    # Has multiple weights
    if weight_options:
        for weight_option in weight_options:
            weights.append(weight_option.getText())
    # Get weight from desc
    else:
        try:
            weight = re.search(
                '([0-9]{2,3}\s*[g,c]+N*)', desc, re.IGNORECASE).group(1)
            weights.append(weight)
        except:
            weights.append(0)

    switches = []

    for weight in weights:
        switches.append(
            json.dumps(Switch(
                switch_url,
                name,
                desc,
                brand,
                price,
                feedback,
                weight,
                wierdPrice,
                wierdName,
            ).__dict__)
        )
    return switches

#####################################################################################


r = requests.get(
    "https://keygem.store/collections/switches?page=1&sort_by=title-ascending")
soup = BeautifulSoup(r.text, 'html.parser')

product_urls = []
switches = []

collectAndNavigate(soup, product_urls)

for idx, url in enumerate(product_urls):
    print(f'{idx + 1}/{len(product_urls)}: {url}')
    for switch in scrapeSwitchFrom(url):
        switches.append(switch)


f = open("res.json", "a")
f.write("[")
f.write(",".join(switches))
f.write("]")
f.close()
