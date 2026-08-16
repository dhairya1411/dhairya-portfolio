# Context handoff — paste this into a new chat

## Who / goal
I'm Dhairya Rastogi, targeting **Associate Product Manager (APM)** roles, 2026. Currently Product
Intern at Ambak Home Loans (fintech), previously PolicyBazaar for Business (insurance). B.Tech CSE,
Amity University 2026.

**Hard constraint: I don't pay for anything.** Free tiers only — no paid APIs, no subscriptions.
Flag it upfront if something has no free path.

## Connected folders
- `C:\Users\dhair\OneDrive\Desktop\dhairya-portfolio` — portfolio site (Next.js) + all project docs
- `D:\PolicyLens` — the PolicyLens app

## Strategy (from two YouTube videos I'm following)
1. **PM portfolio must match the role level** (APM ≠ senior PM) and stay in one target industry.
2. **AI-PM projects in 2026 beat case studies.** Every project needs: real user problem, the manual
   "before", AI workflow, **evals**, failure modes, guardrails, business metric — plus 4 artifacts:
   working demo, video, eval sheet, real-user feedback.

Plan: **4 AI-PM projects**. Chosen: PolicyLens ✅ · Return-Reason Intelligence · Spend-Leak Detector ·
Lab Report Explainer.

---

## Project 1 — PolicyLens ✅ essentially done

Health insurance policy → plain-English decoder + **Claim-Readiness Check** ("is my claim covered?"),
every statement citing the exact clause + page.

- **Live:** https://policylens-nine.vercel.app · **Demo:** /demo · **Repo:** github.com/dhairya1411/Policylens
- **Stack:** Next.js 14, Groq (llama-3.3-70b-versatile, free), `unpdf` for PDF extraction
- **Eval results (verified):** v1 79.2% pass / 1 dangerous error → v2 fix *backfired* (new dangerous
  error, rule-precedence bug) → **v3: 91.7% pass, 0 dangerous errors**
- North-star metric: **dangerous-error rate** = said "Likely covered" when actually excluded. Target 0.
- Known limitation (deliberate): 2 scenarios read a monetary cap as a denial. Both fail **safe**;
  chose not to chase them after v2 proved further edits can introduce dangerous errors.
- **Groq free tier ≈ one full 24-scenario eval per day.** `npm run eval:smoke` = 6-scenario subset.

**Files:** `D:\PolicyLens\eval\` (eval workbook, runner, results) ·
`dhairya-portfolio\projects\policy-decoder\` (PRD, CASE_STUDY, LOOM_SCRIPT, BUILD_PROMPT)

**Still open:** real-user testing (8–10 people, protocol in `eval\User_Feedback_Log.xlsx`) ·
optional Loom recording.

---

## GitHub cleanup — IN PROGRESS, this is the current task

Everything is already written in **`dhairya-portfolio\github-profile\`**:
- `SETUP.md` — the 6 steps with exact text to paste
- `README.md` — my profile README (needs a repo named exactly `dhairya1411`)
- `agentic-ai-platform-README.md` — rewrite of that repo's README

**Findings:** every repo shows *"No description, website, or topics provided."* No profile README
exists. ISL_Visions has a good README but messy files. agentic-ai-platform's README reads like an
internal status log ("Phase 14 has begun" + 15 doc paths).

**Important:** the GitHub connector is **read-only** — `create_repository` and `create_or_update_file`
both return `403 Resource not accessible by integration`. So:
- Repo file changes → do them via **git** (clone → I edit → I push)
- Descriptions, topics, pins, creating the profile repo → **GitHub web UI** (can't be done via git anyway)

**My repos:** Policylens · ISL_Visions · agentic-ai-platform (unfinished) ·
Customer-Behavior-Analysis · dhairya-portfolio

---

## After GitHub: start project #2

Recommended: **Return-Reason Intelligence** (e-commerce) — seller return/refund reasons → clustered
root causes with quoted evidence → specific catalog fixes. Chosen because it's a different product
*shape* from PolicyLens (messy feedback → decisions, vs document → answer), so the portfolio shows range.

Same rhythm as PolicyLens: **PRD first → build prompt → M1 → evals → deploy.**

## How I like to work
- Give me exact commands to run; I'm on **Windows PowerShell** (`&&` doesn't work — separate lines).
- Verify things actually work rather than assuming.
- Be honest when something's broken or when a number isn't proven yet.
