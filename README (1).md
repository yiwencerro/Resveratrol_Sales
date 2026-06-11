# Reserveage Resveratrol Performance Analysis

## Project Overview
Interactive performance dashboard for the Reserveage Nutrition brand, analyzing resveratrol category and brand performance across retail POS and B2B wholesale channels.

---

## Data Sources

### 1. SPINS POS Data — Retail Sell-Through
**What it is:** Point-of-sale data from the Natural Expanded Channel (Whole Foods, Sprouts, etc.). Represents what consumers actually purchased at retail. Includes TDP (Total Distribution Points = shelf presence/distribution metric), velocity ($/TDP), ARP (Average Retail Price), and promo lift.

| File | Period | Platform | Notes |
|------|--------|----------|-------|
| `Resveratrol_Performance___ALL_52_weeks.csv` | 52 Weeks ending 05/17/2026 | SPINS | Resveratrol ingredient category POS — all brands, UPC level, Total US + regions |
| `Resveratrol_Performance___TYD_and_recent_weeks.csv` | YTD / 24W / 12W / 4W ending 05/17/2026 | SPINS | Same resveratrol category, recent rolling windows |
| `Conditioning_Performance___ALL_52_weeks.csv` | 52 Weeks ending 05/17/2026 | SPINS | Conditioning/Collagen category POS — Reserveage collagen, keratin, legs, beauty SKUs + category-wide collagen format data |

**Key SPINS metrics used:**
- `Dollars` / `Dollars, Yago` / `Dollars, 2 Yago` — current, 1-year-ago, 2-year-ago sales
- `Dollars/TDP` — velocity (sales per distribution point)
- `Units/TDP` — unit velocity
- `ARP` — Average Retail Price
- `Dollars, % Promo` — promotional share
- `Dollars, % Lift` — promotional lift index

> **Note:** TDP is derived by dividing `Dollars` by `Dollars/TDP`. It is not a directly reported column.

---

### 2. TCC / NetSuite Wholesale Data — B2B Sell-In
**What it is:** Reserveage's internal order/invoice data from NetSuite (exported via TCC format). Represents what distributors and retailers ordered from Reserveage — *not* consumer sell-through. Separate from SPINS.

| File | Period | Platform | Notes |
|------|--------|----------|-------|
| `TCCSalesHistoryByCustomerwQTYandAmountAllYearsResults797.csv` | 2020–2026 YTD | NetSuite / TCC | B2B wholesale orders by customer, SKU, month. Includes all Reserveage brands and product categories |

**Key fields:**
- `Parent Company` / `Customer Name` — account hierarchy
- `YEAR` / `MONTH` — order period
- `Brand` — Reserveage, Twinlab, ResVitale, etc.
- `Product Category` / `Product Family` — category (Resveratrol, Collagen, Keratin, etc.)
- `Description` — SKU description
- `PLM Stage` — product lifecycle (Drop, Watch, Keep)
- `Invoiced Amount` / `Invoiced Qty` — revenue and volume
- `Est. COGS` / `Est. Gross Profit Percent` — margin data

---

### 3. Reference Document
| File | Source | Notes |
|------|--------|-------|
| `SPINS_Understanding-Retail-Standards.pdf` | SPINS | Explains retail standards, TDP, product intelligence methodology. Used to interpret SPINS metric definitions. |

---

## Key Analytical Decisions

### Why two separate datasets?
SPINS POS and TCC wholesale measure different things at different points in the supply chain:
- **SPINS** measures consumer pull (what shoppers bought). Used for market share, TDP, velocity, competitive positioning.
- **TCC/NetSuite** measures brand push (what Reserveage shipped to accounts). Used for account-level trends, revenue, SKU lifecycle.

### Correlation between datasets
When UNFI wholesale orders fell (TCC data), SPINS TDP dropped downstream — confirming the UNFI→Whole Foods→shelf linkage. The datasets are kept separate but correlated where evidence is clear.

### Monthly comparisons
2026 YTD comparisons use **Jan–Jun averages** (monthly avg) matched against **Jan–Jun 2025** (same 6-month window) — not full-year 2025. This avoids partial-year inflation.

---

## Dashboard Structure

| Tab | Data Source | Topic |
|-----|------------|-------|
| Executive Summary | Both | KPIs, corrected root causes |
| Distribution Loss | SPINS POS | TDP vs velocity decomposition |
| Accounts & Exits | TCC/NetSuite | Wholesale account trends, UNFI/WFM correlation |
| Competitors | SPINS POS | Resveratrol category brand rankings |
| Collagen Myth | TCC + SPINS Conditioning | Proof collagen drop ≠ resveratrol decline; powder vs chews form analysis |
| 24W / YTD Momentum | SPINS POS + TCC | Recent rolling windows, 2026 monthly trends |
| SKU Deep Dive | SPINS POS | Per-SKU TDP, velocity, dollar trends |
| Other Categories | SPINS Conditioning | Bergamot, Legs, Keratin, Tres Beauty performance |
| What Worked | Both | Strategy synthesis |

---

## How to View
Open `index.html` in any modern browser. No server required — all data is embedded. Charts powered by Chart.js (CDN).

## GitHub Pages
Enable GitHub Pages from the repository `Settings → Pages → Deploy from branch: main → / (root)`.
The dashboard will be live at: `https://<your-username>.github.io/<repo-name>/`

---

## Updated Files (v2 — with Key Account Data)

| File | Period | Platform | Notes |
|------|--------|----------|-------|
| `Resveratrol_Performance___ALL_52_weeks__1_.csv` | 52W ending 05/17/2026 | SPINS | Updated — adds **KEY ACCOUNT** geography level (Vitamin Shoppe + GNC) and **Vitamins & Supplements channel** alongside Natural Expanded. |
| `Resveratrol_Performance___TYD_and_recent_weeks__1_.csv` | YTD/24W/12W/4W ending 05/17/2026 | SPINS | Updated — same KEY ACCOUNT and V&S channel additions. |
| `Conditioning_Performance___ALL_52_weeks__1_.csv` | 52W ending 05/17/2026 | SPINS | Updated — adds KEY ACCOUNT level for conditioning/collagen category. |

### New columns in v2 SPINS files:
- `Retail Account` / `Retail Account Level` — identifies the key account (Vitamin Shoppe, GNC)
- `Base Dollars/TDP` / `Base Units/TDP` — base (non-promoted) velocity metrics
- `Channel/Outlet` now includes both `NATURAL EXPANDED` and `VITAMINS & SUPPLEMENTS`

### Collagen Powder SKUs Analyzed (NetSuite):
- `6001` — INTL RSV Collagen Replenish Powder 2.75oz (international version)
- `5428` — RSV COLLAGEN REPLENISH POWDER 8OZ (domestic re-launch)
- `5427` — RSV COLLAGEN REPLENISH POWDER 2.75OZ (domestic re-launch)

> Note: The "KOR" powder series (KOR RES Collagen Replenish Powder) was a Korean-market product discontinued due to regulatory issues. The domestic powder (5427/5428) was re-launched but had slow sales and was subsequently discontinued. These are separate products.

---

## Q&A Chat Feature

### How it works (no API, zero tokens)
A fuzzy keyword matching engine built in pure JavaScript. Users type questions in plain English — the engine handles:
- **Typos**: Levenshtein distance scoring (e.g. "resveritrol" → "resveratrol")  
- **Rephrasing**: All Q&A entries have multiple tag variants covering different ways to ask the same thing
- **Synonyms**: Built-in synonym map (TVS = "Vitamin Shoppe" = "VS", TDP = "distribution" = "shelf presence", etc.)
- **Partial matches**: Matches subsets of query tokens, weighted by coverage

### Files
| File | Purpose |
|------|---------|
| `qa_data.js` | 25 Q&A entries across 9 topic areas, with tags and source citations |
| `qa_engine.js` | Fuzzy matching engine + chat UI (floating button, bottom right) |
| `index_standalone.html` | Self-contained single file (all JS embedded) — use this for GitHub Pages |
| `index.html` | Multi-file version (loads qa_data.js + qa_engine.js separately) — use for local dev |

### Adding more Q&A entries
Edit `qa_data.js` and add entries following the pattern:
```js
{
  id: "unique-id",
  tags: ["keyword1","keyword2","how to ask it differently","synonym"],
  q: "The canonical question",
  a: `HTML answer with <strong>bold</strong> and <br> breaks`,
  sources: ["SPINS Natural 52W", "NetSuite 2025"]
}
```
