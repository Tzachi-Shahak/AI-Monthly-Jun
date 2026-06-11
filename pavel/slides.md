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

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>**Customer request** lands with the PS team</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Effort estimation → scoping → technical spec</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Handoff to R&D for prioritization</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Sprint planning — competing with a backlog of hundreds</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Development → QA → staging → release</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Customer waits **weeks or months**</span></div>

</v-clicks>

</div>

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

<div class="flex flex-col gap-3 mt-3">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Deep Kaltura API knowledge</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Direct customer relationship</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Full context of the use case</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Ability to iterate in real-time with the customer</span></div>

</v-clicks>

</div>

</div>
<div>

**What that enables**

<div class="flex flex-col gap-3 mt-3">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>Ship in **days**, not quarters</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>Tailor exactly to the customer's workflow</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>No competing sprint priorities</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>No abstraction for "general use" — just what's needed</span></div>

</v-clicks>

</div>

</div>
</div>

---
layout: default
---

# PS Gaps

<div class="grid grid-cols-2 gap-10 mt-4">
<div>

**Risks to be aware of**

<div class="flex flex-col gap-3 mt-3">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><div><strong>Security</strong><ul class="mt-1 flex flex-col gap-1 text-sm" style="color:var(--k-gray); list-style:none; padding:0;"><li class="flex items-start gap-2"><span style="color:var(--k-red);">&#8211;</span><span>Client-side code is visible; API credentials can be exposed if mishandled</span></li></ul></div></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><div><strong>No audit trail</strong><ul class="mt-1 flex flex-col gap-1 text-sm" style="color:var(--k-gray); list-style:none; padding:0;"><li class="flex items-start gap-2"><span style="color:var(--k-red);">&#8211;</span><span>Actions aren't logged centrally</span></li></ul></div></div>

</v-clicks>

</div>

</div>
<div>

**Operational challenges**

<div class="flex flex-col gap-3 mt-3">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><div><strong>Maintainability</strong><ul class="mt-1 flex flex-col gap-1 text-sm" style="color:var(--k-gray); list-style:none; padding:0;"><li class="flex items-start gap-2"><span style="color:var(--k-blue);">&#8211;</span><span>No tests, no CI/CD, no code review process</span></li></ul></div></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><div><strong>Personnel change</strong><ul class="mt-1 flex flex-col gap-1 text-sm" style="color:var(--k-gray); list-style:none; padding:0;"><li class="flex items-start gap-2"><span style="color:var(--k-blue);">&#8211;</span><span>If the PS engineer moves on, the tool becomes orphaned</span></li></ul></div></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><div><strong>No versioning</strong><ul class="mt-1 flex flex-col gap-1 text-sm" style="color:var(--k-gray); list-style:none; padding:0;"><li class="flex items-start gap-2"><span style="color:var(--k-blue);">&#8211;</span><span>Hard to roll back or track what changed</span></li></ul></div></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><div><strong>Support burden</strong><ul class="mt-1 flex flex-col gap-1 text-sm" style="color:var(--k-gray); list-style:none; padding:0;"><li class="flex items-start gap-2"><span style="color:var(--k-blue);">&#8211;</span><span>PS owns the lifecycle with no R&D safety net</span></li></ul></div></div>

</v-clicks>

</div>

</div>
</div>

---
layout: default
---

# PS Tools: The Model

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>**Single HTML file** — no build pipeline, no server, no DevOps</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Deployed via KMS Custom Static Pages — available immediately</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Uses only public Kaltura APIs — fully supported, no hacks</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>**Kaltura authentication built-in** — users log in with their own Kaltura credentials, no shared tokens</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Customer owns the experience end-to-end</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>PS retains the knowledge, can iterate on demand</span></div>

</v-clicks>

</div>

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

<div class="flex flex-col gap-4 mt-4">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>How do you show the customer what was delivered and when?</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>How do you distinguish original commitments from scope growth?</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>How do you give stakeholders a clear view of project health without a Jira login?</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>How do you make scope creep visible — not hidden in a spreadsheet?</span></div>

</v-clicks>

</div>

<v-click>

Standard Jira views weren't built for this kind of customer-facing delivery narrative. **PS built a tool that was.**

</v-click>

---
layout: default
---

# What It Does

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>**Visual deployment timeline** — all 10 deployments on a single interactive timeline</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>**Per-deployment drill-down** — click any deployment to see every Jira ticket it contained</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>**Ticket categorization** — Original Scope · New Requirements · Change Requests · Bugs · Integrations</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>**Scope comparison** — toggle between the actual timeline and the original planned scope</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>**Direct Jira links** — click any ticket to open it in Jira instantly</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>**No login required** — shareable with customers and stakeholders as-is</span></div>

</v-clicks>

</div>

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

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>**Single HTML file** — zero dependencies, no build step, no server, no API calls</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>All project data is **embedded directly in the file** — exported from Jira and hardcoded</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>**No authentication needed** — safe to share with customers and internal stakeholders</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>Color-coded ticket types give instant visual clarity on scope health</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>Original scope vs. actual timeline comparison makes scope creep undeniable — and explainable</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="pink" height="20px" class="flex-none mt-0.5" /><span>Jira deep-links let stakeholders jump from the timeline straight to the ticket</span></div>

</v-clicks>

</div>

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

<div class="flex flex-col gap-4 mt-4">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>Which countries are watching their videos?</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>Which regions drive the most engagement?</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>How do completion rates vary by geography?</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>Group countries into **custom regional presets** — not just standard geography</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>Repeatable, filterable, downloadable — without touching the Kaltura UI</span></div>

</v-clicks>

</div>

<v-click>

Standard Kaltura analytics UI didn't give them this in the format they needed. R&D roadmap couldn't prioritize a customer-specific CSV export. **PS built it instead.**

</v-click>

---
layout: default
---

# What It Does

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>**Authenticate** directly with Kaltura credentials — no manual API tokens</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>**Select account** — auto-discovers all linked Kaltura accounts</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>**Filter** by date range, country/region, and domain</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>**Generate** a country-level report with one click</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>**Download** as CSV — ready for Excel, BI tools, or reporting dashboards</span></div>

</v-clicks>

</div>

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

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>**Single HTML file** — zero dependencies, no build step, no server</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>Deployed to KMS via **Custom Static Pages** module — no DevOps required</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>All calls are **client-side** via CORS-enabled Kaltura endpoints: <code>loginByLoginId</code>, <code>listPartnersForUser</code>, <code>getUrlForReportAsCsv</code> (Report Type 36)</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="red" height="20px" class="flex-none mt-0.5" /><span>Custom dropdown components built to survive **Bootstrap CSS overrides** in KMS</span></div>

</v-clicks>

</div>

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

<div class="flex flex-col gap-4 mt-4">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>Which videos are performing best?</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>How are player impressions and plays trending over time?</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>What is the average completion rate across the library?</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>Exportable data, ready for internal reporting and BI tools</span></div>

</v-clicks>

</div>

<v-click>

The Kaltura Analytics UI is powerful but not designed for bulk export or custom reporting workflows. **PS built a tool that is.**

</v-click>

---
layout: default
---

# What It Does

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>**Authenticate** directly with Kaltura credentials</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>**Select partner** — auto-discovers all linked accounts</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>**Entry Report** — per-video stats across the full content library</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>**Usage Summary** — platform-wide daily or monthly trend data with interactive chart</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>**Download** as CSV — entry report or usage data, Excel-ready</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>**Download chart** as PNG — ready for presentations and reports</span></div>

</v-clicks>

</div>

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

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>**Single HTML file** — zero dependencies, no build step, no server</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>Deployed to KMS via **Custom Static Pages** module</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>Two report types: <code>report/action/getTable</code> (Report Type 1) — per-video analytics; <code>report/action/getGraphs</code> (Report Type 34) — daily/monthly trend data</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>**Chart.js** for in-browser interactive visualization — no backend needed</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>Enriches entry data with <code>baseentry/action/getByIds</code> for metadata (created date, quiz flag, likes)</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="green" height="20px" class="flex-none mt-0.5" /><span>Handles **pagination** automatically — up to 10,000 video entries</span></div>

</v-clicks>

</div>

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

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>**Time to value**: days from idea to live tool, not a quarter</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>**Zero R&D dependency**: PS team owns the full lifecycle</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>**Customer-specific**: built for each customer's workflow, not a generic feature</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>**Reusable pattern**: the same approach works for any PS customer with a data need</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>**Demonstrates PS expertise**: deeper than consulting — we can ship production tools</span></div>

</v-clicks>

</div>

---
layout: default
---

# The Broader Opportunity

<div class="flex flex-col gap-4 mt-2">

<v-clicks>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Every PS team has customers with **data gaps** Kaltura doesn't natively fill</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>Many of those gaps are **solvable with a single API call** and a clean UI</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>PS project managers are closer to these needs than R&D will ever be</span></div>

<div class="flex items-start gap-3"><KShape name="star" color="blue" height="20px" class="flex-none mt-0.5" /><span>A library of PS-built tools becomes a **competitive differentiator**</span></div>

</v-clicks>

</div>

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
