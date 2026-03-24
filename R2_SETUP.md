# R2 Media Setup

Media assets are served from Cloudflare R2 (`nynspacemedia` bucket) to keep the Cloudflare Pages build small.

## 1. Enable public access on the R2 bucket

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → R2 → `nynspacemedia`
2. Open **Settings**
3. Under **Public access**, choose one:
   - **Custom domain (recommended for production)**: Add `media.nyn.space` under Custom Domains
   - **r2.dev**: Enable "Public Development URL" and copy the URL (e.g. `https://pub-xxxxx.r2.dev`)

## 2. Upload these files to the bucket

Upload at the **root** of the bucket:

| File | Purpose |
|------|---------|
| `PEDELI.jpg` | Background image |
| `favicon.png` | Site favicon |
| `up and onward.wav` | Background audio |
| `Arnaiz.ttf` | Font |
| `Satoshi-Variable.ttf` | Font |
| `Monor_Regular.otf` | Font |
| `Epilogue-Variable.ttf` | Font |

## 3. Update the base URL (if not using media.nyn.space)

If you use the r2.dev URL instead of a custom domain, replace `https://media.nyn.space` with your Public Bucket URL in:

- `index.html` (favicon, audio)
- `style.css` (fonts, background image)

## 4. Remove media from the project

Delete or stop tracking the media files locally so they’re not included in the build. `.gitignore` is set up to ignore them going forward.

If they were already committed:

```bash
git rm --cached *.wav *.jpg *.png *.ttf *.otf 2>/dev/null; git commit -m "Remove media from repo (now on R2)"
```
