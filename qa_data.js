// ============================================================
// RESERVEAGE RESVERATROL — Q&A KNOWLEDGE BASE
// Fuzzy keyword matching: synonyms + rephrase variants
// ============================================================
const QA_DATA = [

// ─────────────────────────────────────────────
// SECTION: OVERVIEW / EXECUTIVE SUMMARY
// ─────────────────────────────────────────────
{
  id: "overall-performance",
  tags: ["overall","summary","performance","decline","trend","what happened","big picture","general","overview","how are we doing","status"],
  q: "What is the overall performance of Reserveage resveratrol?",
  a: `<strong>Overall: declining in most channels but stabilizing in the latest 4-week window.</strong><br><br>
  • <strong>Natural Channel (SPINS POS):</strong> $759K, ▼ −4.7% YoY. Category grew +15.3% — Reserveage is losing share in a growing market.<br>
  • <strong>TVS (Vitamin Shoppe):</strong> $1.45M, ▼ −14.5% YoY. Largest single account.<br>
  • <strong>B2B Wholesale (NetSuite):</strong> Peaked at $4.69M in 2023, now at $4.16M (2025), ▼ −46.8% YTD Jan–Jun vs same 2025 period.<br>
  • <strong>Bright spot:</strong> Latest 4-week SPINS trend is <span style="color:#22c55e">+2.5% YoY</span> — first positive signal in months.`,
  sources: ["SPINS Natural 52W", "SPINS TVS Key Account 52W", "NetSuite 2025–2026"]
},
{
  id: "root-cause",
  tags: ["root cause","why declining","reason","cause","what caused","why did sales drop","problem","issue","explain the decline","what went wrong"],
  q: "Why is Reserveage resveratrol declining?",
  a: `<strong>Four distinct root causes — each requires a different response:</strong><br><br>
  <strong>1. Distribution loss (TDP), not demand failure</strong> — The #1 SKU (500mg 60ct) lost −31.7% TDP (shelf presence) at natural channel, −33.8% at TVS. But velocity ($/TDP) rose +21.9% — stores that still carry it sell MORE. This is a shelf-access problem, not a product problem.<br><br>
  <strong>2. TVS-specific: unit velocity down −28.5%</strong> — At TVS, both TDP and per-store sell-through are declining. Gummies were delisted ($57.5K → $25). Promo rate cut from 73.5% → 47.8% without compensating TDP support.<br><br>
  <strong>3. Strategic exits (margin/payment decisions)</strong> — CVS, Walgreens, KeHe were exited by Reserveage due to low margin and payment issues. ~$600K removed. Not market rejection.<br><br>
  <strong>4. New entrants took shelf space</strong> — Rho Nutrition entered from zero and took #1 in natural channel ($864K) and surpassed Reserveage at TVS in the latest 4W period.`,
  sources: ["SPINS Natural 52W", "SPINS TVS Key Account", "NetSuite"]
},
{
  id: "data-sources",
  tags: ["data","source","where does data come from","spins","netsuite","tcc","wholesale","pos","what data","which data","dataset"],
  q: "What data sources are used in this dashboard?",
  a: `<strong>Two separate data sources measuring different things:</strong><br><br>
  <span style="background:rgba(6,182,212,.2);color:#67e8f9;padding:1px 6px;border-radius:6px;font-size:10px">SPINS POS</span> <strong>= Consumer retail sell-through.</strong> What shoppers actually bought at retail. Covers Natural Expanded Channel + TVS/GNC Key Account (Vitamins &amp; Supplements channel). Includes TDP (shelf presence), velocity ($/TDP), ARP (avg retail price), promo metrics. 52W ending 05/17/2026.<br><br>
  <span style="background:rgba(245,158,11,.2);color:#fcd34d;padding:1px 6px;border-radius:6px;font-size:10px">NetSuite / TCC</span> <strong>= Reserveage wholesale sell-in.</strong> What distributors and retailers ordered FROM Reserveage. Measures B2B revenue by account, SKU, and month. 2020–2026 YTD.<br><br>
  These are kept <strong>separate</strong> in analysis but correlated where evidence aligns (e.g., UNFI wholesale drop confirmed by SPINS TDP loss downstream).`,
  sources: ["SPINS", "NetSuite/TCC"]
},

// ─────────────────────────────────────────────
// SECTION: TDP / DISTRIBUTION
// ─────────────────────────────────────────────
{
  id: "tdp-explained",
  tags: ["tdp","what is tdp","distribution","shelf presence","what does tdp mean","explain tdp","distribution points","total distribution","store count"],
  q: "What is TDP and how is it calculated?",
  a: `<strong>TDP = Total Distribution Points.</strong> It measures shelf presence — how many stores carry a SKU, weighted by store size/ACV.<br><br>
  <strong>How it's calculated here:</strong> TDP = Dollars ÷ (Dollars/TDP). SPINS reports $/TDP directly; we divide to get the TDP number.<br><br>
  <strong>Why it matters:</strong> TDP is the multiplier on everything. If a SKU has high TDP, it's in many stores. If TDP falls while $/TDP rises, the SKU is being delisted from some stores but selling well where it stays — a <strong>distribution problem, not a demand problem</strong>.<br><br>
  <strong>Example:</strong> Reserveage 500mg 60ct at TVS: TDP fell from 53.7 → 35.6 (−33.8%) while velocity ($/TDP) rose +11.1%. Clear evidence of delisting, not consumer rejection.`,
  sources: ["SPINS Natural 52W", "SPINS TVS Key Account"]
},
{
  id: "distribution-vs-demand",
  tags: ["distribution problem","demand problem","is it demand","is it distribution","shelf","velocity","why not demand","prove","evidence","consumers still buying"],
  q: "How do we know the decline is a distribution problem, not a demand problem?",
  a: `<strong>The diagnostic: if demand were failing, BOTH TDP and velocity ($/TDP) would decline together.</strong><br><br>
  Instead, the SPINS data shows:<br>
  • 500mg 60ct: TDP ▼ −31.7% BUT velocity ▲ +21.9% → <strong>distribution loss</strong><br>
  • 100mg 60ct: TDP ▼ −30.4% BUT velocity ▲ +37.3% → <strong>distribution loss</strong><br>
  • 250mg 60ct: TDP ▼ −9.1%, velocity ▲ +1.4% → <strong>distribution loss</strong><br><br>
  This pattern — TDP falls, velocity rises — proves consumers are <strong>buying more per store where the product is stocked</strong>. The product is being delisted, not rejected.<br><br>
  <strong>Exception at TVS:</strong> At Vitamin Shoppe specifically, SPINS Brand Insights shows unit velocity (units/TDP) also declining (−28.5%, 26 → 19 units/TDP). The TVS challenge is more severe — both distribution AND per-store velocity declining.`,
  sources: ["SPINS Natural 52W", "SPINS TVS Brand Insights 12W"]
},
{
  id: "tdp-competitors",
  tags: ["competitor tdp","rho nutrition distribution","how did rho grow","new entrant distribution","codeage tdp","who built distribution","shelf space"],
  q: "How did competitors build distribution while Reserveage lost it?",
  a: `<strong>New entrants built TDP rapidly while Reserveage contracted:</strong><br><br>
  • <strong>Rho Nutrition:</strong> 0 → 20.6 TDP (natural channel) in one year. At TVS: 195 TDP from zero. $864K revenue.<br>
  • <strong>Codeage:</strong> Near zero → 7.5 TDP. $145K natural, $130K TVS. +46,809% YoY.<br>
  • <strong>Nutri:</strong> Near zero → 10.3 TDP. $122K. +1,155%.<br>
  • <strong>Reserveage:</strong> 36.1 → 35.0 TDP (natural). 53.7 → 35.6 at TVS (500mg 60ct).<br><br>
  New brands typically use <strong>high promotional rates (Rho: 46.5%) to build trial and retailer confidence</strong> — a classic market-entry strategy. Once entrenched, rates normalize. Reserveage reduced promo during this window instead of defending.`,
  sources: ["SPINS Natural 52W", "SPINS TVS Key Account"]
},

// ─────────────────────────────────────────────
// SECTION: VITAMIN SHOPPE (TVS)
// ─────────────────────────────────────────────
{
  id: "tvs-decline",
  tags: ["vitamin shoppe","tvs","why did tvs decline","vitamin shoppe decline","tvs performance","vitamin shoppe sales","what happened at tvs","vs decline"],
  q: "Why did Vitamin Shoppe (TVS) decline so much?",
  a: `<strong>TVS declined −14.5% ($1.45M vs $1.70M YA). Four specific drivers:</strong><br><br>
  <strong>1. Core SKU TDP loss</strong> — 250mg 60ct lost 20+ TDP points (64.5 → 44.2). 500mg 60ct lost 18+ points. These are store count losses, not sales declines per store.<br><br>
  <strong>2. Gummies DELISTED by TVS</strong> — 100mg Gummies: $57.5K (2YA) → $12.4K (YA) → $25 (now). TDP: 49 → 0.04. Supply chain OOS triggered TVS dropping the SKU. Force Factor entered the same slot.<br><br>
  <strong>3. Promo rate cut</strong> — From 73.5% (YA) to 47.8% (4W). The 500mg 60ct has promo lift of 124.9 — it only moves when on deal. Pulling promo without TDP support collapsed velocity.<br><br>
  <strong>4. New entrants took shelf space</strong> — Rho: $0 → $320K at TVS. Force Factor: $0 → $247K. Codeage: $0 → $130K. Combined ~$697K in new revenue entered TVS from brands that didn't exist there a year ago.<br><br>
  <strong>Silver lining:</strong> TVS.com (web) is growing +3.5% ($353K). Digital is healthy.`,
  sources: ["SPINS TVS Key Account 52W", "SPINS TVS Brand Insights 12W"]
},
{
  id: "tvs-gummies",
  tags: ["gummies","gummies delisted","why gummies","100mg gummies","tvs gummies","gummy","chew","berry chew","supply chain gummies","gummies out of stock"],
  q: "What happened to the resveratrol gummies at TVS?",
  a: `<strong>Confirmed delisted by TVS — not just out of stock.</strong><br><br>
  • 2YA: $57.5K, TDP ~49 (strong distribution across all TVS regions)<br>
  • YA: $12.4K, TDP ~49 (still distributed but selling less)<br>
  • Now: $25 total, TDP 0.04 (effectively zero distribution)<br><br>
  <strong>What happened:</strong> Supply chain disruption caused an extended out-of-stock period. When a product goes OOS for too long, retailers delist it from their planogram — which is what TVS did. The TDP collapse from 49 → 0.04 confirms full delisting, not just a temporary gap.<br><br>
  <strong>Consequence:</strong> Force Factor entered the same gummy/chew format slot at TVS with "RSV Soft Chews" ($12K) and "NAD+ Longevity Chews" ($75K retail). The shelf space was filled immediately.<br><br>
  <strong>Recovery path:</strong> Resolve supply chain → approach TVS buyer with velocity data from the period when the gummies were selling ($57.5K at 82.6% promo rate) to justify re-listing.`,
  sources: ["SPINS TVS Key Account 52W"]
},
{
  id: "tvs-web",
  tags: ["tvs web","vitamin shoppe online","vitamin shoppe website","tvs.com","vs.com","online","ecommerce","digital tvs","web channel"],
  q: "How is the Vitamin Shoppe web / online channel performing?",
  a: `<strong>TVS.com is actually growing: +3.5% YoY ($353K vs $341K YA).</strong><br><br>
  This is an important signal — while TVS retail stores are declining −19.0% ($1.10M vs $1.36M YA), the web channel is moving in the opposite direction.<br><br>
  <strong>What this means:</strong><br>
  • Online buyers are actively choosing Reserveage — the brand's quality/organic story resonates in a search-driven environment<br>
  • The problem is planogram-specific (physical store shelf allocation), not brand preference<br>
  • TVS.com has no planogram constraints — the brand can appear in search results regardless of retail shelf status<br><br>
  <strong>Opportunity:</strong> TVS.com growth is evidence Reserveage can recover at TVS if shelf presence is restored. Use the web data in buyer conversations as proof of consumer demand.`,
  sources: ["SPINS TVS Key Account 52W"]
},
{
  id: "tvs-rho-comparison",
  tags: ["rho vs reserveage","rho nutrition tvs","rho comparison","rho outperforming","how does rho compare","rho 304","rho nutrition vitamin shoppe"],
  q: "How does Rho Nutrition compare to Reserveage at TVS?",
  a: `<strong>12-Week comparison at TVS (from SPINS Brand Insights):</strong><br><br>
  <table style="width:100%;font-size:10px;border-collapse:collapse">
    <tr style="background:rgba(255,255,255,.05)"><td style="padding:4px;font-weight:700">Metric</td><td style="padding:4px;color:#7c3aed;font-weight:700">Reserveage</td><td style="padding:4px;color:#22c55e;font-weight:700">Rho Nutrition</td></tr>
    <tr><td style="padding:4px">$ Volume (12W)</td><td style="padding:4px">$301,794 ▼25.6%</td><td style="padding:4px">$304,113 (NEW)</td></tr>
    <tr><td style="padding:4px">Units (12W)</td><td style="padding:4px">6,684 ▼32.2%</td><td style="padding:4px">7,075</td></tr>
    <tr><td style="padding:4px">ARP</td><td style="padding:4px">$45.15 ↑9.7%</td><td style="padding:4px">$42.98</td></tr>
    <tr><td style="padding:4px">TDP</td><td style="padding:4px">356 ▼5.1%</td><td style="padding:4px">195</td></tr>
    <tr><td style="padding:4px">Units/TDP</td><td style="padding:4px">19 ▼28.5%</td><td style="padding:4px">36</td></tr>
  </table><br>
  <strong>Key insight:</strong> Rho sells nearly <strong>2× as many units per store</strong> (36 vs 19 units/TDP) at a slightly lower price. Rho is winning on volume and velocity, not just distribution. In the latest 4W period, Rho ($96.5K) has now surpassed Reserveage ($91.7K) in dollar sales at TVS.`,
  sources: ["SPINS TVS Brand Insights 12W", "SPINS TVS Key Account"]
},
{
  id: "tvs-promo",
  tags: ["tvs promo","vitamin shoppe promotion","promo at tvs","promotional","deal","discount","promo lift tvs","promo rate tvs"],
  q: "What is happening with promotions at TVS?",
  a: `<strong>Promo rate has been cut significantly while lift remained strong — a missed opportunity.</strong><br><br>
  <strong>Promo rate trend at TVS:</strong><br>
  • 4 Weeks: 47.8% (was 73.5% YA)<br>
  • 12 Weeks: 44.2% (was 52.3% YA)<br>
  • 24 Weeks: 43.5% (was 52.8% YA)<br>
  • YTD: 41.6% (was 52.7% YA)<br><br>
  <strong>Promo lift:</strong> 18–37% across windows — meaning Reserveage sells well when promoted.<br><br>
  <strong>The 500mg paradox:</strong> Promo rate ROSE to 55.9% (from 49.3% YA) but lift exploded to 124.9 (from 41.3). This means the SKU now only moves on deal — base velocity near-zero. Over-reliance on deals without TDP support creates a dependency cycle.<br><br>
  <strong>The RSV Plus 500mg model:</strong> Promo rate 36.8%, lift 38.3, growing. This is what healthy promo-assisted growth looks like. Use this as the template.`,
  sources: ["SPINS TVS Key Account, all windows"]
},

// ─────────────────────────────────────────────
// SECTION: COMPETITORS
// ─────────────────────────────────────────────
{
  id: "rho-nutrition",
  tags: ["rho nutrition","rho","who is rho","rho nutrition brand","rho competitor","new competitor","#1 brand","top brand","who took number one"],
  q: "Who is Rho Nutrition and why are they winning?",
  a: `<strong>Rho Nutrition is a new entrant that went from zero to #1 in the natural channel resveratrol category in under one year.</strong><br><br>
  • Natural channel: $864K, 20.6 TDP — was $0 last year<br>
  • TVS (Vitamin Shoppe): $320K from zero — now #2 at TVS by $ in 52W, #1 in latest 4W<br>
  • Promo rate: 46.5% (very high) — classic new-brand trial-building strategy<br>
  • ARP: $42.98 vs Reserveage $45.15 — slightly lower price, much higher unit velocity<br>
  • Units/TDP at TVS: 36 vs Reserveage's 19 — sells nearly 2× per store<br><br>
  <strong>Why winning:</strong> Aggressive distribution build + high promotional trial investment + competitive pricing. They're not winning on product differentiation — they're winning on market entry execution. Once promotional rates normalize, their velocity advantage should moderate.`,
  sources: ["SPINS Natural 52W", "SPINS TVS Key Account", "SPINS Brand Insights 12W"]
},
{
  id: "category-growth",
  tags: ["category","category growth","resveratrol category","market growing","category trend","15 percent","15.3","growing category","market size","total market"],
  q: "How is the resveratrol category growing if Reserveage is declining?",
  a: `<strong>The resveratrol category grew +15.3% YoY in SPINS Natural Channel — Reserveage declined −4.7%.</strong><br><br>
  The growth went entirely to new entrants:<br>
  • Rho Nutrition: $0 → $864K (+new)<br>
  • Codeage: $309 → $145K (+46,809%)<br>
  • Nutri: $9.7K → $122K (+1,155%)<br><br>
  Legacy brands all declined:<br>
  • Country Life: −19.0% | NOW: −24.0% | Youthery: −34.9% | Nat Factors: −15.8%<br>
  • Reserveage: −4.7% (BEST performing legacy brand)<br><br>
  <strong>The strategic gap:</strong> New consumers entering the resveratrol category are being captured by new brands. Reserveage has no current mechanism to capture this new consumer wave. The category growth actually makes the re-listing argument stronger — buyers want to carry growing categories.`,
  sources: ["SPINS Natural Expanded Channel 52W"]
},
{
  id: "life-extension",
  tags: ["life extension","life ext","top brand","#1 at tvs","life extension tvs","largest brand"],
  q: "How is Life Extension performing at TVS?",
  a: `<strong>Life Extension is #1 at TVS by $ but also declining.</strong><br><br>
  • 52W: $2.54M at TVS, but ▼ YTD (−$218K vs YA)<br>
  • YTD: $964K vs $1.18M YA (−18.5%)<br>
  • 4W: $167K vs $200K YA (−16.4%)<br><br>
  This is important context: <strong>the TVS antioxidant/supplement category is broadly challenged, not just Reserveage</strong>. Life Extension, Jarrow (−33.5% at TVS), Solaray (−14.9%), and Natural Factors (−47%) are all declining at TVS in this category.<br><br>
  The difference is that Life Extension's decline is being partially offset by new entrant growth (Rho, Codeage, Nutrex). The TVS buyer is clearly active in refreshing the category assortment.`,
  sources: ["SPINS TVS Key Account, all windows"]
},

// ─────────────────────────────────────────────
// SECTION: COLLAGEN
// ─────────────────────────────────────────────
{
  id: "collagen-halo",
  tags: ["collagen halo","halo effect","did collagen cause","collagen impact resveratrol","collagen powder halo","is collagen the cause","collagen drop","powder drop","did dropping collagen hurt"],
  q: "Did dropping collagen (or collagen powder) cause the resveratrol decline?",
  a: `<strong>No. Four independent data tests definitively disprove the collagen halo hypothesis.</strong><br><br>
  <strong>1. Divergent timelines:</strong> Collagen fell −53% cumulatively 2020–2023. Resveratrol GREW +11.7% over the same period. Opposite directions for 3 consecutive years.<br><br>
  <strong>2. Powder customers test:</strong> 234 accounts that bought domestic powder saw their resveratrol revenue grow: $1.63M (2020) → $2.33M (2022) → $2.82M (2023) — after powder was wound down. Zero correlation.<br><br>
  <strong>3. 4-year timing gap:</strong> Domestic powder was discontinued ~2022. Resveratrol didn't decline until 2024. A 2-year lag destroys any halo hypothesis.<br><br>
  <strong>4. 2025 recovery:</strong> Resveratrol recovered +1.7% in 2025 while collagen continued to collapse (−47.4%). If a halo existed, they'd move together — they don't.<br><br>
  <strong>Actual causes of 2024 resveratrol decline:</strong> WFM/UNFI SKU rationalization, strategic exits (CVS/KeHe/Walgreens), Rho Nutrition entry. All external/distribution events, unrelated to collagen.`,
  sources: ["NetSuite wholesale 2020–2025"]
},
{
  id: "collagen-powder-why-failed",
  tags: ["collagen powder","why powder failed","powder sales","powder pricing","powder distribution","collagen powder issue","why did powder fail","powder problem"],
  q: "Why didn't the collagen powder succeed?",
  a: `<strong>Four compounding factors — pricing, distribution, positioning, and channel:</strong><br><br>
  <strong>Pricing gap:</strong><br>
  • RSV 8oz at $39.99 MSRP vs Ancient Nutrition 10.4oz at $39.62 — competitors offer more product for the same price with stronger health claims<br>
  • RSV 2.75oz at $19.99 vs NeoCell 9oz at $25.68 — for $5 more you get 3× the product<br>
  • No trial/single-serve format (Youtheory single-serve $1.37 captures impulse buyers)<br><br>
  <strong>Distribution gap:</strong> Never appeared in SPINS natural channel. Ancient Nutrition built 17 TDP; Reserveage had 0. Sales mainly through Amazon and mid-tier distributors — not natural retail where the category grows.<br><br>
  <strong>Positioning gap:</strong> Generic "Collagen Replenish Powder" vs Ancient Nutrition's targeted women's hormone/menopause SKUs. No flavored variants vs competitors' Vanilla/Chocolate/Citrus options.<br><br>
  <strong>Note:</strong> The format itself is thriving — category powder grew +264% (Ancient Nutrition $9.6K → $254K). The exit was brand-execution specific, not format failure.`,
  sources: ["SPINS Conditioning 52W", "NetSuite wholesale", "MSRP pricing"]
},
{
  id: "collagen-chews",
  tags: ["collagen chews","chews","chews supply chain","collagen replenish chews","chews out of stock","chews discontinued","oos chews"],
  q: "What happened to the Collagen Replenish Chews?",
  a: `<strong>Supply chain OOS led to TVS delisting — not a strategic discontinuation.</strong><br><br>
  • The chews were selling at TVS ($57.5K at 2YA, 82.6% promo rate)<br>
  • A supply chain disruption caused an extended out-of-stock<br>
  • TVS delisted the product when OOS persisted<br>
  • SPINS TDP pattern: 5.9 → 1.3 (gradual regional decline consistent with OOS, not planned exit)<br><br>
  <strong>Category context:</strong> The chews/gummies format in collagen is declining industry-wide (−34% YoY: $780K 2YA → $407K now), so even if supply were resolved, the format faces headwinds.<br><br>
  <strong>TVS specifically:</strong> Force Factor's "NAD+ Longevity Chews" ($75K at TVS retail) and "RSV Soft Chews" ($12K) entered the same slot — this new competition would need to be displaced on re-listing.`,
  sources: ["SPINS Conditioning 52W", "SPINS TVS Key Account"]
},

// ─────────────────────────────────────────────
// SECTION: B2B / WHOLESALE / ACCOUNTS
// ─────────────────────────────────────────────
{
  id: "unfi-decline",
  tags: ["unfi","whole foods","wfm","unfi declined","why unfi","unfi wholesale","whole foods listing","unfi sku","1000mg dropped","unfi correlation"],
  q: "Why did UNFI wholesale decline and how does it relate to Whole Foods?",
  a: `<strong>UNFI → Whole Foods → SPINS TDP: a confirmed supply chain.</strong><br><br>
  UNFI is Whole Foods Market's (WFM) primary distributor. When WFM rationalizes SKUs, UNFI buys less, and SPINS shows TDP declining in the natural channel.<br><br>
  <strong>The data chain:</strong><br>
  • UNFI 2022: $477K wholesale<br>
  • UNFI 2023: $893K (spike — new SKU stocking)<br>
  • UNFI 2024: $455K (WFM rationalized the 1000mg SKU: $269K → $0)<br>
  • SPINS natural 500mg 60ct TDP: −31.7% in same period<br><br>
  The two datasets (NetSuite wholesale and SPINS retail POS) independently confirm the same event. This is the strongest evidence available that WFM dropped Reserveage resveratrol SKUs from their planogram.`,
  sources: ["NetSuite 2022–2025", "SPINS Natural 52W"]
},
{
  id: "cvs-walgreens-exit",
  tags: ["cvs","walgreens","kehe","why did we leave","why exit","margin issue","payment problem","cvs exit","walgreens exit","kehe exit","strategic exit"],
  q: "Why did Reserveage exit CVS, Walgreens, and KeHe?",
  a: `<strong>These were proactive Reserveage decisions due to low margin and payment issues — not market rejection.</strong><br><br>
  • <strong>Walgreens:</strong> Peak $250K (2023) → $0 (2025). Mass channel, low supplement margin, payment terms.<br>
  • <strong>CVS:</strong> Peak $87K (2023) → $0 (2025). Same margin/payment rationale.<br>
  • <strong>KeHe Distributors:</strong> Peak $262K (2023) → $0 (2025). Distributor margin and terms didn't work.<br><br>
  <strong>Combined impact:</strong> ~$600K removed from the B2B revenue base (2023 peak values).<br><br>
  <strong>Important framing:</strong> These exits do NOT reflect consumer rejection or competitive displacement. The revenue loss is real, but these channels were unprofitable. Mass channel (Walgreens/CVS) buyers are also price-driven and SKU-constrained — not aligned with premium supplement positioning.<br><br>
  <strong>This is distinct from</strong> the UNFI/WFM decline, which WAS driven by external SKU rationalization decisions.`,
  sources: ["NetSuite 2023–2025"]
},
{
  id: "iherb-performance",
  tags: ["iherb","ihero","i herb","digital","online channel","ecommerce","iherb growing","iherb sales"],
  q: "How is iHERB performing?",
  a: `<strong>iHERB is one of Reserveage's strongest growth stories: +69% revenue 2023–2025.</strong><br><br>
  • 2023: $247K wholesale (NetSuite)<br>
  • 2024: $270K (+9.3%)<br>
  • 2025: $417K (+54.3%)<br>
  • 2026 YTD avg/month: $13K vs $34K in same 2025 period (−61.2% — caution, compare monthly averages)<br><br>
  <strong>Why iHERB works for Reserveage:</strong> Digital-native platform with no planogram constraints. International reach amplifies volume. Health-conscious consumers who search for premium/organic supplements are the core Reserveage buyer profile. No deal-driven impulse buying — pure intent-driven purchase.<br><br>
  <strong>2026 YTD note:</strong> The monthly avg decline vs 2025 may reflect inventory timing, not demand loss. Monitor through H2 2026.`,
  sources: ["NetSuite 2023–2026 YTD"]
},
{
  id: "amazon-performance",
  tags: ["amazon","pattern","pattern inc","ecommerce","online","amazon sales","pattern amazon"],
  q: "How is Amazon / Pattern Inc performing?",
  a: `<strong>Pattern Inc (Amazon marketplace) is Reserveage's most consistent large account.</strong><br><br>
  • 2022: $649K | 2023: $697K | 2024: $877K | 2025: $752K<br>
  • 2026 YTD avg/month: $59K vs $72K in same 2025 period (−18.9%)<br><br>
  <strong>Why Amazon works:</strong> eCommerce captures resveratrol demand without planogram competition. Consumers searching "resveratrol supplement" find Reserveage regardless of physical retail TDP. No supply chain OOS risk to the consumer (Amazon manages inventory separately).<br><br>
  <strong>2024 spike to $877K:</strong> Likely driven by a favorable algorithm/review cycle or promotional event. The 2025 normalization to $752K is still above the 2023 baseline.<br><br>
  <strong>Note:</strong> Amazon's 2026 monthly rate decline should be watched — if Rho/Codeage are winning the Amazon search algorithm with high review counts, it could affect organic ranking.`,
  sources: ["NetSuite 2022–2026 YTD"]
},

// ─────────────────────────────────────────────
// SECTION: SKUs
// ─────────────────────────────────────────────
{
  id: "top-sku-500mg",
  tags: ["500mg","500 mg","top sku","flagship","60ct","500mg 60ct","best seller","main product","core sku"],
  q: "How is the 500mg 60ct SKU performing?",
  a: `<strong>The 500mg 60ct is Reserveage's #1 resveratrol SKU — and shows the clearest distribution-loss pattern.</strong><br><br>
  <strong>Natural channel (SPINS 52W):</strong><br>
  • $73.2K (−16.7% vs YA), but velocity $/TDP: +21.9% — stores that carry it sell more<br>
  • TDP: −31.7% (from 36.1 → ~25)<br><br>
  <strong>TVS (SPINS Key Account 52W):</strong><br>
  • $272K (−26.4% vs $369K YA)<br>
  • TDP: 53.7 → 35.6 (−33.8%) — lost ~18 stores<br>
  • Velocity: +11.1% — demand per store is increasing<br>
  • Promo rate: 55.9% (up from 49.3%); Promo lift: 124.9 (was 41.3) — SKU is heavily promo-dependent now<br><br>
  <strong>The action item:</strong> Use the +11.1% velocity increase as the buyer pitch for re-listing at TVS and re-establishing UNFI distribution. "Consumers buy more of this where it's available."`,
  sources: ["SPINS Natural 52W", "SPINS TVS Key Account 52W"]
},
{
  id: "bergamot-performance",
  tags: ["bergamot","cholesterol","bergamot cholesterol","heart health","beautiful legs","legs","cross category","other skus","bergamot growing"],
  q: "How is the Bergamot Cholesterol SKU performing?",
  a: `<strong>Bergamot is Reserveage's strongest cross-category SKU — growing in both SPINS files.</strong><br><br>
  <strong>Natural channel (Resveratrol SPINS):</strong><br>
  • $44.7K now vs $41.3K YA (+8.1%)<br>
  • TDP: +6.9% (growing distribution)<br>
  • Velocity: +11.1% (growing per-store sales)<br>
  • Both metrics positive — the only core SKU with this profile<br><br>
  <strong>TVS specifically:</strong><br>
  • $115K (+11.1% at TVS)<br>
  • TDP: +1.1% (stable distribution)<br>
  • Velocity: +9.9%<br><br>
  <strong>Conditioning SPINS:</strong> Beautiful Legs $52K (+13.4% YoY)<br><br>
  <strong>Strategic implication:</strong> Cross-category heart health positioning is working. Bergamot and Beautiful Legs validate that Reserveage can expand beyond pure resveratrol. These SKUs should anchor the retailer pitch as proof the brand has diversification beyond a declining core.`,
  sources: ["SPINS Resveratrol 52W", "SPINS TVS Key Account", "SPINS Conditioning 52W"]
},
{
  id: "innovation-skus",
  tags: ["nad","nad+ resveratrol","rsv plus","innovation","new sku","new products","resveratrol plus","1000mg","premium","stacked formula"],
  q: "How are the innovation SKUs (NAD+Resveratrol, RSV Plus) performing?",
  a: `<strong>Innovation is the bright spot in Reserveage's portfolio — new premium SKUs gaining distribution.</strong><br><br>
  <strong>NAD+ & Resveratrol Plus (new):</strong><br>
  • TVS: $141K — brand new, no YA comparison (42.8 TDP from zero)<br>
  • Natural: $11.4K (24W) — building<br><br>
  <strong>RSV Plus 1000mg:</strong><br>
  • Natural TDP: +386% (distribution build)<br>
  • TVS: $134K, +8.1% vs YA<br>
  • Velocity at TVS: +25.3% — strong per-store momentum<br><br>
  <strong>RSV Plus 500mg:</strong><br>
  • TVS: $105K, +13.6% vs YA<br>
  • Promo rate 36.8%, lift 38.3 — healthy promotional profile<br><br>
  <strong>Strategic value:</strong> These premium stacked formulas differentiate Reserveage from Rho/Codeage price competition. The innovation tier is growing while the commodity tier declines — this is the brand's future premium positioning.`,
  sources: ["SPINS TVS Key Account 52W", "SPINS Natural 52W"]
},

// ─────────────────────────────────────────────
// SECTION: RECOMMENDATIONS
// ─────────────────────────────────────────────
{
  id: "what-to-do",
  tags: ["recommendation","what should we do","next steps","action","strategy","plan","what do we do","priorities","how to recover","recovery plan","fix"],
  q: "What should Reserveage do to recover resveratrol sales?",
  a: `<strong>Four priorities, ranked by impact:</strong><br><br>
  <strong>🛡️ P1: Restore TVS retail TDP</strong><br>
  Re-list 500mg 60ct and fix gummies supply chain. Use SPINS velocity data: +11.1% where stocked = compelling buyer argument. Promo lift of 124.9 on the 500mg means deals drive strong sell-through. Each TDP point at $848 velocity adds meaningful revenue.<br><br>
  <strong>📢 P2: Reinvest promo at TVS</strong><br>
  Restore promo rate toward 50% for core SKUs. RSV Plus 500mg model (36.8% rate, 38.3 lift, growing) is the template. Avoid over-relying on deals for the 500mg 60ct — rebuild base velocity through TDP first.<br><br>
  <strong>🎯 P3: Accelerate digital channels</strong><br>
  iHERB +69% (2023–2025). Amazon $750K+ stable. TVS.com +3.5%. No planogram constraints. Target $600K+ combined from these three. Online buyers match Reserveage's premium organic positioning.<br><br>
  <strong>💊 P4: Lead with innovation at TVS</strong><br>
  NAD+Resveratrol $141K new at TVS. RSV Plus 1000mg +8.1%. Bergamot +11.1%. Use innovation as the "reason to believe" in buyer presentations — shows the brand has a future beyond core resveratrol decline.`,
  sources: ["SPINS TVS", "SPINS Natural", "NetSuite"]
},
{
  id: "re-listing-argument",
  tags: ["re-listing","relist","relisting","buyer pitch","tvs buyer","retail buyer","how to pitch","pitch to buyer","convince buyer","seller meeting"],
  q: "What is the strongest argument for re-listing Reserveage at TVS?",
  a: `<strong>Three data points that make a compelling buyer case:</strong><br><br>
  <strong>1. Velocity is growing where stocked:</strong> 500mg 60ct velocity $/TDP rose +11.1% YoY at TVS — stores that carry it are generating MORE revenue per store than last year. This proves consumer demand is intact.<br><br>
  <strong>2. Category is growing (+15.3%):</strong> TVS wants to capitalize on a growing supplement category. Reserveage is the established premium brand with the strongest ARP ($45.15 vs Rho's $42.98) in the category. Re-listing means higher category revenue per shelf foot.<br><br>
  <strong>3. TVS.com is already growing (+3.5%):</strong> Reserveage shoppers are actively choosing the brand online. Physical re-listing captures these customers at higher basket sizes in-store.<br><br>
  <strong>The pitch:</strong> "Consumers are buying more Reserveage per store where it's available. Your web data confirms demand. Help us get back on shelf and we'll drive category growth for you — backed by SPINS velocity data."<br><br>
  <strong>Plus:</strong> Gummies recovery plan (supply chain resolved) + innovation (NAD+Resveratrol already $141K at TVS) shows a growing SKU portfolio, not a declining brand.`,
  sources: ["SPINS TVS Key Account 52W", "SPINS Natural 52W"]
},

// ─────────────────────────────────────────────
// SECTION: MISC
// ─────────────────────────────────────────────
{
  id: "arp-pricing",
  tags: ["arp","average retail price","price","pricing","price increase","price holding","how much","msrp","retail price"],
  q: "What is happening with pricing / average retail price?",
  a: `<strong>Reserveage's ARP (Average Retail Price) is holding and growing — pricing is NOT the problem.</strong><br><br>
  • Natural channel ARP (500mg 60ct): $72.67, +2.1% YoY<br>
  • TVS ARP: $45.15, +9.7% YoY (12W Brand Insights data)<br><br>
  <strong>What this means:</strong> Reserveage is not being price-competed out of the market. Consumers who find the product are willing to pay a premium. The unit decline is driven by TDP loss (fewer stores carrying it), not by buyers switching to cheaper alternatives.<br><br>
  <strong>Competitor context:</strong> Rho Nutrition ARP at TVS is $42.98 — slightly lower than Reserveage's $45.15. Rho wins on volume/velocity, Reserveage wins on unit revenue. This supports a premium brand positioning strategy.`,
  sources: ["SPINS Natural 52W", "SPINS TVS Brand Insights 12W"]
},
{
  id: "2026-trend",
  tags: ["2026","this year","ytd 2026","current year","how is 2026","2026 sales","latest","recent","current performance","jan feb mar"],
  q: "How is 2026 year-to-date performance looking?",
  a: `<strong>2026 YTD B2B is running at ~53% of same-period 2025 — but the latest SPINS 4W signal is positive.</strong><br><br>
  <strong>B2B Wholesale (NetSuite, Jan–Jun comparison):</strong><br>
  • 2025 Jan–Jun avg: $362K/month | 2026 Jan–Jun avg: $193K/month (−46.8%)<br>
  • Largest decline: Vitamin Shoppe ($106K/mo → $39K/mo, −62.8%)<br>
  • Growing: Emerson/Fullscript (+27.3%), Pureformulas (+142%)<br><br>
  <strong>SPINS POS (Natural Channel):</strong><br>
  • YTD: −7.5% dollars, −12.3% units<br>
  • <span style="color:#22c55e">4W (latest): +2.5% dollars</span> — first positive signal<br>
  • TDP still declining (−8.8% YTD, −7.0% in 4W) — dollar recovery is price/velocity-driven<br><br>
  <strong>Bottom line:</strong> The structural account losses from 2024–2025 are still flowing through 2026 B2B. The natural channel SPINS data shows early stabilization in the most recent weeks — watch the next 8–12 weeks to confirm the trend.`,
  sources: ["NetSuite 2025–2026 YTD", "SPINS Natural all windows"]
},
{
  id: "4w-signal",
  tags: ["4 week","4w","latest","recent","stabilizing","recovery","is it recovering","positive signal","turning around","trend improving"],
  q: "Is Reserveage stabilizing or recovering?",
  a: `<strong>Early signs of stabilization in natural channel — too soon to call a recovery.</strong><br><br>
  <strong>Positive signals:</strong><br>
  • SPINS natural 4W: +2.5% dollars YoY — first positive period in months<br>
  • SPINS natural 12W: −0.6% (nearly flat, improving from 24W at −9.3%)<br>
  • TVS.com: +3.5% growing consistently<br>
  • Innovation SKUs (NAD+Resv, RSV Plus) gaining TDP and velocity<br><br>
  <strong>Caution signals:</strong><br>
  • TDP still declining in all windows (4W: −7.0%)<br>
  • Dollar recovery is velocity-driven, not TDP recovery — fragile without distribution stabilization<br>
  • At TVS: Rho Nutrition surpassed Reserveage in the 4W period ($96.5K vs $91.7K)<br>
  • B2B wholesale still running −46.8% vs same 2025 period<br><br>
  <strong>Verdict:</strong> Directional improvement is real but the structural distribution losses need to be addressed before declaring a recovery. The next 12–24 weeks of SPINS data will be decisive.`,
  sources: ["SPINS Natural all windows", "NetSuite 2026 YTD"]
}

]; // end QA_DATA

// ─────────────────────────────────────────────
// SYNONYM MAP for fuzzy matching
// ─────────────────────────────────────────────
const SYNONYMS = {
  "tvs": ["vitamin shoppe","vitaminshoppe","vitamin shop","vs ","v.s."],
  "reserveage": ["rsv","the brand","our brand","our product","reservage","reserveage nutrition"],
  "resveratrol": ["resv","rsv","antioxidant supplement","resveritrol","resvratrol","anti aging"],
  "tdp": ["distribution","shelf","shelf presence","store count","distribution points","listing"],
  "velocity": ["sell through","sellthrough","per store","dollars per tdp","sales per store"],
  "arp": ["price","pricing","average price","msrp","retail price"],
  "natural channel": ["natural expanded","whole foods","sprouts","fresh market","wfm","natural retail"],
  "wholesale": ["netsuite","tcc","b2b","sell in","sell-in","orders","distributor"],
  "spins": ["pos","point of sale","retail data","scanner data","sell through","sellthrough"],
  "gummies": ["gummy","chews","chew","berry chew","100mg chew"],
  "competition": ["competitor","competing","rho","codeage","nutri","new entrant","rival"],
  "decline": ["down","dropped","fell","decreased","losing","less","worse","drop","lower"],
  "grow": ["growing","increase","up","gain","better","higher","improve","recovery"],
  "relist": ["re-list","re list","get back","regain","restore","relisting","win back"],
  "iherb": ["i herb","ihero","iherb.com"],
  "amazon": ["pattern","amzn","pattern inc","marketplace"],
};

window.QA_DATA = QA_DATA;
window.SYNONYMS = SYNONYMS;
