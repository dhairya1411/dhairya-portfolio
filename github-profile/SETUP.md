# GitHub cleanup — full action pack

I reviewed all your repos. Findings first, then the exact steps.

## What I found

| Repo | State | Main gap |
|---|---|---|
| **Profile** | Bio is good, LinkedIn linked | ❌ **No profile README** — the panel at the top of your profile is missing entirely |
| **Policylens** | Strong README | ❌ No description/topics |
| **ISL_Visions** | ✅ README is genuinely good | ❌ No description/topics · messy files |
| **agentic-ai-platform** | README reads like an internal status log | ❌ No description · "Phase 14 has begun" + 15 file paths means nothing to a visitor |
| **Customer-Behavior-Analysis** | Has a description | ⚠️ No topics |
| **dhairya-portfolio** | — | ❌ No description |

**The single most visible problem:** every repo says *"No description, website, or topics provided."*
That's the line a visitor reads first, and right now it appears on all of them.

---

## Step 1 — Profile README (5 min, biggest impact)

GitHub only shows a profile README if it's in a repo named **exactly your username**.

1. **github.com/new**
2. Repository name: **`dhairya1411`** (GitHub shows "✨ You found a secret!" — that confirms it)
3. **Public** · tick **Add a README file** · **Create repository**
4. Open README → **pencil ✏️** → delete everything → paste all of `github-profile/README.md` → **Commit**

Check **github.com/dhairya1411** — it now appears above your pinned repos.

---

## Step 2 — Descriptions + topics (5 min)

For each repo: open it → **⚙️ gear** beside "About" (top right) → paste → **Save changes**.

### Policylens
```
AI that reads your health insurance policy and tells you if a claim is likely covered — every answer citing the exact clause. Built with a 24-scenario eval suite; 0 dangerous errors.
```
Website: `https://policylens-nine.vercel.app`
Topics: `product-management` `llm` `rag` `nextjs` `insurtech` `ai-evals` `groq`

### ISL_Visions
```
Real-time Indian Sign Language recognition — VideoMAE fine-tuned on 262 classes to 91.45% Top-1 accuracy, with a live webcam translator running on CPU.
```
Topics: `computer-vision` `pytorch` `video-transformer` `sign-language` `deep-learning` `huggingface`

### agentic-ai-platform
```
AI workflow automation for software project management — governed LangGraph agents that turn Jira/Slack signals into auditable actions. Architecture and API design complete; runtime in progress.
```
Topics: `langgraph` `agentic-ai` `python` `workflow-automation` `system-design` `llm`

### Customer-Behavior-Analysis
Topics: `data-analysis` `power-bi` `sql` `python` `retail-analytics`

### dhairya-portfolio
```
My product portfolio — case studies, an AI product teardown, and the projects behind them.
```
Website: `https://dhairya-portfolio-beta.vercel.app`
Topics: `portfolio` `nextjs` `product-management`

---

## Step 3 — Replace the agentic-ai-platform README (3 min)

Your current one opens with *"Phase 14 has begun"* and lists 15 documentation file paths. That's a
status update for someone already on the project — a visitor learns nothing about what it does or
why it's built that way.

Open the repo → `README.md` → **pencil ✏️** → replace with
`github-profile/agentic-ai-platform-README.md` → **Commit**.

The rewrite leads with the problem, states the design decisions in a table, shows an architecture
diagram, and — importantly — is **honest that it's unfinished**. An in-progress project with a clear
design story reads far better than one pretending to be complete. The line that does the work:

> *"I'm publishing the design work openly because for this project the design is the interesting part."*

---

## Step 4 — Fix pin order (1 min)

**github.com/dhairya1411** → **Customize your pins**. Visitors read left to right:

1. **Policylens** ← your strongest work; leads with product judgment
2. **agentic-ai-platform** ← shows system-design range
3. **ISL_Visions**
4. **Customer-Behavior-Analysis**

Currently ISL_Visions is first.

---

## Step 5 — Tidy ISL_Visions (3 min)

The README is good; the file list undercuts it. In the repo, delete or rename:

- `Untitled1.ipynb` → rename to something real, e.g. `exploration.ipynb` (or delete)
- `run_local - Copy.py` → delete (a stray copy)
- `Loud.mp4`, `my_test_sign.mp4` → keep only if they're demo clips the README references; otherwise delete

To delete a file: open it → **⋯** menu → **Delete file** → **Commit**.

Also update the stale portfolio link at the bottom of that README:
`dhairya-portfolio-gftv.vercel.app` → `dhairya-portfolio-beta.vercel.app`

---

## Step 6 — Profile links (1 min)

**Edit profile** → Website field currently points to `dhairya-portfolio-gftv.vercel.app`. Update it
to whichever is your live portfolio.

Optional bio (adds the "what I want" signal):
```
Aspiring APM · building AI products with real evals | Product Intern @ Ambak Home Loans | Ex-PolicyBazaar
```

---

## Why this order

Steps 1–3 are 80% of the value: the profile README gives a visitor a reason to care, the descriptions
stop every repo looking abandoned, and the agentic rewrite converts your weakest-reading repo into a
system-design showcase.

A recruiter checking your GitHub isn't reading code. They're answering two questions — *does this
person build things?* and *can they explain what they built?* Right now the answer to the second one
isn't visible anywhere.
