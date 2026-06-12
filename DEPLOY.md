# Deploying tobilobaadeyemo.com to Hostinger

This repo contains the Astro source for the personal site (same stack as the raptview repo). The built output in `dist/` is plain static files — Hostinger serves them directly, no WordPress needed.

## One-time setup: automatic deploys

The workflow in `.github/workflows/deploy.yml` builds and FTP-deploys to Hostinger on every push to `main`. To activate it, add three repository secrets (GitHub → Settings → Secrets and variables → Actions):

| Secret | Where to find it (Hostinger hPanel → Websites → Manage → FTP Accounts) |
|---|---|
| `HOSTINGER_FTP_SERVER` | "FTP IP" or `ftp.tobilobaadeyemo.com` |
| `HOSTINGER_FTP_USERNAME` | FTP username |
| `HOSTINGER_FTP_PASSWORD` | FTP password |

Until the secrets exist, the deploy step fails (build still runs) — that's expected.

## Manual deploy (fallback)

```bash
npm install
npm run build
```

Upload the contents of `dist/` into `public_html/` via hPanel File Manager or FTP.

## Cutting over from WordPress

1. In hPanel, back up the current WordPress site (Files + Database) first.
2. Empty `public_html/` (the WP install) **after** the backup, then deploy.
3. The old WP pages (`/?p=...` etc.) will 404 — that's fine; the new `404.html` handles it.
4. Verify the JSON-LD afterwards: https://search.google.com/test/rich-results

## Before launch — content TODOs

- **Confirm the three service names** in `src/pages/index.astro` (prices R2,800 / R3,200 / R3,500 carried over from the old site).
- **Verify the cert lists** against Credly (`src/pages/index.astro`).
- **Add the press article URLs** (Businessday NG, Guardian Nigeria) — marked with a TODO comment in the About section.
- **Add a real headshot** to `public/` and reference it in the Person schema (`src/layouts/Base.astro`, add an `image` field) and an `og:image` tag.
- **Set up `tobiloba@tobilobaadeyemo.com`** (hPanel → Emails), then add it to the contact section.
- WhatsApp number `+27630672211` is confirmed correct (matches your 2025 resume and the old site header).
