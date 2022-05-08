#!/usr/bin/env python3

import requests
from bs4 import BeautifulSoup
import json
import re


def tableContent(table):
    row_name = []
    row_data = []
    trs = table.find_all('tr')
    headerow = [td.get_text(strip=True)
                for td in trs[0].find_all('th')]  # header row
    if headerow:  # if there is a header reemove
        trs = trs[1:]
    for tr in trs:  # for every table row
        name = tr.find_all('th')[0].get_text(strip=True)
        data = tr.find_all('td')[0].get_text(strip=True)

        row_name.append(name)
        row_data.append(data)
    return (row_name, row_data)


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
                 factoryLubed='',
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
        self.travel = travel
        self.factoryLubed = factoryLubed
        self.wierdPrice = wierdPrice
        self.wierdName = wierdName
        self.purchaseQuantity = 1


#####################################################################################

# Class soup.find_all("h1", class_="title m-b-2")
# Attribute soup.find_all(attrs={":category": '["switches"]'})

r = requests.get("https://candykeys.com/category:switches")
soup = BeautifulSoup(r.text, 'html.parser')
items = soup.find_all(attrs={":category": '["switches"]'})

output = []

for idx, item in enumerate(items):
    print(f'{idx + 1}/{len(items)}')
    switch_url = item.get("url")
    try:
        r = requests.get(switch_url)
        soup = BeautifulSoup(r.text, 'html.parser')

        name = soup.find("h1", class_="title m-b-2").getText().strip()

        wierdName = bool(re.search('\(.*\)', name))

        price = soup.find("span", class_="price").getText()
        price = re.search('([0-9,]+).*€', price).group(1)
        price = float(price.replace(',', '.'))

        wierdPrice = price > 1

        # Desc is given in two flavours we try for both here
        try:
            desc_parent = soup.find("div", class_="product-short")
            desc = desc_parent.getText(separator="\n", strip=True)
        except:
            try:
                desc_parent = soup.find("div", class_="description")
                desc_parent = desc_parent.find("div", class_="content")
                desc = desc_parent.getText(strip=True, separator="\n")
            except:
                desc = ""
                print(f'No desc at url: {switch_url}')
        #########################################################

        table = soup.find("div", class_="bx bg-lighter").table
        (tableNames, tableRows) = tableContent(table)

        try:
            brand = tableRows[tableNames.index("Brand")]
        except:
            brand = ""
            print(f'No brand at url: {switch_url}')

        try:
            feedback = tableRows[tableNames.index("Feedback")]
        except:
            feedback = ""
            if [itm for itm in ["Linear", "linear"] if (itm in desc)]:
                feedback = "Linear"
            elif [itm for itm in ["Tactile", "tactile"] if (itm in desc)]:
                feedback = "Tactile"
            elif [itm for itm in ["Clicky", "clicky"] if (itm in desc)]:
                feedback = "Clicky"
            else:
                print(f'No feedback at url: {switch_url}')

        try:
            weight = tableRows[tableNames.index("Spring Weight")]
        except:
            weight = ""
            print(f'No weight at url: {switch_url}')

        try:
            travel = tableRows[tableNames.index("Travel")]
        except:
            travel = ""
            print(f'No travel at url: {switch_url}')

        try:
            factoryLubed = tableRows[tableNames.index("Lubrication")]
        except:
            factoryLubed = ""
            print(f'No lubrication at url: {switch_url}')

        sw = Switch(
            switch_url,
            name,
            desc,
            brand,
            price,
            feedback,
            weight,
            travel,
            factoryLubed,
            wierdPrice,
            wierdName
        )

        output.append(json.dumps(sw.__dict__))
    except:
        print(f'Failed at url: {switch_url}')

f = open("res.json", "a")
f.write("[")
f.write(",".join(output))
f.write("]")
f.close()
