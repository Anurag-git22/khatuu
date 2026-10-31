# Khatu Waada – The Heritage Home

Single-page site for the heritage stay at Chiveli Phata, Umroli, on the Chiplun–Guhagar road, Konkan.

Built with React 18, Vite, and plain CSS. Content is taken from the Google business listing. Photographs are from that listing.

## Run locally

```bash
cd khatu-waada
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

This writes a static site to `dist/`. Preview it with:

```bash
npm run preview
```

## Deploy

`dist/` can be published as a static site.

- **Netlify:** drag the `dist` folder into a new site, or connect the repo and set the build command to `npm run build` and the publish directory to `dist`.
- **Vercel:** import the `khatu-waada` folder. Framework preset: Vite.
- **Any host:** upload the contents of `dist/`.

After the live URL is known, update the canonical and Open Graph URLs in `index.html`.

## Edit content

All guest-facing copy lives in `src/data/siteData.js`:

- name, tagline, phone, email, Instagram, booking link
- address and map embed
- about paragraphs
- rooms, amenities, gallery captions
- nearby places and Google review excerpts

Replace photograph files in `src/assets/images/` and keep the same filenames, or change the imports at the top of `siteData.js`.

The enquiry form opens WhatsApp with the filled details. There is no backend.

## Project notes

- Navigation is in-page anchors. There is no router.
- Gallery lightbox: click a photo, then use arrow keys or Esc.
- Call and WhatsApp buttons stay on screen on small viewports.
