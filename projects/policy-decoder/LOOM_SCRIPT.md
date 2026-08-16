# PolicyLens — Loom script (~3 min)

**Setup before recording:** dev server or live site open on the landing page · eval workbook open in
another tab (Run Log sheet) · terminal ready with `npm run eval` already scrolled to the scorecard.
Record 1080p, camera bubble on. Don't script it word-for-word — these are beats, say them naturally.

---

## 0:00–0:25 · The problem (no screen share yet, just you)

> "Most people find out what their health insurance *doesn't* cover while they're standing at a
> hospital counter. And the strange part is — the information was never hidden. It's in the 40-page
> policy PDF they already own. They just can't read it.
>
> So the gap isn't data, it's comprehension. That's what I built PolicyLens for."

## 0:25–1:10 · The demo (share screen)

Click **Try a sample policy**.

> "You upload your policy and get the things that actually trip people up — exclusions, waiting
> periods, sub-limits, co-pay — in plain English."

**Click one citation chip to expand the quote.**

> "And every single line cites the exact clause and page from *your* document. If the model can't
> ground a statement in a real clause, the statement doesn't get shown at all."

Scroll to **Check a claim**, type: *"Hospitalised 2 nights for dengue, policy is 15 days old."*

> "But the real question people have isn't 'what does my policy say' — it's 'am I covered right now.'"

**When the verdict lands:**

> "It flags the 30-day initial waiting period — cited — tells you the documents you'd need, and the
> specific risks that get claims rejected."

## 1:10–2:10 · The part that matters (the PM work)

> "Here's the thing that shaped every decision. Not all errors are equal in this product.
>
> If it says 'not covered' when you actually are — annoying, you call your insurer.
> If it says **'covered' when you're actually excluded** — you file a claim, and it gets rejected.
> That one costs someone real money.
>
> So I made that my north-star metric: a **dangerous-error rate**, target zero."

**Switch to the eval workbook / terminal.**

> "I built 24 test scenarios, every expected answer grounded in a real clause — waiting periods,
> pre-existing disease, sub-limits, exclusions and their exceptions, plus one deliberately vague case
> that *must* return 'Unclear.'
>
> It runs against the live API, not a copy of the prompt, so prompt drift gets caught. And it exits
> with a failure code if any dangerous error exists — the eval is literally the ship gate."

**Show the Run Log.**

> "First run: 79% pass, one dangerous error. It told a user that medicines bought 75 days after
> discharge were covered — the policy caps it at 60. It had even cited the right clause. It just
> never compared the two numbers."

## 2:10–2:45 · The honest bit (this is the differentiator — do not cut it)

> "So I fixed it. And my fix **introduced a new dangerous error.**
>
> For cataract surgery on an 18-month-old policy — 24-month waiting period — the model saw there was
> a sub-limit, applied my new rule that 'a cap doesn't mean denial,' and called it covered. It never
> checked 18 against 24.
>
> The root cause wasn't reasoning, it was **rule precedence**. I'd given the model rules without an
> order. So I restructured it into five sequential gates where a later gate can never overturn an
> earlier rejection.
>
> And I only caught that because every prompt change re-runs the same 24 scenarios. A prompt is a
> code change. Without a regression suite you're shipping on vibes."

## 2:45–3:00 · Close

> "Built on free tools in a weekend, no hand-written code — because the work here wasn't the coding.
> It was deciding which failure actually hurts the user, and then measuring it.
>
> Link's in the description if you want to try it with your own policy."

---

## Delivery notes

- **Slow down on the 2:10 section.** It's counterintuitive to volunteer your own mistake, and it's
  exactly why this lands. Anyone can demo a working app; almost nobody can say "my fix broke
  something and here's how I knew."
- Don't apologise for the regression or call it embarrassing. Deliver it as a finding.
- If a live demo risks failing (API quota), record the demo portion separately when it's working
  and stitch, or fall back to a screen recording you made earlier. Never record a broken demo live.
- Keep it under 3:30. Recruiters stop watching.

## Where to use it

- Embedded on the portfolio case study
- LinkedIn post (the regression story is the hook — lead with "my own fix introduced a bug")
- Sent with applications where a link is allowed
