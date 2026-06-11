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

<div class="grid grid-cols-2 gap-10 mt-2">
<div>

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

</div>
<div class="flex flex-col items-center justify-center">

<div v-click class="bh-animate">

**The Feature Request Path**

<div class="mt-2 rounded-xl overflow-hidden" style="width:100%">
  <img src="/pavel/black-hole-cartoon.png" class="w-full rounded-xl" style="max-height:300px;" />
</div>

</div>

</div>
</div>

<style>
.bh-animate {
  transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.bh-animate.slidev-vclick-hidden {
  transform: scale(0.3) rotate(-20deg);
  opacity: 0;
}
</style>

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

# PS Gaps

<div class="grid grid-cols-2 gap-10 mt-4">
<div>

**Risks to be aware of**

<v-clicks>

- **Security** — client-side code is visible; API credentials can be exposed if mishandled
- **No audit trail** — actions aren't logged centrally

</v-clicks>

</div>
<div>

**Operational challenges**

<v-clicks>

- **Maintainability** — no tests, no CI/CD, no code review process
- **Personnel change** — if the PS engineer moves on, the tool becomes orphaned
- **No versioning** — hard to roll back or track what changed
- **Support burden** — PS owns the lifecycle with no R&D safety net

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
- **Kaltura authentication built-in** — users log in with their own Kaltura credentials, no shared tokens
- Customer owns the experience end-to-end
- PS retains the knowledge, can iterate on demand

</v-clicks>

<v-click>

**The result:** production-grade tools delivered as side-of-desk projects — with zero R&D involvement.

</v-click>

---
layout: section
color: pink
---

# Example 1: Project Timeline Tracker
## Nomura kStudios

---
layout: default
---

# The Problem

Nomura's kStudios project ran across **10 deployments over 8 months** — original scope kept expanding with change requests, new requirements, bugs, and integrations.

<v-clicks>

- How do you show the customer what was delivered and when?
- How do you distinguish original commitments from scope growth?
- How do you give stakeholders a clear view of project health without a Jira login?
- How do you make scope creep visible — not hidden in a spreadsheet?

</v-clicks>

<v-click>

Standard Jira views weren't built for this kind of customer-facing delivery narrative. **PS built a tool that was.**

</v-click>

---
layout: default
---

# What It Does

<v-clicks>

- **Visual deployment timeline** — all 10 deployments on a single interactive timeline
- **Per-deployment drill-down** — click any deployment to see every Jira ticket it contained
- **Ticket categorization** — Original Scope · New Requirements · Change Requests · Bugs · Integrations
- **Scope comparison** — toggle between the actual timeline and the original planned scope
- **Direct Jira links** — click any ticket to open it in Jira instantly
- **No login required** — shareable with customers and stakeholders as-is

</v-clicks>

---
layout: default
---

# Live Walkthrough

<div class="flex flex-col items-center justify-center mt-6 gap-6">
  <div class="text-6xl">🎬</div>
  <div class="text-2xl font-bold">Video placeholder</div>
  <p class="text-gray-400 text-center max-w-md">Add a walkthrough video of the Nomura Project Timeline Tracker here</p>
</div>

---
layout: default
---

# Technical Approach

<v-clicks>

- **Single HTML file** — zero dependencies, no build step, no server, no API calls
- All project data is **embedded directly in the file** — exported from Jira and hardcoded
- **No authentication needed** — safe to share with customers and internal stakeholders
- Color-coded ticket types give instant visual clarity on scope health
- Original scope vs. actual timeline comparison makes scope creep undeniable — and explainable
- Jira deep-links let stakeholders jump from the timeline straight to the ticket

</v-clicks>

---
layout: section
color: red
---

# Example 2: Geo Location Report Tool
## McDonald's UK

---
layout: default
---

# The Problem

McDonald's UK Digital Technology team needed **country-level video analytics** from Kaltura — with the ability to extract data per **customized regions** (EMEA, LATAM, ABU and more).

<v-clicks>

- Which countries are watching their videos?
- Which regions drive the most engagement?
- How do completion rates vary by geography?
- Group countries into **custom regional presets** — not just standard geography
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

- **Authenticate** directly with Kaltura credentials — no manual API tokens
- **Select account** — auto-discovers all linked Kaltura accounts
- **Filter** by date range, country/region, and domain
- **Generate** a country-level report with one click
- **Download** as CSV — ready for Excel, BI tools, or reporting dashboards

</v-clicks>

---
layout: default
---

# Live Walkthrough

<div class="flex flex-col items-center justify-center mt-6 gap-6">
  <div class="text-6xl">🎬</div>
  <div class="text-2xl font-bold">Video placeholder</div>
  <p class="text-gray-400 text-center max-w-md">Add a walkthrough video of the Geo Location Report Tool here</p>
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

# Example 3: Analytics Report Tool
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
- **Select partner** — auto-discovers all linked accounts
- **Entry Report** — per-video stats across the full content library
- **Usage Summary** — platform-wide daily or monthly trend data with interactive chart
- **Download** as CSV — entry report or usage data, Excel-ready
- **Download chart** as PNG — ready for presentations and reports

</v-clicks>

---
layout: default
---

# Live Walkthrough

<div class="flex flex-col items-center justify-center mt-6 gap-6">
  <div class="text-6xl">🎬</div>
  <div class="text-2xl font-bold">Video placeholder</div>
  <p class="text-gray-400 text-center max-w-md">Add a walkthrough video of the KWS Analytics Report Tool here</p>
</div>

---
layout: default
---

# Technical Approach

<v-clicks>

- **Single HTML file** — zero dependencies, no build step, no server
- Deployed to KMS via **Custom Static Pages** module
- Two report types from a single tool:
  - `report/action/getTable` (Report Type 1) — per-video entry analytics
  - `report/action/getGraphs` (Report Type 34) — daily/monthly trend data
- **Chart.js** for in-browser interactive visualization — no backend needed
- Enriches entry data with `baseentry/action/getByIds` for metadata (created date, quiz flag, likes)
- Handles **pagination** automatically — up to 10,000 video entries

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
| `Quiz` | Yes/No — whether entry has a quiz |
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
- **Demonstrates PS expertise**: deeper than consulting — we can ship production tools

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

**The question isn't whether PS *can* build these tools — we just proved it three times. The question is how many more should we build?**

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

<!--
Open Q&A. Key talking points if asked:
- The Nomura timeline tracker gave the customer a clear view of project delivery and scope growth
- The Geo Location tool is live and in use by McDonald's UK today
- The KWS Analytics tool delivers entry-level and trend reporting from a single HTML file
- All were built as side-of-desk projects — no sprint, no estimate, no R&D
- The same pattern can be applied to any PS customer with a reporting need
-->
