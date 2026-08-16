# PolicyLens — Case Study

**Role:** Product (solo) · **Built with:** Next.js, Groq (Llama 3.3), no-code-to-code via AI
**Live:** _[add Vercel URL]_ · **Repo:** github.com/dhairya1411/policylens

---

## The problem

People buy health insurance and then have no idea what they're actually covered for until they're
in a hospital corridor — and by then it's too late to fix a gap.

The information isn't missing. It's sitting in a 30–60 page policy PDF the customer already owns,
written in language they can't parse. So they do one of three things: Ctrl+F for a term they
half-remember, call an agent and get a vague answer, or file the claim and hope. Claim rejections
in India are commonly caused by exclusions and waiting periods the policyholder never knew existed.

**The gap is comprehension and retrieval, not data.**

## What I built

**PolicyLens** turns a health policy PDF into an answer to the only question that matters:
*"Is my situation covered, and what do I need to claim it?"*

1. **Decoder** — plain-language snapshot: what's covered, exclusions, waiting periods, sub-limits
   and co-pay, plus the 5 things this policyholder should actually remember.
2. **Claim-Readiness Check** (the wedge) — the user describes a real situation in plain words and
   gets a verdict (*Likely covered / Not covered / Unclear*), the documents they'll need, and the
   specific risks that could get the claim rejected.

**Every single statement cites the exact clause, page and verbatim quote from the user's own PDF.**
If the model can't ground a statement, the statement doesn't get shown.

## The decision that shaped the product

The obvious build was "explain my policy" — but that's becoming a commodity; any chatbot does it.
I made the **claim-readiness check** the headline instead, because that's the moment the user is
actually anxious and the moment a wrong answer costs them money. The decoder became supporting
context rather than the product.

## Designing for the failure that matters

Most AI products treat all errors as equal. Here they aren't:

- Saying *"not covered"* when it is → the user calls their insurer. Annoying, recoverable.
- Saying *"covered"* when it's excluded → **the user files a claim that gets rejected.** That's the
  failure that damages someone.

So I defined a single north-star quality metric — **dangerous-error rate**: the share of scenarios
where the tool says "Likely covered" but the policy actually excludes it. **Target: zero.**

Guardrails built around that:

| Guardrail | Why |
|---|---|
| No citation → no claim | Kills ungrounded assertions at the source |
| Exclusion-first, gated evaluation | Waiting periods and exclusions are checked before coverage is asserted |
| Low confidence → forced "Unclear" | Enforced in the prompt *and* server-side, so the UI can't render a confident guess |
| "Unclear" routes to action | Tells the user the exact clause to quote to their insurer, instead of guessing for them |
| In-session only, no storage | Policies contain PII |

## Measuring it: the eval set

I built a **24-scenario eval set**, every expected answer grounded in a real clause of a sample
policy — waiting periods, pre-existing disease, sub-limits, co-pay, exclusions *and their exceptions*,
plus a deliberately vague case that must return "Unclear."

Then I automated it: `npm run eval` runs all 24 against the **live API** (not a copy of the prompt,
so prompt drift is caught), scores each, and **exits with a failure code if any dangerous error
exists** — turning the eval into a literal ship/no-ship gate.

## What the evals actually found

**v1 — baseline: 79.2% pass, 1 dangerous error.**
The tool told a user that medicines bought **75 days after discharge** were covered. The policy caps
post-hospitalisation at **60 days**. It had even cited the right clause — it just never compared the
two numbers.

Two systematic root causes, not one-offs:
- **A sub-limit was being read as a denial.** A ₹2,000 ambulance cap on a ₹3,500 bill returned
  "Not covered." A cap reduces the payout; the claim is still covered.
- **Time windows were never compared.** With the numbers on the page, it retreated to "Unclear"
  rather than doing the arithmetic.

**v2 — the fix backfired.** I added a decision procedure with mandatory arithmetic. It fixed four
cases and **introduced a new dangerous error**: for cataract surgery on an 18-month-old policy
(24-month waiting period), the model combined "there's a sub-limit" with "caps don't mean denial"
and concluded *covered* — never checking that 18 < 24. It also started blocking accident claims
inside the initial waiting period, because I'd never told it waiting periods have exceptions.

**Root cause: rule precedence, not reasoning.** I'd given the model rules without an order.

**v3 — restructured into five sequential gates**, where a later gate can never overturn an earlier
one: covering clause → waiting periods (*exceptions checked first*) → expense time windows →
exclusions → limits. The "a cap is not a denial" rule now only applies to claims that already
passed the first four gates.

**Verified: 91.7% pass (22/24), dangerous-error rate 0.0%.** It fixed both v2 regressions *and* v1's
original dangerous error, without introducing new ones. Exclusions 8/8, waiting periods 5/5, and the
deliberately vague scenario still correctly returns "Unclear."

## Knowing when to stop

Two scenarios still fail: a deluxe room above the room-rent cap, and a ₹3,500 ambulance bill against a
₹2,000 cap. The model reads a **monetary cap as a denial** rather than a reduced payout — it cites the
right clause, but labels the verdict too conservatively.

I chose not to fix them. Both fail in the **safe direction**: a user is told to verify rather than sent
to file a claim that gets rejected. v2 had already shown that another prompt edit can introduce a
*dangerous* error, and each full eval costs a day of free-tier quota. Shipping with a logged, safe-direction
limitation beat risking a regression on the metric that actually matters.

## What I'd tell a hiring manager

The interesting part isn't that I shipped an AI app in a weekend. It's that **my own fix introduced
a new dangerous error and I caught it** — because every prompt change re-runs the same 24 scenarios.
A prompt is a code change; without a regression suite you're shipping on vibes.

## What's next

- Real-user testing with 8–10 policyholders using their own policies
- Feedback capture in-product to grow the eval set from real usage
- Multi-policy comparison; renewal and waiting-period countdown reminders

## Stack & constraints

Next.js 14 (App Router), Groq (Llama 3.3 70B), server-side PDF extraction with per-page tagging for
citations. Built entirely on free tiers — no paid services. Built with AI assistance rather than
hand-written code, which was the point: the work here is problem definition, guardrail design and
measurement, not typing.
