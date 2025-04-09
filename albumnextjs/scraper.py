import requests
from bs4 import BeautifulSoup

def get_website_dom(url):
    try:
        # Send a GET request to the website
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
        response.raise_for_status()  # Raise an error for bad responses (4xx, 5xx)
        
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')
        return soup
    
    except requests.exceptions.RequestException as e:
        print(f"Error fetching the website: {e}")
        return
    






if __name__ == "__main__":
    url = "https://indieground.net/blog/best-album-covers-of-all-time/"  # Replace with your target URL
    dom = get_website_dom(url)
    

    if dom:

        imgsrcs = []
        h3titles = []
        h3authors = []
        h3years = []        
        allimgtags = dom.find_all("img",title=True)
        allh3tags = dom.find_all("h3")

        for h3tag in allh3tags:
            print(h3tag)

       # print()
       # for imgtag in allimgtags:
       #     imgsrcs.append(imgtag['src'])
       # print(imgsrcs)
        #What do we want
        #we want a list of all the SRC URLS  
        #We Want a list of all Album names
        #we want list of of all Album Authors
        #all album dates
        #everything but src urls in the h3 tags