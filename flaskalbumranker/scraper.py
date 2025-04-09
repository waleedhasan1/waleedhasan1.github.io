import os
import requests
from bs4 import BeautifulSoup
import sqlite3
import time
import random

# Setup database connection
DB_PATH = 'albums.db'

def init_db():
    """Make sure database exists with required tables"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS albums (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        artist TEXT NOT NULL,
        title TEXT NOT NULL,
        image_path TEXT NOT NULL,
        elo_rating REAL DEFAULT 1400,
        wins INTEGER DEFAULT 0,
        losses INTEGER DEFAULT 0
    )
    ''')
    
    conn.commit()
    conn.close()

def save_image(image_url, artist, title):
    """Download and save image from URL"""
    try:
        # Create folder if it doesn't exist
        if not os.path.exists('static/album_covers'):
            os.makedirs('static/album_covers')
            
        # Clean filename
        filename = f"{artist.replace(' ', '_')}_{title.replace(' ', '_')}.jpg"
        filepath = os.path.join('static/album_covers', filename)
        
        # Download the image
        response = requests.get(image_url, stream=True)
        response.raise_for_status()  # Raise an exception for bad status codes
        
        with open(filepath, 'wb') as out_file:
            out_file.write(response.content)
            
        return os.path.join('static', 'album_covers', filename)
    except Exception as e:
        print(f"Error saving image for {artist} - {title}: {e}")
        return None

def add_album_to_db(artist, title, image_path):
    """Add album details to database"""
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        cursor.execute(
            "INSERT INTO albums (artist, title, image_path) VALUES (?, ?, ?)",
            (artist, title, image_path)
        )
        
        conn.commit()
        conn.close()
        print(f"Added to database: {artist} - {title}")
        return True
    except Exception as e:
        print(f"Error adding to database: {artist} - {title}: {e}")
        return False

def scrape_discogs_chart():
    """Example scraper for Discogs popular charts"""
    url = "https://www.discogs.com/search/?sort=hot%2Cdesc&type=all"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find album cards
        albums = soup.select('.card_card__bEXjw')
        
        for album in albums:
            try:
                # Extract album information
                title_element = album.select_one('.card_title__xMvxM')
                artist_element = album.select_one('.card_artist__Yjdyt')
                image_element = album.select_one('.card_image__s8o9Q img')
                
                if title_element and artist_element and image_element:
                    title = title_element.text.strip()
                    artist = artist_element.text.strip()
                    image_url = image_element.get('src')
                    
                    # Check if image URL is valid
                    if image_url and not image_url.startswith('data:'):
                        image_path = save_image(image_url, artist, title)
                        
                        if image_path:
                            add_album_to_db(artist, title, image_path)
                            # Sleep to avoid overloading the server
                            time.sleep(random.uniform(1, 2))
            except Exception as e:
                print(f"Error processing album: {e}")
                continue
    except Exception as e:
        print(f"Error scraping website: {e}")

def scrape_musicbrainz_api():
    """Example scraper using MusicBrainz API"""
    # MusicBrainz API base URL
    base_url = "https://musicbrainz.org/ws/2"
    
    # Search for albums with covers
    search_url = f"{base_url}/release?query=type:album AND primarytype:album AND status:official&limit=25&fmt=json"
    
    headers = {
        "User-Agent": "YourApp/1.0 (your@email.com)"  # Required by MusicBrainz
    }
    
    try:
        response = requests.get(search_url, headers=headers)
        response.raise_for_status()
        data = response.json()
        
        for release in data.get('releases', []):
            try:
                title = release.get('title', '')
                artist_credit = release.get('artist-credit', [])
                
                if artist_credit and len(artist_credit) > 0:
                    artist = artist_credit[0].get('name', '')
                    
                    # Get cover art from Cover Art Archive
                    mbid = release.get('id')
                    if mbid:
                        cover_url = f"https://coverartarchive.org/release/{mbid}/front"
                        
                        # Try to download the cover
                        image_path = save_image(cover_url, artist, title)
                        
                        if image_path:
                            add_album_to_db(artist, title, image_path)
                            # Sleep to avoid overloading the server
                            time.sleep(random.uniform(1, 2))
                
            except Exception as e:
                print(f"Error processing release: {e}")
                continue
                
            # Be nice to the API - don't make too many requests too quickly
            time.sleep(1)
    except Exception as e:
        print(f"Error accessing MusicBrainz API: {e}")

def scrape_lastfm_top_albums():
    """Example scraper for Last.fm top albums"""
    url = "https://www.last.fm/charts/albums"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find album elements
        album_elements = soup.select('.chart-row')
        
        for album_elem in album_elements:
            try:
                # Extract album information
                title_elem = album_elem.select_one('.chart-row-content a')
                artist_elem = album_elem.select_one('.chart-row-artist a')
                image_elem = album_elem.select_one('.avatar img')
                
                if title_elem and artist_elem and image_elem:
                    title = title_elem.text.strip()
                    artist = artist_elem.text.strip()
                    image_url = image_elem.get('src')
                    
                    # Last.fm usually has small images, try to get a larger version
                    if image_url:
                        image_url = image_url.replace('64s', '300x300')
                        
                        image_path = save_image(image_url, artist, title)
                        
                        if image_path:
                            add_album_to_db(artist, title, image_path)
                            # Sleep to avoid overloading the server
                            time.sleep(random.uniform(1, 2))
            except Exception as e:
                print(f"Error processing album: {e}")
                continue
    except Exception as e:
        print(f"Error scraping Last.fm: {e}")

if __name__ == "__main__":
    print("Album Cover Web Scraper")
    print("----------------------")
    print("1. Initialize database")
    print("2. Scrape Discogs charts")
    print("3. Scrape MusicBrainz API")
    print("4. Scrape Last.fm top albums")
    
    choice = input("Enter your choice (1-4): ")
    
    if choice == '1':
        init_db()
        print("Database initialized!")
    elif choice == '2':
        init_db()  # Make sure DB exists
        print("Scraping Discogs charts...")
        scrape_discogs_chart()
    elif choice == '3':
        init_db()  # Make sure DB exists
        print("Scraping MusicBrainz API...")
        scrape_musicbrainz_api()
    elif choice == '4':
        init_db()  # Make sure DB exists
        print("Scraping Last.fm top albums...")
        scrape_lastfm_top_albums()
    else:
        print("Invalid choice!")