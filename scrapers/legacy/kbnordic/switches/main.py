#!/usr/bin/env python3

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

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
        self.purchaseQuantity = 10


def waitForMainPage(driver):
    WebDriverWait(driver, 60).until(
        EC.presence_of_element_located(
            (By.CLASS_NAME, "ItemPrice"))
    )


def getCurrentHtml(driver):
    return driver.find_element(
        by=By.XPATH, value="//body").get_attribute('outerHTML')


def getProductUrls(html):
    soup = BeautifulSoup(html, 'html.parser')
    tags = soup.find_all("a", class_="tws-article-list--grid-item-link")
    hrefs = []

    for tag in tags:
        href = tag["href"]
        if "switches" in href:
            hrefs.append(href)

    return hrefs


def waitForProductPage(driver):
    WebDriverWait(driver, 60).until(
        EC.presence_of_element_located(
            (By.CLASS_NAME, "tws-article-name")))


def scrapeSwitchFrom(html, switch_url):
    soup = BeautifulSoup(html, 'html.parser')
    name = soup.find("div", class_="tws-article-name").getText()
    brand = ""
    for b in ["Gateron", "Durock", "JWK", "TTC", "Hako", "Kailh", "NovelKeys", "Cherry", "Tecsee", "SP-Star"]:
        if b.lower() in name.lower():
            brand = b
            break

    try:
        price = soup.find("span", class_="twsPriceCurrent").getText()
        price = re.search('€\s*([0-9,.]+)', price).group(1)
        price = float(price)
    except:
        price = ""
        print(f'No price at url: {switch_url}')

    desc = soup.find(
        "div", class_="tws-article-introduction--text").getText(separator="\n", strip=True)

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
        travel = re.findall('([0-9,.]+\s*[a-z]*).*travel',
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


switches = []

driver = webdriver.Chrome()
driver.get("https://kbnordic.eu/switches/")

print("Waiting inital load")
waitForMainPage(driver)

print("Parsing list")

switches = []
product_urls = getProductUrls(getCurrentHtml(driver))

for url in product_urls:
    driver.get(url)
    waitForProductPage(driver)
    switches.append(scrapeSwitchFrom(getCurrentHtml(driver), url))

driver.close()

f = open("res.json", "a")
f.write("[")
f.write(",".join(switches))
f.write("]")
f.close()
