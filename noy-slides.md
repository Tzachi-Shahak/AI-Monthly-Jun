---
theme: tzachi-kaltura
title: AI Monthly — June 2026 · Noy Sabbag
layout: logo
bg: white
---

---
layout: section
---

<!-- Decorative: large slash bottom-right bleed, blue -->
<div class="absolute pointer-events-none" style="bottom:-55px; right:-50px; opacity:0.2; transform:rotate(-25deg);">
  <KShape name="logo-shape-large" color="blue" height="300px" />
</div>
<!-- Decorative: play-in-circle top-right accent -->
<div class="absolute pointer-events-none" style="top:36px; right:90px; opacity:0.5;">
  <KShape name="play-in-circle" color="blue" height="48px" />
</div>

# Working Smarter with Claude Code

<div class="flex items-center gap-3 mt-4">
  <img src="/images/noy2.png" alt="Noy Sabbag" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
  <span style="color:rgba(255,255,255,0.5); font-size:0.95em;">Noy Sabbag</span>
</div>

---

# The AI Landscape

<div class="flex gap-4 items-stretch" style="padding-top:12px;padding-bottom:32px;">

  <div class="flex-1 rounded-2xl p-5 flex flex-col items-center gap-3 text-center" style="background:var(--k-eggshell);border-top:4px solid #FF6D00;">
    <img src="/images/claude logo.png" style="width:56px;height:56px;object-fit:contain;border-radius:12px;" />
    <div class="font-bold" style="color:#FF6D00;">Claude</div>
    <div class="text-xs opacity-60">by Anthropic</div>
    <div class="text-xs opacity-80 mt-auto">Reasoning, coding, long context, safety-focused</div>
  </div>

  <div class="flex-1 rounded-2xl p-5 flex flex-col items-center gap-3 text-center" style="background:var(--k-eggshell);border-top:4px solid #10a37f;">
    <img src="/images/chat gpt logo.png" style="width:56px;height:56px;object-fit:contain;border-radius:12px;" />
    <div class="font-bold" style="color:#10a37f;">ChatGPT</div>
    <div class="text-xs opacity-60">by OpenAI</div>
    <div class="text-xs opacity-80 mt-auto">The pioneer — widely used, strong general assistant</div>
  </div>

  <div class="flex-1 rounded-2xl p-5 flex flex-col items-center gap-3 text-center" style="background:var(--k-eggshell);border-top:4px solid var(--k-blue);">
    <img src="/images/gemini logo.webp" style="width:56px;height:56px;object-fit:contain;border-radius:12px;" />
    <div class="font-bold" style="color:var(--k-blue);">Gemini</div>
    <div class="text-xs opacity-60">by Google</div>
    <div class="text-xs opacity-80 mt-auto">Multimodal, deeply integrated with Google products</div>
  </div>

  <div class="flex-1 rounded-2xl p-5 flex flex-col items-center gap-3 text-center" style="background:var(--k-eggshell);border-top:4px solid var(--k-pink);">
    <img src="/images/deepseek logo.png" style="width:56px;height:56px;object-fit:contain;border-radius:12px;" />
    <div class="font-bold" style="color:var(--k-pink);">DeepSeek</div>
    <div class="text-xs opacity-60">by DeepSeek AI</div>
    <div class="text-xs opacity-80 mt-auto">Open source, cost-efficient, strong reasoning model</div>
  </div>

</div>

<div class="text-center text-sm opacity-60">We use <strong style="color:#FF6D00;">Claude</strong> — specifically <strong>Claude Code</strong>, Anthropic's coding agent for the terminal and VS Code</div>

---

# What is Context?

<div class="flex gap-8 items-start" style="padding-top:8px;padding-bottom:48px;">
  <div class="flex-1 flex flex-col gap-4 pt-2">
    <p class="text-lg">Claude only knows what's in the <strong>current conversation</strong> — like a colleague with no long-term memory.</p>
    <div class="flex items-start gap-3">
      <KShape name="rec" color="blue" height="22px" style="flex-shrink:0;margin-top:2px;" />
      <span class="text-sm">Every message, file, and tool result fills the window — it's <strong>finite</strong></span>
    </div>
    <div class="flex items-start gap-3">
      <KShape name="fastforward" color="red" height="22px" style="flex-shrink:0;margin-top:2px;" />
      <span class="text-sm">When full, the oldest content <strong>drops off silently</strong> — Claude forgets without warning</span>
    </div>
    <div class="rounded-xl p-3 mt-1" style="background:var(--k-yellow);color:var(--k-dark);">
      <strong>Why it matters:</strong> a full context window means Claude loses track of your goal — and gives you wrong, incomplete results.
    </div>
  </div>

  <div class="flex-none flex flex-col items-center" style="width:300px;">
    <div style="display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:4px;">
      <div class="text-xs font-bold opacity-50">— fixed window size —</div>
      <button id="ctx-replay" onclick="window.__ctxReplay && window.__ctxReplay()" style="font-size:10px;padding:2px 8px;border-radius:6px;border:1px solid #006efa;color:#006efa;background:white;cursor:pointer;line-height:1.6;">↺ replay</button>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-start;width:100%;" onclick="window.__ctxToggle && window.__ctxToggle()" title="click to pause / resume">
      <div id="ctx-win" style="flex:1;border:2px solid #006efa;border-radius:16px;overflow:hidden;background:white;min-height:40px;cursor:pointer;"></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding-top:4px;">
        <div id="ctx-bar-wrap" style="width:14px;height:160px;background:#e8f0ff;border-radius:8px;overflow:hidden;position:relative;">
          <div id="ctx-bar" style="position:absolute;bottom:0;left:0;right:0;background:#006efa;border-radius:8px;height:0%;transition:height 0.5s ease;"></div>
          <div id="ctx-bar-red" style="position:absolute;bottom:0;left:0;right:0;background:#ff3d23;border-radius:8px;height:0%;transition:height 0.5s ease,opacity 0.3s;opacity:0;"></div>
        </div>
        <div id="ctx-pct" style="font-size:9px;font-weight:700;color:#006efa;transition:color 0.3s;">0%</div>
      </div>
    </div>
    <div id="ctx-claude" style="width:100%;border-radius:12px;background:#1a1a2e;color:#e8e8e8;font-size:10.5px;font-style:italic;line-height:1.5;padding:10px 12px;margin-top:8px;opacity:0;transition:opacity 0.4s ease;"></div>
    <p class="text-xs mt-2 text-center opacity-50">window full — Claude lost the original request</p>
  </div>
</div>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useIsSlideActive } from '@slidev/client'

const isActive = useIsSlideActive()

const ROWS = [
  { bg: '#006efa', color: 'white',   icon: '💬', text: '"Fix upload failure for client Acme Corp"' },
  { bg: '#e8f0ff', color: '#282828', icon: '📄', text: 'ingest-pipeline.ts — Kaltura upload handler' },
  { bg: '#ff9dff', color: '#282828', icon: '🔧', text: 'kaltura-jira: fetched logs — 23 HLS errors' },
  { bg: '#ffd357', color: '#282828', icon: '🔧', text: 'Edited upload-handler.ts + encoding.config' },
  { bg: '#e8f0ff', color: '#282828', icon: '💬', text: '"Now create a Jira ticket for this"' },
]

const MAX_ROWS = 4   // window shows max 4 rows
const STEP_MS  = 1400
const HOLD_MS  = 6000

let running = false
let paused  = false
let rowEls  = []
let timers  = []

const after = ms => new Promise(r => {
  const check = () => {
    if (!running) return
    if (paused) { timers.push(setTimeout(check, 100)); return }
    r()
  }
  timers.push(setTimeout(check, ms))
})

function setCounter(filled, overLimit) {
  const pct  = Math.min(100, Math.round((filled / MAX_ROWS) * 100))
  const bar  = document.getElementById('ctx-bar')
  const red  = document.getElementById('ctx-bar-red')
  const lbl  = document.getElementById('ctx-pct')
  if (!bar || !red || !lbl) return
  if (overLimit) {
    bar.style.height = '0%'
    red.style.height = '100%'
    red.style.opacity = '1'
    lbl.style.color   = '#ff3d23'
    lbl.textContent   = '100%'
  } else {
    bar.style.height  = pct + '%'
    red.style.opacity = '0'
    lbl.style.color   = pct >= 100 ? '#ff3d23' : '#006efa'
    lbl.textContent   = pct + '%'
  }
}

function makeRow(d, faded) {
  const el = document.createElement('div')
  const opacity = faded ? '0.25' : '0'
  el.style.cssText = `display:flex;align-items:center;gap:8px;padding:8px 12px;font-size:11px;min-height:38px;background:${d.bg};color:${d.color};transition:opacity .5s ease,transform .5s ease,text-decoration .3s;max-height:60px;overflow:hidden;opacity:${opacity};transform:translateY(${faded ? '0' : '12px'});font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;`
  el.innerHTML = `<span style="flex-shrink:0;font-size:12px;">${d.icon}</span><span style="flex:1;line-height:1.3;">${d.text}</span>`
  return el
}

async function addRow(d, faded) {
  const win = document.getElementById('ctx-win')
  if (!win || !running) return
  const el = makeRow(d, faded)
  win.appendChild(el)
  rowEls.push(el)
  await after(30)
  if (!faded) {
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
  }
}

async function fadeAndCrossRow(el) {
  el.style.opacity = '0.18'
  el.style.textDecoration = 'line-through'
  const span = el.querySelector('span:last-child')
  if (span) span.style.textDecoration = 'line-through'
}

async function runLoop() {
  if (!running) return
  const win = document.getElementById('ctx-win')
  const box = document.getElementById('ctx-claude')
  if (win) win.innerHTML = ''
  if (box) { box.style.opacity = '0'; box.innerHTML = '' }
  rowEls = []
  setCounter(0, false)
  await after(800)

  for (let i = 0; i < ROWS.length; i++) {
    if (!running) return
    await addRow(ROWS[i], false)
    const filled = Math.min(i + 1, MAX_ROWS)
    setCounter(filled, false)
    await after(STEP_MS)
  }

  if (!running) return

  // Window is now over limit — fade & cross only row 0
  setCounter(MAX_ROWS, true)
  await after(400)
  await fadeAndCrossRow(rowEls[0])
  await after(700)

  // Add warning row
  const warnEl = document.createElement('div')
  warnEl.style.cssText = `display:flex;align-items:center;gap:8px;padding:8px 12px;font-size:11px;font-weight:700;min-height:38px;background:#ff3d23;color:white;opacity:0;transform:translateY(10px);transition:opacity .4s ease,transform .4s ease;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;`
  warnEl.innerHTML = `<span style="flex-shrink:0;">⚠</span><span>Context limit reached — first messages forgotten</span>`
  win.appendChild(warnEl)
  await after(30)
  warnEl.style.opacity = '1'
  warnEl.style.transform = 'translateY(0)'
  await after(800)

  // Show Claude's dumb response
  if (box) {
    box.innerHTML = '<span style="color:#aaa;font-style:normal;margin-right:4px;">Claude:</span>"Sure! Could you remind me — which client is this for, and what issue should I document?"'
    box.style.opacity = '1'
  }
  // stays on Claude's response — no loop
}

function startFresh() {
  running = false
  paused  = false
  timers.forEach(clearTimeout)
  timers   = []
  rowEls   = []
  running  = true
  runLoop()
}

window.__ctxReplay = startFresh
window.__ctxToggle = () => { paused = !paused }

onMounted(() => {
  watch(isActive, (active) => {
    if (active) {
      startFresh()
    } else {
      running = false
      timers.forEach(clearTimeout)
      timers = []
    }
  }, { immediate: true })
})

onUnmounted(() => {
  running = false
  timers.forEach(clearTimeout)
  timers = []
  delete window.__ctxReplay
  delete window.__ctxToggle
})
</script>

---

# Choose Your Model

<div class="flex flex-col gap-4 items-start" style="padding-top:8px;padding-bottom:48px;">
  <div class="flex gap-6 w-full">
    <div class="flex-1 rounded-2xl p-5 flex flex-col gap-3" style="background:var(--k-eggshell);border:2px solid var(--k-blue);">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <KShape name="play-in-circle" color="blue" height="36px" />
          <div>
            <div class="font-bold text-lg" style="color:var(--k-blue)">Sonnet 4.6</div>
            <div class="text-xs opacity-60">Think &amp; Plan</div>
          </div>
        </div>
        <span class="rounded-full px-3 py-1 text-xs font-mono font-bold" style="background:var(--k-blue);color:white;">$3 / MTok</span>
      </div>
      <img src="/images/sonnet (1M).png" alt="Sonnet model info" style="width:100%;border-radius:8px;object-fit:contain;max-height:52px;" />
      <ul class="text-sm flex flex-col gap-1">
        <li>Complex reasoning &amp; research</li>
        <li>Plan Mode, multi-step tasks</li>
        <li>When judgment is needed</li>
      </ul>
    </div>
    <div class="flex-1 rounded-2xl p-5 flex flex-col gap-3" style="background:var(--k-eggshell);border:2px solid var(--k-green);">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <KShape name="fastforward" color="green" height="36px" />
          <div>
            <div class="font-bold text-lg" style="color:var(--k-green)">Haiku 4.5</div>
            <div class="text-xs opacity-60">Act &amp; Execute</div>
          </div>
        </div>
        <span class="rounded-full px-3 py-1 text-xs font-mono font-bold" style="background:var(--k-green);color:white;">$1 / MTok</span>
      </div>
      <img src="/images/haiku.png" alt="Haiku model info" style="width:100%;border-radius:8px;object-fit:contain;max-height:52px;" />
      <ul class="text-sm flex flex-col gap-1">
        <li>File edits, searches, repetitive tasks</li>
        <li>Fast responses, lower cost</li>
        <li>When the path is already clear</li>
      </ul>
    </div>
  </div>
  <div class="w-full rounded-xl p-3" style="background:var(--k-yellow);color:var(--k-dark);">
    <strong>The rule:</strong> Use <strong>Sonnet to think</strong>, switch to <strong>Haiku to do</strong> — saves tokens, keeps context alive longer.
  </div>
</div>

---

# Plan Mode

<div class="flex gap-6 items-start" style="padding-top:8px;padding-bottom:48px;">
  <div class="flex-1 flex flex-col gap-4">
    <p class="text-base opacity-80">Before Claude touches anything — agree on the full plan first.</p>
    <div class="flex items-start gap-3">
      <span class="rounded px-2 py-1 text-xs font-mono font-bold flex-shrink-0" style="background:var(--k-blue);color:white;">1</span>
      <span class="text-sm">Open VS Code → click the <strong>Claude icon</strong> in the Activity Bar</span>
    </div>
    <div class="flex items-start gap-3">
      <span class="rounded px-2 py-1 text-xs font-mono font-bold flex-shrink-0" style="background:var(--k-blue);color:white;">2</span>
      <span class="text-sm">Click the mode button (bottom-<strong>right</strong> of chat) → select <strong>Plan mode</strong></span>
    </div>
    <div class="flex items-start gap-3">
      <span class="rounded px-2 py-1 text-xs font-mono font-bold flex-shrink-0" style="background:var(--k-blue);color:white;">3</span>
      <span class="text-sm">Type your task — Claude proposes steps <em>without executing anything</em></span>
    </div>
    <div class="rounded-xl p-3" style="background:var(--k-yellow);color:var(--k-dark);">
      <strong>Result:</strong> fewer surprises, less wasted context, better output.
    </div>
  </div>
  <div class="flex-none" style="width:220px;">
    <img src="/images/plan mode.png" alt="Plan mode selector" style="width:100%;border-radius:12px;object-fit:contain;" />
  </div>
</div>

---

# MCP · Plugin · Skill

<div class="flex flex-col gap-2" style="padding-top:4px;padding-bottom:36px;">
  <div class="flex gap-3">
    <div class="flex-1 rounded-2xl p-3 flex flex-col gap-1" style="background:var(--k-eggshell);border-top:4px solid var(--k-blue);">
      <img src="/images/socket.png" style="height:60px;width:60px;object-fit:contain;border-radius:14px;margin-bottom:4px;" />
      <span class="font-bold text-sm" style="color:var(--k-blue)">MCP Server</span>
      <div class="text-xs opacity-80">The <strong>connection layer</strong> — lets Claude talk to an external tool.</div>
      <div class="text-xs opacity-50 italic">The socket in the wall</div>
    </div>
    <div class="flex-1 rounded-2xl p-3 flex flex-col gap-1" style="background:var(--k-eggshell);border-top:4px solid var(--k-pink);">
      <img src="/images/kettle.png" style="height:60px;width:60px;object-fit:contain;border-radius:14px;margin-bottom:4px;" />
      <span class="font-bold text-sm" style="color:var(--k-pink)">Plugin</span>
      <div class="text-xs opacity-80">A <strong>packaged MCP</strong> you install — install once, ready to use.</div>
      <div class="text-xs opacity-50 italic">The appliance you plug in</div>
    </div>
    <div class="flex-1 rounded-2xl p-3 flex flex-col gap-1" style="background:var(--k-eggshell);border-top:4px solid var(--k-green);">
      <img src="/images/manual.png" style="height:60px;width:60px;object-fit:contain;border-radius:14px;margin-bottom:4px;" />
      <span class="font-bold text-sm" style="color:var(--k-green)">Skill</span>
      <div class="text-xs opacity-80">A <strong>prompt instruction</strong> — tells Claude how to use the plugin.</div>
      <div class="text-xs opacity-50 italic">The instruction manual</div>
    </div>
  </div>

  <div class="rounded-2xl p-3" style="background:var(--k-dark);color:white;">
    <div class="flex items-center gap-2 mb-2">
      <KShape name="play" color="yellow" height="18px" />
      <span class="font-bold text-sm" style="color:var(--k-yellow)">Real example: kaltura-jira</span>
    </div>
    <div class="flex gap-2 text-xs">
      <div class="flex-1 rounded-xl p-2" style="background:rgba(255,255,255,0.08);border-top:3px solid var(--k-blue);">
        <div class="font-bold mb-1" style="color:var(--k-blue)">① Install MCP first</div>
        <div class="font-mono opacity-80" style="font-size:0.65em;">atlassian/mcp-server-atlassian</div>
        <div class="opacity-60 mt-1">Prerequisite — without this, nothing works</div>
      </div>
      <div class="flex-1 rounded-xl p-2" style="background:rgba(255,255,255,0.08);border-top:3px solid var(--k-yellow);">
        <div class="font-bold mb-1" style="color:var(--k-yellow)">② Add marketplace</div>
        <div class="font-mono opacity-80" style="font-size:0.65em;">claude plugin marketplace add<br/>https://github.com/kaltura/<br/>kalt-ai-plugin-marketplace</div>
      </div>
      <div class="flex-1 rounded-xl p-2" style="background:rgba(255,255,255,0.08);border-top:3px solid var(--k-pink);">
        <div class="font-bold mb-1" style="color:var(--k-pink)">③ Install plugin</div>
        <div class="font-mono opacity-80" style="font-size:0.65em;">claude plugin install<br/>kaltura-jira@kalt-ai-plugins</div>
      </div>
      <div class="flex-1 rounded-xl p-2" style="background:rgba(255,255,255,0.08);border-top:3px solid var(--k-green);">
        <div class="font-bold mb-1" style="color:var(--k-green)">④ Use a skill</div>
        <div class="opacity-80">Claude now knows how to create, update &amp; query Jira issues — without explaining it every time</div>
      </div>
    </div>
  </div>
</div>

---

# It All Comes Back to Context

<div class="flex gap-8 items-start" style="padding-top:8px;padding-bottom:48px;">
  <div class="flex-1 flex flex-col gap-4">
    <div class="flex items-start gap-3">
      <KShape name="fastforward" color="green" height="28px" style="flex-shrink:0;margin-top:2px;" />
      <span><strong>Model choice</strong> controls how fast you fill the context window</span>
    </div>
    <div class="flex items-start gap-3">
      <KShape name="screen" color="blue" height="28px" style="flex-shrink:0;margin-top:2px;" />
      <span><strong>MCP &amp; Plugins</strong> bring in external knowledge without pasting walls of text</span>
    </div>
    <div class="flex items-start gap-3">
      <KShape name="chat" color="pink" height="28px" style="flex-shrink:0;margin-top:2px;" />
      <span><strong>Skills</strong> keep your prompts short and precise — less noise, more signal</span>
    </div>
    <div class="rounded-xl p-4" style="background:var(--k-yellow);color:var(--k-dark);">
      <strong>All three together</strong> = a longer, smarter, more reliable conversation with Claude.
    </div>
    <div class="text-center pt-2">
      <span class="font-bold text-2xl" style="color:var(--k-dark)">Less junk in context — more </span>
      <span class="font-bold text-2xl" style="color:#FF6D00;">Claude</span>
      <span class="font-bold text-2xl" style="color:var(--k-dark);"> for you.</span>
    </div>
  </div>
  <div class="flex-none flex items-start justify-center pt-2" style="width:140px;">
    <KEmoji name="fire" size="90px" />
  </div>
</div>

---

# Email Templates in Hebrew — First Time with RTL

<div class="flex gap-6 items-start" style="padding-top:8px;">
  <div class="flex-1 flex flex-col">
    <p class="text-sm opacity-80" style="margin-bottom:6px;">Oref VOD (פיקוד העורף) needed localized email templates — Hebrew copy, RTL layout, and HFC branding. First time I'd done RTL with Claude Code.</p>
    <div class="flex flex-col gap-2">
      <div class="flex items-start gap-3">
        <KShape name="chat" color="blue" height="22px" style="flex-shrink:0;margin-top:2px;" />
        <span class="text-sm">Asked Claude to localize 4 Kaltura templates: Invite, Set Password, Password Reset, Password Changed</span>
      </div>
      <div class="flex items-start gap-3">
        <KShape name="screen" color="pink" height="22px" style="flex-shrink:0;margin-top:2px;" />
        <span class="text-sm">Claude added <code>dir="rtl"</code>, flipped all <code>text-align</code> values, translated copy, updated branding and footer colors</span>
      </div>
      <div class="flex items-start gap-3">
        <KShape name="play" color="green" height="22px" style="flex-shrink:0;margin-top:2px;" />
        <span class="text-sm">Also wrote Python scripts to apply the transformations automatically across all templates</span>
      </div>
    </div>
    <div class="rounded-xl p-2" style="background:var(--k-yellow);color:var(--k-dark);margin-top:6px;font-size:0.88rem;">
      <strong>New territory:</strong> RTL HTML emails are notoriously fiddly — Claude handled the structural changes I wouldn't have wanted to do manually.
    </div>
  </div>
  <div class="flex-none" style="width:280px;">
    <img src="/images/oref-hebrew.png" alt="Hebrew RTL email" style="width:100%;border-radius:12px;object-fit:contain;box-shadow:0 4px 20px rgba(0,0,0,0.15);" />
  </div>
</div>

---

# Then — English Versions Too

<div class="flex gap-6 items-stretch" style="padding-top:8px;padding-bottom:32px;">
  <div class="flex-none flex" style="width:280px;">
    <img src="/images/oref-english.png" alt="English email" style="width:100%;border-radius:12px;object-fit:cover;object-position:top;box-shadow:0 4px 20px rgba(0,0,0,0.15);" />
  </div>
  <div class="flex-1 flex flex-col gap-3">
    <p class="text-base opacity-80">Once the Hebrew versions were done, I needed English variations too — same layout and branding, copy translated back.</p>
    <div class="flex items-start gap-3">
      <KShape name="fastforward" color="blue" height="22px" style="flex-shrink:0;margin-top:2px;" />
      <span class="text-sm">Claude translated all 4 Hebrew templates back to English, keeping the HFC branding and structure intact</span>
    </div>
    <div class="flex items-start gap-3">
      <KShape name="rec" color="green" height="22px" style="flex-shrink:0;margin-top:2px;" />
      <span class="text-sm">Flipped the RTL layout back to LTR — <code>text-align:right</code> → <code>text-align:left</code>, removed <code>dir="rtl"</code></span>
    </div>
    <div class="rounded-xl p-3 mt-auto" style="background:var(--k-eggshell);border-left:4px solid var(--k-blue);">
      Doing this manually for 8 files across 2 languages would've taken hours. With Claude — one prompt per direction.
    </div>
  </div>
</div>

---

# The Catch — HTML Broke

<div class="flex gap-6 items-stretch" style="padding-top:8px;padding-bottom:32px;">
  <div class="flex-1 flex flex-col gap-3">
    <p class="text-base opacity-80">The first batch of outputs had broken HTML — the Kaltura template structure uses nested Marketo module scaffolding that Claude mangled.</p>
    <div class="flex items-start gap-3">
      <KShape name="fastforward" color="red" height="22px" style="flex-shrink:0;margin-top:2px;" />
      <span class="text-sm">Unclosed tags, misplaced <code>&lt;td&gt;</code> elements, broken table nesting — everything looked fine in the preview but failed in the email client</span>
    </div>
    <div class="flex items-start gap-3">
      <KShape name="rec" color="blue" height="22px" style="flex-shrink:0;margin-top:2px;" />
      <span class="text-sm">Had to redo all 4 templates — this time giving Claude the constraint: <strong>simplified, self-contained HTML only</strong>, no Marketo scaffolding</span>
    </div>
    <div class="rounded-xl p-3 mt-auto" style="background:var(--k-yellow);color:var(--k-dark);">
      <strong>Lesson:</strong> Claude does great work — but complex existing HTML needs explicit constraints, not just "preserve the structure".
    </div>
  </div>
  <div class="flex-none flex" style="width:280px;">
    <img src="/images/oref-broken.png" alt="Broken HTML in email editor" style="width:100%;border-radius:12px;object-fit:cover;object-position:top;box-shadow:0 4px 20px rgba(0,0,0,0.15);" />
  </div>
</div>

---

# Who to Follow

<div class="flex gap-4 items-stretch" style="padding-top:8px;padding-bottom:48px;">

  <div class="flex-1 rounded-2xl p-4 flex flex-col gap-2" style="background:var(--k-eggshell);border-top:4px solid var(--k-blue);">
    <div class="flex items-center gap-3">
      <img src="/images/yuval avidani.png" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
      <div>
        <div class="font-bold text-base" style="color:var(--k-blue)">Yuval Avidani</div>
        <div class="text-xs opacity-60">🇮🇱 Hebrew + English</div>
      </div>
    </div>
    <div class="text-sm opacity-80 flex-1">General AI &amp; Claude — lots of free content on working smarter with AI tools.</div>
    <div class="flex flex-col gap-1 mt-1">
      <a href="https://www.facebook.com/yuval.avidani/" class="text-xs" style="color:var(--k-blue);">📘 Facebook</a>
      <a href="https://www.youtube.com/@yuv-ai" class="text-xs" style="color:var(--k-blue);">▶️ YouTube</a>
      <a href="https://www.whatsapp.com/channel/0029Vaf1TtmLikg7KtQOrI27" class="text-xs" style="color:var(--k-blue);">💬 WhatsApp channel (HEB)</a>
    </div>
  </div>

  <div class="flex-1 rounded-2xl p-4 flex flex-col gap-2" style="background:var(--k-eggshell);border-top:4px solid var(--k-pink);">
    <div class="flex items-center gap-3">
      <img src="/images/guy aga.png" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
      <div>
        <div class="font-bold text-base" style="color:var(--k-pink)">Guy Aga</div>
        <div class="text-xs opacity-60">🇮🇱 Hebrew (can be translated)</div>
      </div>
    </div>
    <div class="text-sm opacity-80 flex-1">Content creation, social media, very impressive AI design features.</div>
    <div class="flex flex-col gap-1 mt-1">
      <a href="https://www.facebook.com/Guyaga/" class="text-xs" style="color:var(--k-pink);">📘 Facebook</a>
      <a href="https://bestguy.ai/" class="text-xs" style="color:var(--k-pink);">🌐 bestguy.ai</a>
      <a href="https://my.schooler.biz/s/113939/1691505442920-6/1BZeYCM" class="text-xs font-bold" style="color:var(--k-pink);">🎓 Free AI course (HEB) — now free!</a>
      <div class="text-xs opacity-60 italic" style="padding-left:18px;">Super comprehensive — I paid a lot for this a year and a half ago</div>
    </div>
  </div>

  <div class="flex-1 rounded-2xl p-4 flex flex-col gap-2" style="background:var(--k-eggshell);border-top:4px solid var(--k-green);">
    <div class="flex items-center gap-3">
      <img src="/images/riley brown.png" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
      <div>
        <div class="font-bold text-base" style="color:var(--k-green)">Riley Brown</div>
        <div class="text-xs opacity-60">🇺🇸 English</div>
      </div>
    </div>
    <div class="text-sm opacity-80 flex-1">Vibe coding live sessions — how he approaches real projects with AI from scratch.</div>
    <div class="flex flex-col gap-1 mt-1">
      <a href="https://www.youtube.com/@rileybrownai" class="text-xs" style="color:var(--k-green);">▶️ YouTube</a>
    </div>
  </div>

</div>
