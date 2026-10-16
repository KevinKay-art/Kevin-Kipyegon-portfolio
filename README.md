# Kevin Kipyegon – Portfolio & Financial Systems Platform

Production-ready personal portfolio for **Kevin Kipyegon**, an accounting graduate from Kabarak University (Second Class Honours Upper Division), software engineer (PLP Africa), and data analyst working with modern AI solutions in Nairobi, Kenya.

---

## Contact Information

- **Email**: [kevinkipyegon111@gmail.com](mailto:kevinkipyegon111@gmail.com)
- **Phone / WhatsApp**: [0740 840 045](tel:+254740840045)
- **WhatsApp Direct**: [wa.me/254740840045](https://wa.me/254740840045?text=Hello%20Kevin%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.)
- **GitHub**: [https://github.com/KevinKay-art](https://github.com/KevinKay-art)
- **LinkedIn**: [https://www.linkedin.com/in/kevin-kipyegon-814439362/](https://www.linkedin.com/in/kevin-kipyegon-814439362/)
- **Location**: Nairobi, Kenya

---

## Architecture & Stacks

### 1. Interactive Full-Stack React Client (Vite + TypeScript + Tailwind + Chart.js)
- **Frontend**: React 19, TypeScript, Chart.js (`react-chartjs-2`), Lucide React icons, Tailwind CSS
- **Interactive Features**: 
  - Dual line/bar financial trend analyzer with monthly variance calculations
  - Natural-language financial assistant demo for querying ledger records
  - Instant CV viewer and download for `Kevin_Kipyegon_CV.pdf`
  - Floating WhatsApp CTA with gentle pulse animation
  - Dark / Light mode toggle with persistent state

### 2. Standalone Python Flask Deliverable (`app.py`, `config.py`)
- **Backend**: Python 3.10+, Flask, SQLite3 for contact messages, Gunicorn
- **Templates**: Jinja2 (`templates/index.html`, `templates/404.html`)
- **Static Assets**: `static/images/logo_avatar_44.jpg`, `static/images/kevin_portrait.jpg`, `static/Kevin_Kipyegon_CV.pdf`

---

## Local Run (Python Flask)

To run the Python Flask application locally:

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the application
python app.py
```

The app will start at `http://127.0.0.1:5000`.

---

## Local Run (React / Vite)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

The Vite dev server will start at `http://localhost:3000`.

---

## Deployment Steps

### Deploying Python Flask to Render

1. Create a new **Web Service** on [Render.com](https://render.com).
2. Connect your GitHub repository (`https://github.com/KevinKay-art/...`).
3. Set the following build and start commands:
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
4. (Optional) Set environment variables:
   - `SECRET_KEY`: `your-random-secret-key`
   - `ANTHROPIC_API_KEY` or `GEMINI_API_KEY` (optional for live LLM synthesis)
5. Click **Deploy Web Service**.

### Deploying Python Flask to Railway

1. In [Railway.app](https://railway.app), click **New Project** → **Deploy from GitHub repo**.
2. Select the repository.
3. Railway automatically detects `requirements.txt` and `Procfile` / `gunicorn app:app`.
4. Add environment variables if needed and click **Deploy**.

---

## Repository Structure

```text
├── app.py                      # Flask server with routing, contact API, and financial data endpoint
├── config.py                   # Centralized configuration (single-source WhatsApp/Phone)
├── data/
│   ├── portfolio_data.json     # Structured JSON portfolio and financial data
│   └── sample_finance.json     # Sample ledger data for variance demonstration
├── generate_cv.py              # Script to build Kevin_Kipyegon_CV.pdf
├── metadata.json               # AI Studio project manifest
├── package.json                # Node.js dependencies (React, Chart.js, Tailwind)
├── requirements.txt            # Python dependencies (Flask, Gunicorn)
├── src/
│   ├── App.tsx                 # Main application component
│   ├── components/             # Modular UI components
│   │   ├── AIAnalyticsSection.tsx  # Chart.js visualizations, variance engine & AI query
│   │   ├── About.tsx           # Academic & career background + 4 pillars
│   │   ├── CVModal.tsx         # Curriculum Vitae modal & downloader
│   │   ├── Contact.tsx         # Working form, direct mailto, tel & WhatsApp
│   │   ├── Education.tsx       # Kabarak, PLP Africa, CPA & certifications
│   │   ├── Experience.tsx      # Kericho County & KEPHIS timeline
│   │   ├── FloatingWhatsApp.tsx# Fixed floating WhatsApp button with pulse
│   │   ├── Footer.tsx          # Verified links and references statement
│   │   ├── Hero.tsx            # Hero with 44 logo avatar and portrait card
│   │   ├── Leadership.tsx      # Accounting Club Treasurer & Career Fair
│   │   ├── Navbar.tsx          # Sticky responsive header with 44 logo
│   │   ├── Projects.tsx        # Responsive project cards with GitHub links
│   │   ├── Services.tsx        # 6 core advisory & engineering services
│   │   ├── Skills.tsx          # Grouped visual skills with filter tabs
│   │   └── ThemeContext.tsx    # Light/dark mode provider
│   └── data/
│       └── portfolioData.ts    # Typed TypeScript portfolio dataset
├── static/
│   ├── Kevin_Kipyegon_CV.pdf   # Official curriculum vitae
│   └── images/
│       ├── kevin_portrait.jpg  # Professional headshot
│       └── logo_avatar_44.jpg  # Number 44 brand avatar logo
└── templates/
    ├── index.html              # Jinja2 single-page template
    └── 404.html                # Styled 404 error template
```
