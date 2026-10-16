import os

class Config:
    """Portfolio configuration settings."""
    SECRET_KEY = os.environ.get('SECRET_KEY', 'kevin-kipyegon-portfolio-secret-2026')
    
    # Contact configuration
    # Single source of truth for phone/WhatsApp
    PHONE_RAW = "0740840045"
    PHONE_DISPLAY = "0740 840 045"
    PHONE_TEL = "+254740840045"
    WHATSAPP_NUMBER = "254740840045"
    WHATSAPP_DEFAULT_TEXT = "Hello Kevin, I visited your portfolio and would like to connect."
    WHATSAPP_URL = f"https://wa.me/{WHATSAPP_NUMBER}?text=Hello%20Kevin%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
    
    EMAIL = "kevinkipyegon111@gmail.com"
    GITHUB_URL = "https://github.com/KevinKay-art"
    LINKEDIN_URL = "https://www.linkedin.com/in/kevin-kipyegon-814439362/"
    LOCATION = "Nairobi, Kenya"
    
    # SQLite Database for contact message storage
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///contact_messages.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Optional LLM API keys
    ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY')
    GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
    
    # SMTP Email settings (Optional)
    MAIL_SERVER = os.environ.get('MAIL_SERVER')
    MAIL_PORT = int(os.environ.get('MAIL_PORT', 587))
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS', 'true').lower() in ['true', '1']
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = os.environ.get('MAIL_DEFAULT_SENDER', EMAIL)
