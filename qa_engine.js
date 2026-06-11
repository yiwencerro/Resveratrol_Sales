// ============================================================
// FUZZY Q&A ENGINE — pure JS, no API, no dependencies
// Handles typos, synonyms, rephrasing, partial matches
// ============================================================

(function() {

// ─── STOP WORDS (ignore in matching) ───────────────────────
const STOP = new Set(["a","an","the","is","are","was","were","what","why","how","did","do","does",
  "our","we","i","it","its","in","of","to","for","and","or","but","this","that","at","by",
  "can","could","should","would","will","have","has","had","been","be","with","from","on",
  "about","please","tell","me","show","explain","describe","give","help","find","where","when"]);

// ─── TOKENIZE + NORMALIZE ──────────────────────────────────
function tokenize(text) {
  let t = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  // Apply synonyms first
  Object.entries(window.SYNONYMS || {}).forEach(([canonical, variants]) => {
    variants.forEach(v => {
      t = t.replace(new RegExp(v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), 'gi'), canonical);
    });
  });
  return t.split(' ').filter(w => w.length > 1 && !STOP.has(w));
}

// ─── LEVENSHTEIN DISTANCE (for typo tolerance) ─────────────
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const dp = Array.from({length: a.length+1}, (_,i) => [i]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[a.length][b.length];
}

// ─── FUZZY TOKEN MATCH ────────────────────────────────────
// Returns 1.0 if exact, 0.8 if edit distance 1, 0.6 if distance 2, 0 otherwise
function fuzzyMatch(a, b) {
  if (a === b) return 1.0;
  if (a.length < 3 || b.length < 3) return a === b ? 1 : 0;
  const d = levenshtein(a, b);
  if (d === 1) return 0.8;
  if (d === 2 && a.length > 5) return 0.5;
  // Check if one contains the other
  if (a.includes(b) || b.includes(a)) return 0.7;
  return 0;
}

// ─── SCORE A QA ENTRY ────────────────────────────────────
function scoreEntry(queryTokens, entry) {
  const allTerms = [
    ...entry.tags,
    ...tokenize(entry.q),
  ].filter(Boolean);

  let score = 0;
  let matched = 0;

  queryTokens.forEach(qt => {
    let best = 0;
    allTerms.forEach(et => {
      const s = fuzzyMatch(qt, et);
      if (s > best) best = s;
    });
    if (best > 0) {
      score += best;
      matched++;
    }
  });

  if (queryTokens.length === 0) return 0;

  // Coverage bonus: what fraction of query tokens matched
  const coverage = matched / queryTokens.length;
  // Precision score normalized by query length
  const normalized = score / queryTokens.length;

  return normalized * coverage;
}

// ─── SEARCH ──────────────────────────────────────────────
function search(query, topN = 1) {
  if (!query || query.trim().length < 2) return [];
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const scored = (window.QA_DATA || []).map(entry => ({
    entry,
    score: scoreEntry(tokens, entry)
  })).filter(x => x.score > 0.15)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, topN);
}

// ─── CHAT UI ─────────────────────────────────────────────
function buildChatUI() {
  // Floating button
  const btn = document.createElement('button');
  btn.id = 'qa-toggle-btn';
  btn.innerHTML = '💬 Ask a Question';
  btn.style.cssText = `
    position:fixed;bottom:20px;right:20px;z-index:9999;
    background:#7c3aed;color:#fff;border:none;border-radius:24px;
    padding:10px 18px;font-size:12px;font-weight:700;cursor:pointer;
    box-shadow:0 4px 20px rgba(124,58,237,.5);transition:all .2s;
    font-family:'Segoe UI',Arial,sans-serif;letter-spacing:.3px;`;
  btn.onmouseenter = () => btn.style.background = '#6d28d9';
  btn.onmouseleave = () => btn.style.background = '#7c3aed';
  document.body.appendChild(btn);

  // Panel
  const panel = document.createElement('div');
  panel.id = 'qa-panel';
  panel.style.cssText = `
    position:fixed;bottom:68px;right:20px;width:420px;max-width:calc(100vw - 32px);
    background:#1e293b;border:1px solid #334155;border-radius:14px;
    box-shadow:0 8px 40px rgba(0,0,0,.5);z-index:9998;
    display:none;flex-direction:column;overflow:hidden;
    font-family:'Segoe UI',Arial,sans-serif;
    max-height:75vh;`;
  panel.innerHTML = `
    <div style="background:#273549;padding:12px 16px;border-bottom:1px solid #334155;display:flex;justify-content:space-between;align-items:center">
      <div>
        <div style="font-size:13px;font-weight:800;color:#f1f5f9">Ask About This Data</div>
        <div style="font-size:10px;color:#94a3b8;margin-top:1px">Smart Q&A — no AI needed</div>
      </div>
      <button id="qa-close-btn" style="background:transparent;border:none;color:#94a3b8;cursor:pointer;font-size:18px;line-height:1;padding:2px 4px">&times;</button>
    </div>
    <div id="qa-messages" style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px;min-height:120px;max-height:calc(75vh - 180px)">
      <div class="qa-bot-msg" style="background:#273549;border:1px solid #334155;border-radius:8px;padding:10px 12px;font-size:11px;color:#f1f5f9;line-height:1.6">
        <strong style="color:#7c3aed">Hi! Ask me anything about this analysis.</strong><br>
        Try questions like:<br>
        <span style="color:#94a3b8">• "Why is TVS declining?"</span><br>
        <span style="color:#94a3b8">• "What happened to the gummies?"</span><br>
        <span style="color:#94a3b8">• "How is Rho Nutrition winning?"</span><br>
        <span style="color:#94a3b8">• "What should we do to recover sales?"</span>
      </div>
    </div>
    <div style="padding:10px 12px;border-top:1px solid #334155">
      <div style="display:flex;gap:7px">
        <input id="qa-input" type="text" placeholder="Type your question..." autocomplete="off"
          style="flex:1;background:#273549;border:1px solid #334155;color:#f1f5f9;border-radius:8px;padding:8px 11px;font-size:11.5px;outline:none;font-family:inherit"/>
        <button id="qa-send-btn"
          style="background:#7c3aed;color:#fff;border:none;border-radius:8px;padding:8px 14px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap">Ask ↩</button>
      </div>
      <div id="qa-suggestions" style="margin-top:8px;display:flex;flex-wrap:wrap;gap:5px"></div>
    </div>`;
  document.body.appendChild(panel);

  // Suggested questions
  const SUGGESTIONS = [
    "Why is TVS declining?",
    "What is TDP?",
    "How is Rho Nutrition winning?",
    "Did collagen cause the decline?",
    "What should we do to recover?",
    "How is iHERB performing?",
    "What happened to the gummies?",
    "Why did we exit CVS and Walgreens?",
    "Is Reserveage stabilizing?",
  ];

  function showSuggestions(filter = '') {
    const sugEl = document.getElementById('qa-suggestions');
    if (!sugEl) return;
    const filtered = filter
      ? SUGGESTIONS.filter(s => s.toLowerCase().includes(filter.toLowerCase())).slice(0, 4)
      : SUGGESTIONS.slice(0, 5);
    sugEl.innerHTML = filtered.map(s =>
      `<button class="qa-sug" style="background:#273549;border:1px solid #334155;color:#94a3b8;border-radius:12px;padding:3px 10px;font-size:9.5px;cursor:pointer;transition:all .15s;font-family:inherit"
        onmouseenter="this.style.borderColor='#7c3aed';this.style.color='#c4b5fd'"
        onmouseleave="this.style.borderColor='#334155';this.style.color='#94a3b8'"
        onclick="document.getElementById('qa-input').value='${s}';sendQuestion()">${s}</button>`
    ).join('');
  }
  showSuggestions();

  // Input handler
  const inputEl = document.getElementById('qa-input');
  inputEl.addEventListener('input', () => showSuggestions(inputEl.value));
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') sendQuestion(); });

  // Toggle
  btn.onclick = () => {
    const open = panel.style.display !== 'none' && panel.style.display !== '';
    panel.style.display = open ? 'none' : 'flex';
    if (!open) inputEl.focus();
  };
  document.getElementById('qa-close-btn').onclick = () => { panel.style.display = 'none'; };
  document.getElementById('qa-send-btn').onclick = sendQuestion;

  // ─── SEND QUESTION ───────────────────────────────────
  window.sendQuestion = function() {
    const input = document.getElementById('qa-input');
    const q = input.value.trim();
    if (!q) return;
    input.value = '';
    showSuggestions();

    // Add user message
    appendMsg(q, 'user');

    // Show typing indicator
    const typingId = 'typing-' + Date.now();
    appendMsg('Searching...', 'typing', typingId);

    setTimeout(() => {
      const results = search(q, 3);
      document.getElementById(typingId)?.remove();

      if (!results.length || results[0].score < 0.18) {
        appendMsg(`<strong>I couldn't find a specific answer to that.</strong><br><br>
          Try rephrasing, or ask about:<br>
          <span style="color:#94a3b8">• TVS / Vitamin Shoppe performance</span><br>
          <span style="color:#94a3b8">• TDP and distribution analysis</span><br>
          <span style="color:#94a3b8">• Competitor landscape (Rho Nutrition)</span><br>
          <span style="color:#94a3b8">• Collagen and powder analysis</span><br>
          <span style="color:#94a3b8">• What to do to recover sales</span>`, 'bot');
        return;
      }

      const best = results[0].entry;
      const confidence = results[0].score;

      let html = best.a;

      // Add source tags
      if (best.sources && best.sources.length) {
        html += `<div style="margin-top:8px;padding-top:6px;border-top:1px solid rgba(255,255,255,.06);font-size:9px;color:#475569">
          📊 Sources: ${best.sources.map(s=>`<span style="background:rgba(6,182,212,.12);color:#06b6d4;padding:1px 5px;border-radius:4px;margin-right:3px">${s}</span>`).join('')}
        </div>`;
      }

      // Related questions (other matches)
      if (results.length > 1) {
        html += `<div style="margin-top:8px;padding-top:6px;border-top:1px solid rgba(255,255,255,.06);font-size:9.5px;color:#94a3b8">
          <strong style="color:#7c3aed">Related:</strong><br>
          ${results.slice(1).map(r =>
            `<span class="qa-related" style="cursor:pointer;color:#7c3aed;text-decoration:underline;display:block;margin-top:2px"
              onclick="document.getElementById('qa-input').value='${r.entry.q}';sendQuestion()">
              → ${r.entry.q}
            </span>`
          ).join('')}
        </div>`;
      }

      appendMsg(html, 'bot');
    }, 350);
  };

  function appendMsg(content, type, id) {
    const msgs = document.getElementById('qa-messages');
    const div = document.createElement('div');
    if (id) div.id = id;
    const isUser = type === 'user';
    const isTyping = type === 'typing';
    div.style.cssText = `
      background:${isUser ? '#3730a3' : '#273549'};
      border:1px solid ${isUser ? '#4f46e5' : '#334155'};
      border-radius:8px;padding:9px 12px;
      font-size:11px;color:#f1f5f9;line-height:1.6;
      align-self:${isUser ? 'flex-end' : 'flex-start'};
      max-width:95%;
      ${isTyping ? 'color:#94a3b8;font-style:italic' : ''}`;
    div.innerHTML = content;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildChatUI);
} else {
  buildChatUI();
}

})();
