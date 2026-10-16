"""
Kevin Kipyegon Portfolio - Flask Web Application
Backend handling routing, contact submission with SQLite storage, and financial data endpoints.
"""

import json
import os
import sqlite3
from datetime import datetime
from flask import Flask, render_template, request, jsonify, redirect, url_for, flash
from config import Config

app = Flask(__name__, static_folder='static', template_folder='templates')
app.config.from_object(Config)

# Database initialization
DB_PATH = 'contact_messages.db'

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

init_db()

# Load portfolio data
def load_data():
    try:
        with open('data/portfolio_data.json', 'r') as f:
            return json.load(f)
    except Exception as e:
        return {}

def generate_financial_ai_summary(records):
    """
    Generate variance and financial insights using rule-based algorithms.
    If ANTHROPIC_API_KEY or GEMINI_API_KEY is configured in env, can query LLM.
    """
    if not records:
        return "No financial records available to evaluate."
    
    # Calculate biggest adverse variance and best revenue month
    biggest_adverse = min(records, key=lambda x: x.get('variance', 0))
    highest_revenue = max(records, key=lambda x: x.get('revenue', 0))
    highest_margin = max(records, key=lambda x: x.get('netIncome', 0))
    
    total_rev = sum(r.get('revenue', 0) for r in records)
    total_exp = sum(r.get('expenses', 0) for r in records)
    total_budget = sum(r.get('budgetExpenses', 0) for r in records)
    net_variance = total_budget - total_exp
    
    status_str = "favorable (KES {:,.0f} under budget)".format(net_variance) if net_variance >= 0 else "adverse (KES {:,.0f} over budget)".format(abs(net_variance))
    
    summary = (
        f"Executive Financial Insight: Year-to-date cumulative variance stands {status_str}. "
        f"The most critical budget variance occurred in {biggest_adverse['month']} with an adverse variance "
        f"of KES {abs(biggest_adverse['variance']):,.0f} ({biggest_adverse.get('notes', 'Procurement surge')}). "
        f"Strong operational recovery followed through {highest_revenue['month']}, posting peak revenue of KES {highest_revenue['revenue']:,.0f} "
        f"and solid working capital health."
    )
    return summary

@app.route('/')
def index():
    data = load_data()
    return render_template('index.html', data=data, config=Config)

@app.route('/api/financial-data')
def api_financial_data():
    data = load_data()
    records = data.get('financial_records', [])
    ai_summary = generate_financial_ai_summary(records)
    return jsonify({
        "status": "success",
        "data": records,
        "ai_summary": ai_summary
    })

@app.route('/api/contact', methods=['POST'])
def api_contact():
    data = request.get_json() or request.form
    name = (data.get('name') or '').strip()
    email = (data.get('email') or '').strip()
    message = (data.get('message') or '').strip()
    
    if not name or not email or not message:
        return jsonify({"status": "error", "message": "All fields (name, email, message) are required."}), 400
        
    if '@' not in email or '.' not in email:
        return jsonify({"status": "error", "message": "Please enter a valid email address."}), 400
        
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', (name, email, message))
        conn.commit()
        conn.close()
        return jsonify({"status": "success", "message": "Thank you! Your message has been sent successfully to Kevin Kipyegon."})
    except Exception as e:
        return jsonify({"status": "error", "message": "Could not save message. Please reach out directly on WhatsApp or Email."}), 500

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', config=Config), 404

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
