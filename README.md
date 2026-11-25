# Mitali Gadge — Portfolio

Static portfolio site: plain HTML, CSS and JavaScript, no build step.

## Run
Open `index.html` in a browser, or serve the folder with any static host
(Vercel, Netlify, GitHub Pages).

## Before you deploy
Replace `https://your-domain.com/` with your real domain in:
- `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD url)
- `robots.txt` and `sitemap.xml`

Social previews need the absolute og:image URL to work.

## Edit content
- Projects: the `P=[...]` array in the script at the bottom of `index.html`
- Roles typed in the hero: the `roles=[...]` list
- Colours: `--k` and `--w` at the top of the CSS
- Links: search for github.com, linkedin.com, drive.google.com

## Files
- index.html — the whole site
- og-image.png — 1200x630 social share image
- favicon.svg — browser tab icon
- robots.txt, sitemap.xml — search engine files
