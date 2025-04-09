from flask import Flask, render_template, request, redirect, url_for
import sqlite3
import random
import os
from math import log

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
DB_PATH = 'albums.db'

def init_db():
    """Initialize the database with tables if they don't exist"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Create albums table
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
    
    # Create comparison history table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS comparisons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        winner_id INTEGER,
        loser_id INTEGER,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (winner_id) REFERENCES albums (id),
        FOREIGN KEY (loser_id) REFERENCES albums (id)
    )
    ''')
    
    conn.commit()
    conn.close()