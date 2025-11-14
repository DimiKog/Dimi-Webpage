# Dimi Webpage – Dimitris Kogias’ Personal Bilingual Static Site

Welcome! This is the **personal bilingual (EN/GR) static webpage of Dimitris Kogias**, thoughtfully designed for easy deployment on **Cloudflare Pages**.

## 🚀 Quick Deploy
1. Create a new GitHub repository (e.g. `Dimi-Webpage`) and push this folder to it.
2. In the Cloudflare Dashboard, go to **Pages** → **Create a project** → Connect Git.
3. Framework preset: **None**. Build command: *(leave empty)*. Output folder: `.`
4. Deploy — this repo currently powers `https://dimikog.org`, update the domain/DNS settings to match your deployment.

## 🗣 Language
- Switch between English and Greek using the buttons; your choice is saved in `localStorage` and the buttons will push you to the matching entry point when needed.
- Each entry point defaults to its language (`index.html` → EN, `index-gr.html` → GR), so you can share stable URLs with search engines and users.

## 🧱 Structure
- `index.html` (EN) and `index-gr.html` (GR) are lightweight shells that load each section from `partials/*.html` using a tiny include helper (`assets/js/includes.js`), making the page Cloudflare Pages–friendly without a build step. Language buttons swap between the two entry points and also toggle copy in-place.
- Content edits happen inside the relevant partial (e.g., `partials/about.html`, `partials/research.html`, etc.); simply add a new partial and drop a `<div data-include="partials/your-file.html">` in `index.html` to expand the page.
- All interactive behaviour (language toggle, theme, menu, scrollspy, back-to-top) lives in `assets/js/site.js`, so you can tweak logic without touching the markup.

## 📁 Customize
- Edit the contact information (email, GitHub, etc.) in `partials/contact.html`.
- Replace `assets/KOGIAS_CV_GR.pdf` with your actual CV file.
- To use your own photo, swap the avatar block with `<img src="assets/avatar.jpg">`.

## 👀 Preview
Because the page now fetches modular partials, run any static web server (e.g. `python3 -m http.server 8080` or `npx serve .`) and open `http://localhost:8080` to preview locally.

## 📈 SEO
- Edit `robots.txt` and update the Sitemap line with your domain.
- Update `sitemap.xml` to reflect your actual domain.

© 2025 Dimitris Kogias
