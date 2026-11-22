"use client";

import { useEffect, useRef } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll("section .container > *");
    els.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SiteNav active="about" />

      <main id="top" ref={mainRef}>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="status">
              <span className="dot"></span> Open to Associate Product Manager roles · 2026
              · Gurgaon
            </div>
            <h1>
              Dhairya Rastogi
              <span className="role">Aspiring APM</span>
            </h1>
            <p className="lead">
              I turn <strong>user research and product data into decisions</strong> —
              diagnosing why users don&apos;t activate, defining the CRM and features that
              fix it, and shipping campaigns that move the metric. Most recently a Product
              Intern at <strong>Ambak Home Loans</strong>; before that,{" "}
              <strong>PolicyBazaar for Business</strong>.
            </p>
            <div className="btns">
              <a className="btn btn-primary" href="/work">View My Work →</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="num accent">20% → 60%</div>
                <div className="lbl">CIBIL feature adoption after app-flow redesign</div>
              </div>
              <div className="stat">
                <div className="num accent">+27%</div>
                <div className="lbl">renewal conversion lift from Nautica</div>
              </div>
              <div className="stat">
                <div className="num accent">₹4.5 Cr</div>
                <div className="lbl">revenue influenced by lifecycle campaigns</div>
              </div>
              <div className="stat">
                <div className="num accent">30–40</div>
                <div className="lbl">user interviews conducted</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="container">
            <div className="eyebrow mono">01 · About</div>
            <h2 className="section-title">
              A product thinker who starts with the user problem, not the feature.
            </h2>
            <p className="section-sub">
              Two product internships in fintech and insurance. I work where{" "}
              <strong>user research, funnel analytics and CRM design</strong> meet —
              finding where users drop off, why, and what to build to close the gap. A
              Computer Science background means I can write the SQL and read the model,
              but the work I care about is turning a messy business problem into a clear
              requirement.
            </p>
            <div className="pills">
              <span className="pill">Product Discovery</span>
              <span className="pill">Funnel Analytics</span>
              <span className="pill">CRM Design</span>
              <span className="pill">Activation &amp; Growth</span>
              <span className="pill">AI Evals &amp; Guardrails</span>
              <span className="pill">Data Storytelling</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="container">
            <div className="eyebrow mono">02 · Experience</div>
            <h2 className="section-title">
              Two product internships, both shipped measurable outcomes.
            </h2>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-meta">
                  <span>May 2026 — Oct 2026</span>
                  <span>·</span>
                  <span>Gurugram, HR</span>
                </div>
                <h3>
                  Product Intern · <span className="org">Ambak Home Loans</span>
                </h3>
                <ul>
                  <li>
                    Uncovered <strong>sub-20% adoption</strong> on the flagship CIBIL feature
                    through CleverTap funnel analysis across 4 core features (CIBIL Score, APF,
                    Banker&apos;s Directory, My Earnings); diagnosed the root cause via primary
                    research with <strong>30–40 Relationship Managers</strong> — partners were
                    bypassing the app entirely, routing leads through RMs and existing bank
                    tie-ups.
                  </li>
                  <li>
                    Drove a product redesign based on the research: gated the DSA code behind
                    mandatory feature usage (CIBIL check, offer calculator) and ran a 3-month
                    partner training program to shift the app from &ldquo;RM tool&rdquo; to
                    self-serve platform — lifting <strong>CIBIL adoption from 20% to
                    60%</strong> and increasing fetch requests by <strong>40%</strong>.
                  </li>
                  <li>
                    Migrated all campaign triggers from the backend to{" "}
                    <strong>CleverTap</strong>, cutting template-change turnaround from 1–2 days
                    to same-day and giving the business team self-serve control over WhatsApp,
                    SMS and email campaigns — with the delivery, open and rejection tracking
                    the backend never had.
                  </li>
                  <li>
                    Automated <strong>Partner Experience (PET)</strong> and{" "}
                    <strong>Pre-Sales (PST)</strong> workflows: consolidated partner data into
                    a single-view dashboard, reducing per-lead processing from 10–15 manual
                    steps to 5–7 clicks and saving executives <strong>~4 hours/day</strong> of
                    manual CRM search.
                  </li>
                  <li>
                    Defined requirements for a <strong>Partner Activation CRM</strong> in Ambak
                    Sangam — real-time activation status, retention-health segmentation
                    (Active / At Risk / Dormant / Churned) and recommended next actions to
                    systematise partner lifecycle management.
                  </li>
                </ul>
              </div>
              <div className="tl-item">
                <div className="tl-meta">
                  <span>Dec 2025 — May 2026</span>
                  <span>·</span>
                  <span>Gurugram, HR</span>
                </div>
                <h3>
                  Product Intern ·{" "}
                  <span className="org">PolicyBazaar for Business</span>
                </h3>
                <p className="tl-project">
                  Employee Benefits · Nautica — Sales Insight Platform
                </p>
                <ul>
                  <li>
                    Identified that enterprise renewal reps were negotiating blind —{" "}
                    <strong>zero visibility into client claims history</strong>, leading to
                    uncompetitive pricing and lost renewals. Defined PRDs and shipped Nautica,
                    an in-house Sales Insight Platform with auto-refreshing dashboards for
                    Incurred Claim Ratios, Loss Ratios, risk profiles and projected premiums —
                    lifting <strong>renewal conversion rates by 27%</strong>.
                  </li>
                  <li>
                    Designed a claims-segmentation model separating recurring from one-time
                    medical expenses; back-tested against historical claims data and
                    reclassified <strong>~15% of accounts</strong> previously over-scored by
                    outlier claims, so reps could price renewals competitively for genuinely
                    low-risk clients.
                  </li>
                  <li>
                    Designed and owned <strong>lifecycle campaigns</strong> (WhatsApp, SMS)
                    across 10+ B2B insurance verticals (Group Health, Marine, Cyber, Workmen
                    Compensation): drop-off re-engagement flows for mid-funnel prospects and a
                    9-touch renewal cadence (60 days to 1 day before expiry). Diagnosed and
                    resolved deliverability failures — campaigns influenced{" "}
                    <strong>₹4.5 Cr</strong> in renewal and re-engagement revenue over 6
                    months.
                  </li>
                  <li>
                    Acted as the cross-functional bridge between sales, strategy and
                    data/tech — translating business questions into data requirements and
                    packaging analytical outputs into sales-ready renewal playbooks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WORK TEASER */}
        <section id="work-teaser">
          <div className="container">
            <div className="eyebrow mono">03 · Work</div>
            <h2 className="section-title">
              Products I built end-to-end — problem, guardrails, evals, ship.
            </h2>
            <p className="section-sub">
              From a shipped AI insurance product with its own eval suite to a governed
              multi-agent platform. Each one has a write-up of how it works and what it
              got wrong.
            </p>
            <div className="btns">
              <a className="btn btn-primary" href="/work">See all work →</a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="eyebrow mono" style={{ justifyContent: "center" }}>
              04 · Contact
            </div>
            <h2>Let&apos;s build something users actually adopt.</h2>
            <p>
              I&apos;m looking for an <strong>Associate Product Manager</strong> role where
              I can own activation, retention, and the metrics that matter. Happy to walk
              through any project.
            </p>
            <div className="contact-links">
              <a className="btn btn-primary" href="mailto:dhairyarastogi1411@gmail.com">
                Email me →
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/dhairya-rastogi-a396b2220/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/dhairya1411"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
