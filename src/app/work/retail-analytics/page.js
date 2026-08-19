import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

export const metadata = {
  title: "Retail Customer Behaviour — What the data showed · Dhairya Rastogi",
  description:
    "3,900 retail transactions analysed in Python, PostgreSQL and Power BI — and the segment decisions that came out of it.",
};

export default function RetailAnalytics() {
  return (
    <>
      <SiteNav active="work" />
      <main id="top">
        <section className="page-head">
          <div className="container">
            <a className="back-link mono" href="/work">← All work</a>
            <div className="eyebrow mono">Project · Data analysis</div>
            <h1 className="page-title">
              Retail customer behaviour — 3,900 transactions → decisions
            </h1>
            <p className="page-sub">
              An analysis where the point wasn&apos;t the dashboard. It was answering which
              customers are worth spending money on, and which are quietly costing margin.
            </p>
            <div className="cs-meta">
              <div>
                <span className="k mono">Role</span>
                <p>Solo — cleaning, SQL, dashboard, recommendations</p>
              </div>
              <div>
                <span className="k mono">Stack</span>
                <p>Python (Pandas) · PostgreSQL · Power BI</p>
              </div>
              <div>
                <span className="k mono">Dataset</span>
                <p>3,900 transactions · $233K revenue</p>
              </div>
            </div>
            <div className="cs-links">
              <a
                className="cs-link cs-link-primary"
                href="https://github.com/dhairya1411/Customer-Behavior-Analysis"
                target="_blank"
                rel="noopener"
              >
                GitHub — notebook, SQL &amp; dashboard →
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose">
            <h2>The question</h2>
            <p>
              A transaction table tells you what happened. It doesn&apos;t tell you what to
              do. I set out to answer three things a retail team would actually act on:
              who generates the revenue, who is worth converting to loyalty, and where
              discounting is buying nothing.
            </p>

            <h2>How I worked it</h2>
            <ul>
              <li>
                <strong>Python (Pandas)</strong> — cleaning and shaping, including deriving
                the age-group and customer-segment fields the raw data didn&apos;t have.
              </li>
              <li>
                <strong>PostgreSQL</strong> — ten analytical queries, each written to answer
                one business question rather than to explore. Segmentation used a CTE over
                previous-purchase counts: New (1), Returning (2–10), Loyal (11+).
              </li>
              <li>
                <strong>Power BI</strong> — a dashboard for the recurring view, so the
                answers survive past the one-off analysis.
              </li>
            </ul>

            <h2>What the data showed</h2>
            <div className="cs-impact">
              <div>
                <div className="num">2.1×</div>
                <div className="lbl">more revenue from male than female customers</div>
              </div>
              <div>
                <div className="num">839</div>
                <div className="lbl">above-average spenders who still buy on discount</div>
              </div>
              <div>
                <div className="num">701</div>
                <div className="lbl">returning buyers — the loyalty-conversion target</div>
              </div>
            </div>
            <p>
              The revenue split was the blunt finding: $157.9K from male customers against
              $75.2K from female customers, on an average purchase of $59.76. That&apos;s a
              targeting question, not a product one — but it reframes where acquisition
              spend goes.
            </p>
            <p>
              The more interesting segment was the 839. These aren&apos;t bargain hunters —
              they spend <em>above</em> the average and still apply a discount on every
              order. That&apos;s a margin-recovery opportunity, not a loyalty problem: the
              intervention is to test whether they convert without the discount, not to
              give them more.
            </p>
            <p>
              Segmentation also showed the base is overwhelmingly repeat: 3,116 Loyal, 701
              Returning, 83 New. With that shape, spending on acquisition to grow revenue
              is the wrong lever — the 701 Returning customers sitting one step below Loyal
              are the cheapest available growth.
            </p>

            <h2>What I&apos;d do differently</h2>
            <ul>
              <li>
                The segment thresholds (2–10 = Returning) were chosen by judgement, not
                derived from the distribution. A quantile split would be defensible; mine
                is arguable.
              </li>
              <li>
                There&apos;s no time dimension in the analysis, so &ldquo;loyal&rdquo; here
                means <em>has purchased often</em>, not <em>still active</em>. Recency would
                change who&apos;s worth targeting.
              </li>
              <li>
                Every finding is correlational. The margin-recovery hypothesis on those 839
                customers is exactly that — a hypothesis, and the next step would be a
                holdout test rather than a rollout.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
