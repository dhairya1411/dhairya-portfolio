import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

export const metadata = {
  title: "PolicyLens — Case Study · Dhairya Rastogi",
  description:
    "How I defined dangerous-error rate as a north-star metric, built a 24-scenario eval suite, and caught my own fix introducing a new dangerous error.",
};

export default function PolicyLensCaseStudy() {
  return (
    <>
      <SiteNav active="work" />
      <main id="top">
        <section className="page-head">
          <div className="container">
            <a className="back-link mono" href="/work">← All work</a>
            <div className="eyebrow mono">Case study · InsurTech</div>
            <h1 className="page-title">
              PolicyLens — &ldquo;Is my claim actually covered?&rdquo;
            </h1>
            <p className="page-sub">
              A health-insurance policy decoder where the interesting work wasn&apos;t the
              app — it was deciding which failure was unacceptable, and building the
              measurement that proved it never happened.
            </p>
            <div className="cs-meta">
              <div>
                <span className="k mono">Role</span>
                <p>Solo — problem, build, evals, ship</p>
              </div>
              <div>
                <span className="k mono">Stack</span>
                <p>Next.js 14 · Llama 3.3 70B · server-side PDF extraction</p>
              </div>
              <div>
                <span className="k mono">Constraint</span>
                <p>Free tiers only — no paid services</p>
              </div>
            </div>
            <div className="cs-links">
              <a
                className="cs-link cs-link-primary"
                href="https://policylens-nine.vercel.app"
                target="_blank"
                rel="noopener"
              >
                Try it live →
              </a>
              <a
                className="cs-link"
                href="https://policylens-nine.vercel.app/demo"
                target="_blank"
                rel="noopener"
              >
                45-second demo
              </a>
              <a
                className="cs-link"
                href="https://github.com/dhairya1411/Policylens"
                target="_blank"
                rel="noopener"
              >
                Code &amp; eval suite
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose">
            <h2>The problem</h2>
            <p>
              People buy health insurance and then have no idea what they&apos;re covered
              for until they&apos;re standing in a hospital corridor — by which point it&apos;s
              too late to fix a gap.
            </p>
            <p>
              The information isn&apos;t missing. It&apos;s sitting in a 30–60 page policy PDF
              the customer already owns, written in language they can&apos;t parse. So they
              Ctrl+F for a half-remembered term, call an agent and get a vague answer, or
              file the claim and hope. Rejections are commonly caused by exclusions and
              waiting periods the policyholder never knew existed.
            </p>
            <p className="callout">
              The gap is comprehension and retrieval, not data.
            </p>

            <h2>What I built</h2>
            <p>
              PolicyLens turns a policy PDF into an answer to the only question that
              matters: <em>is my situation covered, and what do I need to claim it?</em>
            </p>
            <ul>
              <li>
                <strong>Decoder</strong> — a plain-language snapshot: what&apos;s covered,
                exclusions, waiting periods, sub-limits and co-pay.
              </li>
              <li>
                <strong>Claim-Readiness Check</strong> — the user describes a real
                situation in their own words and gets a verdict, the documents
                they&apos;ll need, and the specific risks that could get the claim
                rejected.
              </li>
            </ul>
            <p>
              Every statement cites the exact clause, page and verbatim quote from the
              user&apos;s own PDF. If the model can&apos;t ground a statement, the statement
              isn&apos;t shown.
            </p>

            <h2>The decision that shaped the product</h2>
            <p>
              The obvious build was &ldquo;explain my policy&rdquo; — but that&apos;s a
              commodity now; any chatbot does it. I made the{" "}
              <strong>claim-readiness check</strong> the headline instead, because
              that&apos;s the moment the user is actually anxious and the moment a wrong
              answer costs them money. The decoder became supporting context rather than
              the product.
            </p>

            <h2>Designing for the failure that matters</h2>
            <p>Most AI products treat all errors as equal. Here they aren&apos;t:</p>
            <ul>
              <li>
                Saying <em>&ldquo;not covered&rdquo;</em> when it is → the user calls
                their insurer. Annoying, recoverable.
              </li>
              <li>
                Saying <em>&ldquo;covered&rdquo;</em> when it&apos;s excluded →{" "}
                <strong>the user files a claim that gets rejected.</strong> That&apos;s
                the failure that damages someone.
              </li>
            </ul>
            <p>
              So I defined one north-star quality metric —{" "}
              <strong>dangerous-error rate</strong>, the share of scenarios where the tool
              says &ldquo;Likely covered&rdquo; but the policy excludes it.{" "}
              <strong>Target: zero.</strong>
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Guardrail</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No citation → no claim</td>
                    <td>Kills ungrounded assertions at the source</td>
                  </tr>
                  <tr>
                    <td>Exclusion-first, gated evaluation</td>
                    <td>Waiting periods and exclusions are checked before coverage is asserted</td>
                  </tr>
                  <tr>
                    <td>Low confidence → forced &ldquo;Unclear&rdquo;</td>
                    <td>Enforced in the prompt and server-side, so the UI can&apos;t render a confident guess</td>
                  </tr>
                  <tr>
                    <td>&ldquo;Unclear&rdquo; routes to action</td>
                    <td>Tells the user the exact clause to quote to their insurer</td>
                  </tr>
                  <tr>
                    <td>In-session only, no storage</td>
                    <td>Policies contain personal information</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Measuring it</h2>
            <p>
              I built a <strong>24-scenario eval set</strong>, every expected answer
              grounded in a real clause of a sample policy — waiting periods, pre-existing
              disease, sub-limits, co-pay, exclusions <em>and their exceptions</em>, plus a
              deliberately vague case that must return &ldquo;Unclear.&rdquo;
            </p>
            <p>
              Then I automated it. <code>npm run eval</code> runs all 24 against the{" "}
              <strong>live API</strong> — not a copy of the prompt, so drift is caught —
              scores each, and exits with a failure code if any dangerous error exists.
              The eval is a literal ship / no-ship gate.
            </p>

            <h2>What the evals actually found</h2>
            <h3>v1 — 79.2% pass, 1 dangerous error</h3>
            <p>
              The tool told a user that medicines bought <strong>75 days</strong> after
              discharge were covered. The policy caps post-hospitalisation at{" "}
              <strong>60 days</strong>. It had even cited the right clause — it just never
              compared the two numbers.
            </p>
            <p>Two systematic causes, not one-offs:</p>
            <ul>
              <li>
                A <strong>sub-limit was being read as a denial</strong>. A ₹2,000 ambulance
                cap on a ₹3,500 bill returned &ldquo;Not covered.&rdquo; A cap reduces the
                payout; the claim is still covered.
              </li>
              <li>
                <strong>Time windows were never compared.</strong> With both numbers on the
                page, it retreated to &ldquo;Unclear&rdquo; rather than doing the
                arithmetic.
              </li>
            </ul>

            <h3>v2 — the fix backfired</h3>
            <p>
              I added a decision procedure with mandatory arithmetic. It fixed four cases
              and <strong>introduced a new dangerous error</strong>: for cataract surgery
              on an 18-month-old policy with a 24-month waiting period, the model combined
              &ldquo;there&apos;s a sub-limit&rdquo; with &ldquo;caps don&apos;t mean
              denial&rdquo; and concluded <em>covered</em> — never checking that 18 &lt; 24.
              It also began blocking accident claims inside the initial waiting period,
              because I&apos;d never told it waiting periods have exceptions.
            </p>
            <p className="callout">
              Root cause: rule precedence, not reasoning. I&apos;d given the model rules
              without an order.
            </p>

            <h3>v3 — five sequential gates</h3>
            <p>
              I restructured the prompt so a later gate can never overturn an earlier one:
              covering clause → waiting periods (exceptions checked first) → expense time
              windows → exclusions → limits. The &ldquo;a cap is not a denial&rdquo; rule
              now only applies to claims that already passed the first four gates.
            </p>
            <div className="cs-impact">
              <div>
                <div className="num">91.7%</div>
                <div className="lbl">pass rate (22/24), up from 79.2%</div>
              </div>
              <div>
                <div className="num">0.0%</div>
                <div className="lbl">dangerous-error rate — the ship gate</div>
              </div>
              <div>
                <div className="num">8/8 · 5/5</div>
                <div className="lbl">exclusions · waiting periods</div>
              </div>
            </div>

            <h2>Knowing when to stop</h2>
            <p>
              Two scenarios still fail: a deluxe room above the room-rent cap, and a ₹3,500
              ambulance bill against a ₹2,000 cap. The model reads a monetary cap as a
              denial rather than a reduced payout — right clause, verdict too conservative.
            </p>
            <p>
              I chose not to fix them. Both fail in the <strong>safe direction</strong> — a
              user is told to verify rather than sent to file a doomed claim. v2 had
              already shown that another prompt edit can introduce a <em>dangerous</em>{" "}
              error, and each full eval run costs a day of free-tier quota. Shipping with a
              logged, safe-direction limitation beat risking a regression on the metric
              that actually matters.
            </p>

            <h2>What I&apos;d tell a hiring manager</h2>
            <p className="callout">
              The interesting part isn&apos;t that I shipped an AI app in a weekend. It&apos;s
              that my own fix introduced a new dangerous error and I caught it — because
              every prompt change re-runs the same 24 scenarios. A prompt is a code change;
              without a regression suite you&apos;re shipping on vibes.
            </p>

            <h2>What&apos;s next</h2>
            <ul>
              <li>Real-user testing with policyholders using their own policies</li>
              <li>In-product feedback capture, to grow the eval set from real usage</li>
              <li>Multi-policy comparison and waiting-period countdown reminders</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
