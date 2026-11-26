# Restore this portfolio on a new GitHub account

This zip is a complete backup of the NEO REBULLO portfolio, latest version
(Nov 19, 2026: all training certificates removed). It includes the full Git history.

## Steps
1. On the new GitHub account, create a **public** repository named
   `<new-username>.github.io` (empty: no README, no .gitignore).
2. Upload this project to it (Claude can do this for you once the repo exists).
3. In the repo: Settings → Pages → Source: **GitHub Actions**.
4. Actions → "Deploy to GitHub Pages" → Run workflow on `main` with `publish = true`.
   The workflow installs, tests, builds and publishes the site.
5. Update the site address in `src/lib/site.ts` (`url`), `public/sitemap.xml`,
   `public/robots.txt`, `public/llms.txt` and `README.md`, then publish again.
6. Re-verify Google Search Console and Bing for the new address and resubmit the sitemap.
   (The old Google verification file `public/googlec6f2fceb11bf4455.html` is for the old
   address; Google will give a new one.)
7. Update the portfolio link on your résumé, LinkedIn, Upwork, OnlineJobs and Facebook.

## Services that keep working (not tied to GitHub)
- Contact form: Formspree (endpoint in `src/lib/site.ts`)
- Booking: Cal.com (neo-rebullo)
