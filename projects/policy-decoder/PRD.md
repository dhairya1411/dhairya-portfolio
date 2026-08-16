# MLP PRD — PolicyLens: Policy Decoder + Claim-Readiness Checker

**Author:** Dhairya Rastogi
**Status:** Draft v1 (MLP)
**Last updated:** July 2026
**Product type:** AI-native consumer web app (built with Claude/Cursor → Next.js, no hand-coding)

> **MLP = Minimum Lovable Product.** Not the smallest thing we can ship — the smallest thing a real
> policyholder would actually *love* and tell a friend about. The lovable core here is **confidence
> before a claim**: "Will this be covered, and what do I need?"

---

## 1. One-liner

**PolicyLens turns a confusing health insurance policy PDF into a plain-language answer to the only question that matters: "Is my situation covered, and what do I need to claim it?" — with every answer citing the exact clause.**

---

## 2. The problem (real user problem + the manual "before")

People buy health insurance and then have **no idea what they're actually covered for** until they're in a stressful moment — a hospitalization — and by then it's too late to fix a gap.

**The manual "before" (what a user does today):**
- Opens a 30–60 page policy PDF full of legal and medical jargon.
- Ctrl+F for words they half-remember ("room rent", "cashless", "waiting period") and still misreads them.
- Calls a busy agent or a call center and gets a vague, unverifiable answer.
- Files a claim hoping it works → **gets rejected for an exclusion or missing document they never knew about.**

Claim rejection in India is common and almost always avoidable with information the user technically already *has* (it's in their policy) but cannot *access*. **The gap is comprehension and retrieval, not data.**

### Why now (10-year runway)
- InsurTech penetration and digital policy issuance are compounding; every new policyholder is a potential user.
- LLMs finally make clause-grounded reading of long documents cheap and reliable enough to trust — *if* engineered with citations and guardrails (which is exactly the PM skill this project demonstrates).

---

## 3. Target user

**Primary (MLP):** An individual policyholder or a family member managing the policy — non-expert, anxious, usually looking things up *right before or during* a claim.

**Personas:**
- **"Pre-claim Priya"** — father hospitalized, needs to know in 10 minutes if it's covered and what to carry to the hospital desk.
- **"Just-bought Rohan"** — bought a policy, wants to sanity-check what he actually got before he needs it.

**Explicitly not the MLP user:** insurance agents/advisors (B2B mode is a future phase).

---

## 4. Goals & non-goals

### Goals (MLP)
1. Let a user upload a health policy and get a trustworthy, plain-language summary.
2. Let a user describe a real-life scenario and get a **claim-readiness verdict**: likely covered / not / unclear, + why, + document checklist, + rejection risks.
3. Make every answer **verifiable** — cite the clause/section/page it came from.
4. Never fabricate coverage. When unsure, say so.

### Non-goals (MLP)
- ❌ Not filing or submitting claims.
- ❌ Not giving a coverage *guarantee* (only the insurer decides).
- ❌ Not legal, medical, or financial advice.
- ❌ Not comparing/recommending which policy to buy (different product).
- ❌ Not covering motor, life, or travel insurance in v1 — health only.
- ❌ No login/accounts, no payments, no multi-policy vault in v1.

---

## 5. MLP feature set

### P0 — must-have (the lovable core)
| # | Feature | What it does |
|---|---------|--------------|
| P0.1 | **Upload policy** | User uploads a health policy PDF. App validates it's a health policy document. |
| P0.2 | **Policy Decoder** | Plain-language snapshot: what's covered, key exclusions, waiting periods, sub-limits/room-rent caps, co-pay, and 5 "things to know". |
| P0.3 | **Claim-Readiness Check** *(the wedge)* | User types a scenario in plain English → verdict (Likely covered / Not covered / Unclear), the exclusions/conditions that apply, a **document checklist**, and **top rejection risks**. |
| P0.4 | **Clause citations** | Every claim in P0.2 and P0.3 links to the exact clause/section/page from *their* PDF. No citation → the statement is not shown. |

### P1 — nice-to-have (only after P0 is loved)
- Save a policy to revisit (needs accounts).
- Compare two policies side-by-side.
- "Ask a follow-up" chat on the same policy.
- Daily/renewal reminders and waiting-period countdowns.
- Agent-assisted (B2B) mode.

---

## 6. User flow (MLP)

1. **Land** → one-line value prop + "Upload your policy" + a sample policy to try (removes the cold-start problem for demos).
2. **Upload** PDF → app extracts text, confirms it's a health policy, shows a "Reading your policy…" state.
3. **Decoder view** → plain-language summary with citations; each point expandable to the source clause.
4. **Claim-Readiness** → user types a scenario (or picks a common preset like "planned surgery", "accident damage", "theft").
5. **Verdict card** → Likely covered / Not / Unclear + reasoning + document checklist + rejection risks, all cited.
6. **Disclaimer + feedback** → "This is guidance, not a coverage guarantee" + thumbs up/down + "was this what your insurer said?" (feeds evals + real-user data).

---

## 7. AI workflow (input → processing → output → human review)

**Input:** policy PDF + (optional) a free-text scenario.

**Processing:**
1. **Extract** — parse PDF to text; OCR fallback for scanned policies; confirm it's a health policy.
2. **Structure** — chunk by section; tag chunks (coverage / exclusion / waiting period / limit / co-pay / definition).
3. **Retrieve (RAG)** — for a scenario, retrieve the most relevant clauses (coverage + matching exclusions + conditions).
4. **Reason** — LLM answers *only from retrieved clauses*, forced to attach a citation to each statement and to output "Unclear" when clauses don't decisively cover the scenario.
5. **Format** — verdict card + checklist + risks.

**Output:** cited summary + claim-readiness verdict.

**Human review (in-product):** user confirms/denies via feedback; "unclear" verdicts nudge the user to call the insurer with the exact clause in hand — turning uncertainty into a safe action instead of a wrong answer.

---

## 8. Evals — how we know the output is good (this is the PM job)

**Definition of a good vs bad output**

- ❌ **Bad:** "Yes, dengue hospitalization is covered." (confident, ungrounded, no conditions, no docs)
- ✅ **Good:** "Likely covered — inpatient hospitalization >24 hrs is covered under Sec 3.1 (p.7). *But* the 30-day initial waiting period (Sec 4.2, p.9) applies; your policy started 12 days ago, so this may be **rejected**. Documents needed: admission note, final bill, discharge summary, diagnostic reports."

**Eval dimensions (scored 1–5 on a fixed test set):**
| Dimension | Question |
|-----------|----------|
| Grounding | Is every statement backed by a real clause in *this* policy? |
| Citation accuracy | Does the cited clause actually say what we claim? |
| Exclusion recall | Did we catch the exclusions/waiting periods that apply? (most important — misses cause rejections) |
| Calibration | Does it correctly say "Unclear" instead of guessing? |
| Completeness | Document checklist + rejection risks present and correct? |
| Clarity | Would a non-expert understand it? |

**Eval sheet:** a spreadsheet of ~20–30 real scenarios × known-correct answers (built from sample policies + public claim FAQs). Each build run is scored; we track a **"dangerous error rate"** (said covered when it's actually excluded) as the north-star quality metric — target **0**.

---

## 9. Failure modes (where it breaks / hallucinates)

1. **False "covered"** — says covered while an exclusion/waiting-period applies → the worst case (user files, gets rejected). Highest priority to prevent.
2. **Missed exclusion** — summary omits a critical exclusion or sub-limit.
3. **Wrong citation** — attaches a real-sounding but incorrect clause.
4. **Scanned/garbled PDF** — OCR errors corrupt the source text.
5. **Ambiguous scenario** — user input too vague to judge.
6. **Out-of-scope PDF** — user uploads a non-policy document.

## 10. Guardrails & fallbacks

- **No citation → no claim.** Statements without a source clause are suppressed.
- **Bias toward "Unclear."** When clauses don't decisively resolve it, return Unclear + "confirm with insurer, here's the exact clause to reference" — never a confident guess.
- **Persistent disclaimer:** "Guidance only — your insurer makes the final coverage decision. Not legal/medical advice."
- **Exclusion-first prompting:** the model must actively search for exclusions/waiting periods before returning a "covered" verdict.
- **Bad-input fallbacks:** low-confidence OCR → warn "this looks like a scanned copy, results may be less reliable"; non-policy PDF → "this doesn't look like a policy document."
- **No medical/legal advice:** refuses diagnosis or legal interpretation, redirects to professionals.

---

## 11. Success metrics (what it saves/improves)

**User metrics (MLP):**
- **Answer-trust rate** — % of verdicts users mark "matches what my insurer said / useful." Target ≥ 70%.
- **Time-to-answer** — from upload to first verdict. Target < 60s.
- **Task completion** — % who go upload → get a claim-readiness verdict.

**Quality metric (north star):**
- **Dangerous error rate** — verdicts that say "covered" when actually excluded. Target **0** on the eval set.

**Business/impact framing (for the portfolio story):**
- Avoidable claim rejections prevented; "₹X potential claim protected" per user.
- Pull-quote goal: *"I gave PolicyLens to 10 people, it caught a waiting-period gap 3 of them didn't know about."*

---

## 12. Tech approach (AI-built, no hand-coding)

- **Frontend/app:** Next.js (App Router) generated via Claude/Cursor — reuses your existing Vercel deploy pattern.
- **PDF handling:** text extraction + OCR fallback for scans.
- **Retrieval:** chunk + embed policy clauses; RAG retrieval per query (keeps answers grounded in the user's own document, not the model's memory).
- **Model:** an LLM via API for structuring + reasoning, prompted for mandatory citations and exclusion-first checking.
- **No accounts / no DB in v1** — process in-session; privacy-friendly (policies are sensitive) and simpler to ship.
- **Deploy:** Vercel.

## 13. Build sequence & milestones

Scope is **health insurance only** — kept deliberately narrow so the MLP ships well and the evals/guardrails are tight:

- **M1 — Decoder + citations** (core extraction, plain-language summary, clause linking).
- **M2 — Claim-readiness** (scenario → verdict + checklist + risks; exclusion-first guardrails).
- **M3 — Eval harness** (20–30 scenario test set; track dangerous-error rate).
- **M4 — Polish + deploy + sample policy** for cold-start-free demos.
- **M5 — Real users** (see §14).

## 14. Portfolio artifacts (per the "AI-PM in 2026" bar)

1. **Working demo** — live Vercel URL, with a built-in sample policy so anyone can try it instantly.
2. **Loom video** — 3–4 min: problem → live walk-through → how evals/guardrails work → what real users said.
3. **Eval sheet** — the scenario test set with scores and the dangerous-error-rate trend.
4. **Real-user feedback log** — give it to 8–10 people (friends/family with real policies), record: what they liked, where they got confused, which output they didn't trust, what you changed after. **Stretch flex:** get one person to say they'd pay for it.

## 15. Risks & open questions

- **Liability tone** — must stay firmly "guidance, not guarantee." (Resolved via guardrails, but keep vigilant.)
- **Policy-format variety** — insurers structure PDFs differently; extraction robustness is the main technical risk → mitigate by testing on 3–4 real insurers' policies early.
- **Privacy** — policies contain PII; in-session processing + no storage for v1.
- **Open:** which 3–4 insurers' sample policies to use as the initial test corpus? (Decide at M1.)

---

### Appendix — the "7 things" checklist (video framework), mapped
1. Real user problem → §2 · 2. Manual before → §2 · 3. AI workflow → §7 · 4. Evals → §8 · 5. Failure modes → §9 · 6. Guardrails/fallback → §10 · 7. Business/user metric → §11.
Plus the 4 required artifacts → §14.
