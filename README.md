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
- `index.html` (EN) and `index-gr.html` (GR) now contain the full markup for each language; no runtime includes are required.
- Former partial files live in `assets/partials-en-backup/` and `assets/partials-gr-backup/` for reference — useful if you ever want to re‑modularize.
- All interactive behaviour (language toggle, theme, menu, scrollspy, back-to-top) lives in `assets/js/site.js`, so you can tweak logic without touching the markup.

## 📁 Customize
- Edit the contact information (email, GitHub, etc.) directly inside the relevant section of `index.html` / `index-gr.html` (search for `id="contact"`).
- Replace `assets/KOGIAS_CV_GR.pdf` with your actual CV file.
- To use your own photo, swap the avatar block with `<img src="assets/avatar.jpg">`.

## 📈 SEO
- Edit `robots.txt` and update the Sitemap line with your domain.
- Update `sitemap.xml` to reflect your actual domain.

© 2025 Dimitris Kogias
