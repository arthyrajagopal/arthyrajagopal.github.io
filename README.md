# Arthy L. R. — Premium Backend Developer Portfolio

A modern, high-performance, and recruiter-focused developer portfolio engineered for **Arthy L. R.** (Backend Developer specializing in PHP, Laravel, MySQL, and REST APIs).

---

## 🌟 Highlights & Features

- **Recruiter First Experience**: Communicates candidate identity, primary stack (`PHP`, `Laravel`, `MySQL`), key strengths, and production readiness within 10–30 seconds.
- **26 Live Client & Freelance Projects**: Complete interactive catalog of all 26 client projects from healthcare, ERP, and non-profit domains with live links and search filtering.
- **Deep-Dive Technical Case Studies**: Interactive case study dialogs for production systems including *GH Hospital Management System*, *RIT College ERP*, *Health-Watch Ticketing*, *Keshasri Tailoring*, *Smart Parking (SPS)*, and *Soilsons Enterprise*.
- **Interactive Backend Architecture ("How I Build Backend Systems")**: Visualized 6-layer request lifecycle (`Client` ➔ `Routes & Middleware` ➔ `Controllers` ➔ `Business Logic` ➔ `Eloquent Models` ➔ `MySQL DB`) with interactive code tabs for Eloquent Schemas, Form Requests, and RBAC Middleware.
- **Theme Switcher**: Dark mode (default SaaS deep-slate styling) and crisp Light mode with persistent local storage.
- **10-Second Recruiter Summary Card**: Executive hiring summary with 1-click email copy, resume download, and LinkedIn connection.
- **Fully Responsive & Accessible**: 100% semantic HTML5, zero heavy dependencies, sub-second load times, and keyboard-accessible modal navigation.

---

## 📁 Directory Structure

```
arthy-portfolio/
├── index.html                   # Main semantic single-page application
├── assets/
│   ├── css/
│   │   ├── style.css            # Design tokens, themes, typography, and responsive styles
│   │   └── animations.css       # Subtle micro-interactions, pulse glows, and transitions
│   ├── js/
│   │   ├── main.js              # Theme toggle, search, code tabs, contact form, scroll spy
│   │   ├── projects-data.js     # Structured dataset for all 26 client projects & featured systems
│   │   └── case-study-modal.js  # Accessible technical case study modal dialog system
│   ├── images/
│   │   └── favicon.svg          # Modern backend terminal code SVG favicon
│   └── resume/
│       └── Arthy_LR_Resume.pdf  # Downloadable PDF resume
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # SEO XML sitemap
└── README.md                    # Documentation
```

---

## 🚀 How to Run & Preview Locally

1. Open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Or serve locally with any HTTP server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Or using PHP built-in server
   php -S localhost:8000
   ```
3. Visit `http://localhost:8000` in your browser.

---

## 🌐 How to Deploy to GitHub Pages

1. Commit and push the contents of this folder to your repository `arthyrajagopal/arthyrajagopal.github.io` (or your chosen repo).
2. In GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select `main` (or `master`) branch and `/ (root)` folder.
   - Click **Save**.
3. Your portfolio will be live at `https://arthyrajagopal.github.io/`.

---

© 2026 Arthy L. R. All rights reserved.
