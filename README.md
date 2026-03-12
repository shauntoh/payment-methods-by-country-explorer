# Payment Methods by Market Explorer

A React + Vite fintech intelligence dashboard for exploring payment behavior across global markets. The app helps teams quickly compare dominant payment methods, market characteristics, risk signals, and demographic indicators relevant to digital commerce and gaming-focused payment strategy.

## Project Overview

This project presents a market-level view of payments intelligence in a clean dashboard interface. Users can search and filter markets, review payment mix by method, and inspect key operational indicators such as card penetration, digital tax context, payment risk profile, and gaming-age demographics.

## Key Features

- Market explorer with search and region filtering
- Detailed market intelligence panel with:
  - Dominant payment method
  - Card penetration
  - Market size (population)
  - Economic strength (GDP per capita)
  - Digital services tax / VAT reference
  - Payment risk and regulation indicators
  - Gaming age demographic (15–34 share and estimated population)
- Payment method mix visualization
- Standardized payment method tags with iconography
- ISO-based flag rendering with graceful fallback
- Responsive layout for desktop and mobile

## Technology Stack

- Framework: React 18
- Build Tool: Vite 5
- Language: JavaScript (ES Modules)
- Styling: CSS (custom, component-driven)
- Icons: react-icons
- Data Source: Local static dataset (`src/data/paymentsData.js`)

## Project Structure

```text
payment-methods-by-country-explorer/
+- index.html
+- package.json
+- vite.config.js
+- src/
   +- main.jsx
   +- App.jsx
   +- index.css
   +- data/
   ¦  +- paymentsData.js
   +- components/
   ¦  +- Sidebar.jsx
   ¦  +- FilterBar.jsx
   ¦  +- CountryDetails.jsx
   ¦  +- PaymentMethodTags.jsx
   ¦  +- CountryFlag.jsx
   +- utils/
      +- flags.js
      +- paymentMethodColors.js
      +- formatters.js
```

## Development Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

The app will run on a local Vite dev server (typically `http://localhost:5173`).

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Deployment (GitHub Pages)

This project can be deployed with GitHub Pages using a GitHub Actions workflow.

### Option A: Deploy from GitHub Actions (recommended)

1. Ensure the repository is pushed to GitHub.
2. Add a workflow file at `.github/workflows/deploy.yml` that:
   - Installs dependencies
   - Runs `npm run build`
   - Uploads the `dist/` artifact
   - Deploys to GitHub Pages
3. In GitHub repository settings:
   - Go to `Settings > Pages`
   - Set source to `GitHub Actions`
4. Push to `main` to trigger deployment.

### Option B: Deploy with `gh-pages` branch

1. Build the project:

```bash
npm run build
```

2. Publish the `dist/` folder to a `gh-pages` branch (using your preferred Pages publishing workflow/tooling).
3. Configure GitHub Pages to serve from `gh-pages`.

## Disclaimer

All payment, tax, risk, and demographic figures in this project are provided for informational and educational purposes only. They are not legal, tax, regulatory, compliance, or financial advice. Rules and market conditions can vary by transaction type, product category, and jurisdiction. Always validate against official sources and consult qualified professional advisors before making business or compliance decisions.