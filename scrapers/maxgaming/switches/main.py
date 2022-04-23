import string
import requests
from bs4 import BeautifulSoup
import json
import re

baseUrl = "https://www.maxgaming.com"
switchCategoryUrl = baseUrl + \
    "/en/pc-accessories/keyboard-accessories/custom-keyboard/switches"


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
    items = soup.find_all("a", class_="PT_Lank")

    hrefs = []

    for item in items:
        hrefs.append(item["href"])

    return hrefs


def collectAndNavigate(soup, url_list):
    for url in collectHrefs(soup):
        url_list.append(url)

    print("Collected, checking next page")

    try:
        next_page = soup.find("a", string="Next »")["href"]
        print("Next page found")
        r = requests.get(baseUrl + next_page)
        soup = BeautifulSoup(r.text, 'html.parser')
        collectAndNavigate(soup, url_list)
    except:
        print("Done")
        return url_list


def scrapeSwitchFrom(url):
    switch_url = baseUrl + url

    r = requests.get(switch_url)
    soup = BeautifulSoup(r.text, 'html.parser')

    heading = soup.find("h1", id="ArtikelnamnFalt").getText(
        separator=",", strip=True).split(",")

    brand = heading[0]
    name = heading[1]

    price = soup.find("meta", attrs={'itemprop': 'price'})["content"]

    desc = soup.find("div", class_="prop-group").getText(
        separator="\n", strip=True)

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
        travel = re.findall('([0-9,.]+\s*[m]{2})',
                            desc, re.IGNORECASE)[-1]
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


r = requests.get(switchCategoryUrl)
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
