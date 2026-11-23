# Hi, I'm Dhairya 👋

**Aspiring Associate Product Manager.** I work at the point where user research, product data and
AI meet — figuring out where users drop off, why, and what to build to close the gap.

Two product internships — **Ambak Home Loans** (fintech) and **PolicyBazaar for Business** (insurance).
B.Tech CSE, Amity University, 2026.

This GitHub is where I build the things I write specs for. Below is what each project is actually
*about* — not just what's in it.

---

## 💼 Experience

**Product Intern · Ambak Home Loans** · *May – Oct 2026*  
Found sub-20% adoption on the flagship CIBIL feature through funnel analysis, then traced the cause
through 30–40 Relationship Manager interviews: partners were bypassing the app entirely. Redesigned
the app flow and ran a 3-month partner training program — **CIBIL adoption 20% → 60%**, fetch
requests **+40%**.

**Product Intern · PolicyBazaar for Business** · *Dec 2025 – May 2026*  
Renewal reps had no visibility into client claims history. Defined and shipped **Nautica**, an
in-house sales insight platform — **renewal conversions +27%**. Designed WhatsApp/SMS lifecycle
campaigns across 10+ B2B insurance verticals that influenced **₹4.5 Cr** in revenue over 6 months.

---

## 🚀 Featured

### 🔍 [PolicyLens](https://github.com/dhairya1411/Policylens) — *"Is my claim actually covered?"*
An AI product that reads your health insurance policy and answers the only question that matters —
with **every statement citing the exact clause and page** from your own document.

The interesting part isn't the app. It's how it's measured: I defined a **dangerous-error rate**
(saying "covered" when the policy excludes it — the failure that sends someone to file a doomed claim)
and built a **24-scenario eval suite** that fails the build if a single one appears.

> That suite caught my own prompt fix introducing a *new* dangerous error. Root cause was rule
> precedence. Went from 79.2% → **91.7% pass, 0 dangerous errors**.
>
> Then Groq retired the model. The forced migration to GPT-OSS 120B broke a case Llama had right
> (an ongoing diabetic read as *not* pre-existing) — the suite caught it before release. Now
> **24/24 pass, 0 dangerous errors**.

`Next.js` · `GPT-OSS 120B (Groq)` · `RAG + citations` · `eval-driven development`
**[▶ 45-second demo](https://policylens-nine.vercel.app/demo)** · **[Try it live](https://policylens-nine.vercel.app)**

---

### 🤟 [ISL Vision](https://github.com/dhairya1411/ISL_Visions) — real-time Indian Sign Language recognition
Fine-tuned **VideoMAE** (Vision Transformer) on a 262-class ISL dataset to **91.45% Top-1 accuracy** —
about 25 points above CNN-LSTM baselines — then built a real-time translator that runs webcam
inference on CPU and shows the predicted sign with a confidence score.

`PyTorch` · `HuggingFace Transformers` · `OpenCV` · `transfer learning`

---

### 📊 [Customer Behavior Analysis](https://github.com/dhairya1411/Customer-Behavior-Analysis) — 3,900 transactions → decisions
Analysed $233K in retail revenue across Python, PostgreSQL and Power BI. Found male customers driving
**2.1× more revenue** than female, and flagged **839 above-average spenders who still buy on discount**
— a margin-recovery segment — alongside 701 returning buyers as the target for a loyalty program.

`Python` · `Pandas` · `SQL` · `Power BI`

---

## 🧭 How I approach product

- **Start with the failure that actually hurts.** Not all errors are equal. In PolicyLens, a false
  "not covered" costs a phone call; a false "covered" costs someone a rejected claim. That asymmetry
  decided the metric, the guardrails and the UI.
- **A prompt is a code change.** If you change it without a regression suite, you're shipping on vibes.
- **Know when to stop.** Shipping with a logged, safe-direction limitation beats risking a regression
  on the metric that matters.
- **Talk to the people using it.** At Ambak, 30–40 conversations with Relationship Managers revealed
  that partners weren't failing to *understand* the app — it just didn't fit their workflow.

## 🧰 Toolkit

- **Product** — discovery · user research · funnel analysis · PRDs · CRM design · prioritisation
- **Data** — SQL · Python · Power BI · AWS QuickSight · CleverTap
- **Building** — Next.js · LLM APIs · RAG · eval design · prompt engineering

## 📫 Reach me

[Portfolio](https://dhairya-portfolio-gftv.vercel.app) · [LinkedIn](https://www.linkedin.com/in/dhairya-rastogi-a396b2220/) · dhairyarastogi1411@gmail.com

<sub>Open to Associate Product Manager roles · 2026</sub>
