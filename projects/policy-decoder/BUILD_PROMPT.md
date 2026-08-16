# PolicyLens — Build Prompt for Claude Code / Cursor

> Paste everything under the line into Claude Code or Cursor (Composer/Agent mode) inside your
> empty project folder. Build **milestone by milestone** — don't accept all of it in one shot.
> After each milestone, run it, click through it, and only then move on.

---

## ROLE & CONTEXT

You are a senior full-stack engineer. Build a production-quality web app called **PolicyLens**.

**What it does:** A user uploads their **health insurance policy PDF**. The app (1) explains the policy in plain language, and (2) answers "is my situation covered and what do I need to claim it?" — with **every statement citing the exact clause from the user's own PDF**. It never invents coverage; when unsure it says "Unclear."

**Primary user:** an anxious, non-expert policyholder checking coverage right before or during a claim.

**This is health insurance only.** No motor/life/travel.

## TECH STACK (use exactly this)

- **Next.js 14 (App Router) + React 18**, JavaScript (not TypeScript), plain CSS modules or a single global stylesheet — no Tailwind config needed.
- **PDF text extraction:** `pdf-parse` (or `pdfjs-dist`) server-side. Add an OCR fallback stub (detect low/no text and warn the user it's a scanned copy) — full OCR can come later.
- **LLM:** Anthropic Claude via `@anthropic-ai/sdk`, model from env var `ANTHROPIC_MODEL` (default a current Claude model). API key in `ANTHROPIC_API_KEY` (server-side only, never exposed to client).
- **Retrieval (RAG):** chunk the policy by section; for a scenario query, do lightweight in-memory similarity retrieval (embeddings if easy, otherwise keyword+heading scoring is fine for MLP) and pass only the top relevant chunks to the model.
- **No database, no auth, no accounts.** Process everything in-session/in-memory. Policies are sensitive — do not persist user PDFs to disk or any store.
- **Deploy target:** Vercel. Include a `.env.example`.

## HARD RULES (these define the product — do not skip)

1. **No citation → no claim.** Every statement in the summary and every part of a verdict MUST reference a specific clause/section/page from the uploaded PDF. If the model can't ground a statement, drop it.
2. **Bias toward "Unclear."** If the retrieved clauses don't decisively resolve a scenario, return **Unclear** + "confirm with your insurer — here's the exact clause to quote," never a confident guess.
3. **Exclusion-first.** Before returning "Likely covered," the model must actively check for exclusions, waiting periods, sub-limits, and co-pay that apply. Missing an exclusion is the worst failure.
4. **Persistent disclaimer** on every result: "Guidance only — your insurer makes the final coverage decision. Not legal or medical advice."
5. **Refuse** medical diagnosis or legal interpretation; redirect to a professional.

## FEATURES — BUILD IN THIS ORDER

### Milestone M1 — Decoder + citations
- Landing page: one-line value prop, an **Upload PDF** control, and a **"Try a sample policy"** button (bundle one sample health policy PDF in `/public` so the app is demoable with zero setup).
- On upload: extract text server-side, confirm it looks like a health policy (else show a friendly "this doesn't look like a health policy" message).
- **Decoder view** — a plain-language snapshot with these cards, each point expandable to show the **source clause + section/page**:
  - What's covered
  - Key exclusions
  - Waiting periods
  - Sub-limits / room-rent caps / co-pay
  - "5 things to know"
- Loading state ("Reading your policy…"). Handle errors gracefully.

### Milestone M2 — Claim-Readiness Check
- Below the decoder: a text box "Describe your situation" + 3 preset chips (e.g. "planned surgery", "hospitalized 2 nights", "pre-existing condition").
- On submit → retrieve relevant clauses → produce a **Verdict Card**:
  - Verdict: **Likely covered / Not covered / Unclear** (color-coded).
  - Why: reasoning, each point citing a clause.
  - **Documents needed** checklist.
  - **Top rejection risks** (waiting period not met, exclusion applies, sub-limit, etc.).
- Enforce the Hard Rules above in the system prompt.

### Milestone M3 — Feedback hook (small)
- Thumbs up/down + optional "did this match what your insurer said?" on each verdict. Log to console / a simple in-memory list for now (this feeds the eval sheet later).

## LLM OUTPUT CONTRACT

Have the model return **structured JSON** (not free text) that the UI renders, e.g.:
```json
{
  "verdict": "Likely covered | Not covered | Unclear",
  "reasoning": [{ "point": "...", "clause": "Sec 3.1", "page": 7 }],
  "documents": ["..."],
  "rejection_risks": [{ "risk": "...", "clause": "Sec 4.2", "page": 9 }],
  "confidence": "high | medium | low"
}
```
If `confidence` is low or no clauses ground the answer, force `verdict = "Unclear"`.

## UI / QUALITY BAR

- Clean, calm, trustworthy design (this is a stressful moment for the user). Mobile-friendly.
- Never show a raw model dump — always the structured cards.
- Show citations as small, tappable references that reveal the exact clause text.

## DELIVERABLES

- Running `npm run dev` app.
- `README.md` with setup + `.env.example` (`ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`).
- One bundled sample health policy PDF in `/public` for instant demos.

Start with **M1 only**. Show me the file structure you plan to create first, then build it.
