# SOLBRO — Vercel One-Page Website

A static one-page SOLBRO meme-token landing page designed to deploy directly to Vercel.

## Included

- SOLBRO mascot/logo
- Wide X-style visual banner
- Phase 1 airdrop section
- X + Telegram community task buttons
- Solana address checker
- 100,000–2,000,000 $SOLBRO allocation preview
- Roadmap
- Token section with contract set to `COMING SOON`
- FAQ
- Mobile responsive design

## Important: current checker behavior

The wallet checker is a **front-end deterministic preview**. It generates a stable allocation from the entered wallet string so the same wallet gets the same result. It does **not** read on-chain activity and it does not verify X/Telegram follows.

Before a real airdrop claim goes live, connect the checker to your own backend/database and define the actual snapshot/eligibility rules. Do not present the current preview as a verified blockchain allocation.

## Deploy on Vercel — easiest method

### Method 1: Vercel dashboard

1. Create a free account on Vercel.
2. Create a new GitHub repository, for example `solbro-website`.
3. Upload all files/folders from this project to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `vercel.json`
   - `assets/solbro-logo.png`
   - `assets/solbro-banner.png`
4. On Vercel, click **Add New → Project**.
5. Import the GitHub repository.
6. For a static site, leave the framework/build settings at their defaults where possible; there is no build command required.
7. Click **Deploy**.
8. Vercel will give you a live `.vercel.app` URL.

### Method 2: Vercel CLI

Install Node.js, then run:

```bash
npm i -g vercel
```

Inside this project folder:

```bash
vercel
```

Follow the prompts. For a production deployment:

```bash
vercel --prod
```

## Updating the contract later

Open `index.html` and find:

```html
<strong>COMING SOON</strong>
```

Replace it with your official contract address when the token is actually deployed.

Also update the FAQ/launch information if your claim process changes.

## Recommended next technical step

For a real airdrop system, add a backend that:
- stores the official allocation/snapshot,
- verifies wallet format,
- optionally verifies social tasks through permitted APIs/OAuth,
- prevents duplicate claims,
- exposes a signed/controlled claim process,
- never asks users for seed phrases or private keys.

## Branding

Current tagline:

**JUST ONE MORE BUY.**

Official community links in this template:

- X: https://x.com/SolBro_Official
- Telegram: https://t.me/SOLBRO_OFFICIAL
