---
theme: ../../Tzachi-Kaltura
title: PS-Built Tools — Shipping Production Tools Without R&D
highlighter: shiki
transition: slide-left
---

---
layout: cover
---

# PS-Built Tools
## How Professional Services Ships Production Tools Without R&D

---
layout: section
color: blue
---

# Why PS Teams Should Build Their Own Tools

---
layout: default
---

# The Traditional Path

<v-clicks>

- **Customer request** lands with the PS team
- Effort estimation → scoping → technical spec
- Handoff to R&D for prioritization
- Sprint planning — competing with a backlog of hundreds
- Development → QA → staging → release
- Customer waits **weeks or months**

</v-clicks>

<v-click>

> For a targeted, customer-specific need — this process is **overkill**.

</v-click>

---
layout: default
---

# The PS Advantage

<div class="grid grid-cols-2 gap-10 mt-4">
<div>

**What PS teams have**

<v-clicks>

- Deep Kaltura API knowledge
- Direct customer relationship
- Full context of the use case
- Ability to iterate in real-time with the customer

</v-clicks>

</div>
<div>

**What that enables**

<v-clicks>

- Ship in **days**, not quarters
- Tailor exactly to the customer's workflow
- No competing sprint priorities
- No abstraction for "general use" — just what's needed

</v-clicks>

</div>
</div>

---
layout: default
---

# PS Tools: The Model

<v-clicks>

- **Single HTML file** — no build pipeline, no server, no DevOps
- Deployed via KMS Custom Static Pages — available immediately
- Uses only public Kaltura APIs — fully supported, no hacks
- Customer owns the experience end-to-end
- PS retains the knowledge, can iterate on demand

</v-clicks>

<v-click>

**The result:** production-grade tools delivered as side-of-desk projects — with zero R&D involvement.

</v-click>

---
layout: section
color: red
---

# Example 1: Geo Location Report Tool
## McDonald's UK

---
layout: default
---

# The Problem

McDonald's UK Digital Technology team needed **country-level video analytics** from Kaltura.

<v-clicks>

- Which countries are watching their videos?
- Which regions drive the most engagement?
- How do completion rates vary by geography?
- Repeatable, filterable, downloadable — without touching the Kaltura UI

</v-clicks>

<v-click>

Standard Kaltura analytics UI didn't give them this in the format they needed. R&D roadmap couldn't prioritize a customer-specific CSV export. **PS built it instead.**

</v-click>

---
layout: default
---

# What It Does

<v-clicks>

- **Authenticate** directly with Kaltura credentials — directly with Kaltura credentials — no manual API tokens
- **Select account** - auto-discovers all linked Kaltura accounts
- **Filter** by date range, country/region, and domain
- **Generate** a country-level report with one click
- **Download** as CSV — ready for Excel, BI tools, or reporting dashboards

</v-clicks>

---
layout: default
---

# The Flow

<div class="grid grid-cols-3 gap-6 mt-6 text-center">
<div class="border border-gray-200 rounded-lg p-4">
  <div class="text-3xl mb-2">1️⃣</div>
  <strong>Sign In</strong>
  <p class="text-sm mt-1 text-gray-500">Email + password via Kaltura API</p>
</div>
<div class="border border-gray-200 rounded-lg p-4">
  <div class="text-3xl mb-2">2️⃣</div>
  <strong>Set Filters</strong>
  <p class="text-sm mt-1 text-gray-500">Date range · Country · Domain</p>
</div>
<div class="border border-gray-200 rounded-lg p-4">
  <div class="text-3xl mb-2">3️⃣</div>
  <strong>Generate & Download</strong>
  <p class="text-sm mt-1 text-gray-500">One click → CSV download link</p>
</div>
</div>

---
layout: default
---

# Sign In

<div class="flex justify-center mt-2">
  <img src="/geo-login.png" class="h-96 rounded-xl" />
</div>

---
layout: default
---

# Account Selection & Filters

<div class="flex justify-center mt-2">
  <img src="/geo-filters.png" class="h-96 rounded-xl" />
</div>

---
layout: default
---

# Technical Approach

<v-clicks>

- **Single HTML file** — zero dependencies, no build step, no server
- Deployed to KMS via **Custom Static Pages** module — no DevOps required
- All calls are **client-side** via CORS-enabled Kaltura endpoints:
  - `user/action/loginByLoginId`
  - `partner/action/listPartnersForUser`
  - `report/action/getUrlForReportAsCsv` (Report Type 36)
- Custom dropdown components built to survive **Bootstrap CSS overrides** in KMS

</v-clicks>

---
layout: section
color: green
---

# Example 2: Analytics Report Tool
## Keywords Studios (KWS)

---
layout: default
---

# The Problem

Keywords Studios needed **comprehensive video analytics** across their Kaltura account — per-video performance data and platform-wide usage trends, all in one place.

<v-clicks>

- Which videos are performing best?
- How are player impressions and plays trending over time?
- What is the average completion rate across the library?
- Exportable data, ready for internal reporting and BI tools

</v-clicks>

<v-click>

The Kaltura Analytics UI is powerful but not designed for bulk export or custom reporting workflows. **PS built a tool that is.**

</v-click>

---
layout: default
---

# What It Does

<v-clicks>

- **Authenticate** directly with Kaltura credentials
- **Select partner** - auto-discovers all linked accounts
- **Entry Report** — per-video stats across the full content library
- **Usage Summary** — platform-wide daily or monthly trend data with interactive chart
- **Download** as CSV - entry report or usage data, Excel-ready
- **Download chart** as PNG - ready for presentations and reports

</v-clicks>

---
layout: default
---

# The Flow

<div class="grid grid-cols-2 gap-6 mt-6 text-center">
<div class="border border-gray-200 rounded-lg p-4">
  <div class="text-3xl mb-2">📋</div>
  <strong>Entry Report</strong>
  <p class="text-sm mt-1 text-gray-500">Per-video: plays, completion rate, unique viewers, likes, quiz flag, and more — 16 columns</p>
</div>
<div class="border border-gray-200 rounded-lg p-4">
  <div class="text-3xl mb-2">📈</div>
  <strong>Usage Summary</strong>
  <p class="text-sm mt-1 text-gray-500">Platform trends: impressions, plays, unique viewers, minutes viewed, completion rate — daily or monthly</p>
</div>
</div>

---
layout: default
---

# Sign In

<div class="flex justify-center mt-2">
  <img src="/kws-login.png" class="h-96 rounded-xl" />
</div>

---
layout: default
---

# Partner Selection

<div class="flex justify-center mt-2">
  <img src="/kws-partner.png" class="h-96 rounded-xl" />
</div>

---
layout: default
---

# Report Configuration

<div class="flex justify-center mt-2">
  <img src="/kws-config.png" class="h-96 rounded-xl" />
</div>

---
layout: default
---

# Usage Summary — Interactive Chart

<div class="flex justify-center mt-2">
  <img src="/kws-chart.png" class="h-96 rounded-xl" />
</div>

---
layout: default
---

# Technical Approach

<v-clicks>

- **Single HTML file** — zero dependencies, no build step, no server
- Deployed to KMS via **Custom Static Pages** module
- Two report types from a single tool:
  - `report/action/getTable` (Report Type 1) - per-video entry analytics
  - `report/action/getGraphs` (Report Type 34) - daily/monthly trend data
- **Chart.js** for in-browser interactive visualization - no backend needed
- Enriches entry data with `baseentry/action/getByIds` for metadata
- Handles **pagination** automatically - up to 10,000 video entries

</v-clicks>

---
layout: default
---

# What's in the Entry Report CSV

| Column | Description |
|---|---|
| `Video Names` | Entry title |
| `Plays` | Total plays |
| `Player Impressions` | Total loads |
| `Completion Rate` | Average completion % |
| `Unique Viewers` | Identified viewers |
| `Avg Drop Off` | Where viewers stop watching |
| `Likes` | Votes from the entry metadata |
| `Quiz` | Yes/No - whether entry has a quiz |
| `Created On` | Entry creation date |

---
layout: default
---

# Why This Matters for PS

<v-clicks>

- **Time to value**: days from idea to live tool, not a quarter
- **Zero R&D dependency**: PS team owns the full lifecycle
- **Customer-specific**: built for each customer's workflow, not a generic feature
- **Reusable pattern**: the same approach works for any PS customer with a data need
- **Demonstrates PS expertise**: deeper than consulting - we can ship production tools

</v-clicks>

---
layout: default
---

# The Broader Opportunity

<v-clicks>

- Every PS team has customers with **data gaps** Kaltura doesn't natively fill
- Many of those gaps are **solvable with a single API call** and a clean UI
- PS project managers are closer to these needs than R&D will ever be
- A library of PS-built tools becomes a **competitive differentiator**

</v-clicks>

<v-click>

**The question isn't whether PS *can* build these tools - we just proved it twice. The question is how many more should we build?**

</v-click>

---
layout: logo
bg: white
---

---
layout: cover
---

# Thank You

### Questions?
