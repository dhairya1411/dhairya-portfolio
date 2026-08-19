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
              fix it, and shipping campaigns that move the metric. Currently a Product
              Intern at <strong>Ambak Home Loans</strong>.
            </p>
            <div className="btns">
              <a className="btn btn-primary" href="/work">View My Work →</a>
              <a
                className="btn btn-ghost"
                href="/Dhairya_Rastogi_Resume.pdf"
                target="_blank"
                rel="noopener"
              >
                Download Résumé
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="num accent">2,500+</div>
                <div className="lbl">partners analysed for activation gaps</div>
              </div>
              <div className="stat">
                <div className="num accent">30–40</div>
                <div className="lbl">user interviews conducted</div>
              </div>
              <div className="stat">
                <div className="num accent">~30%</div>
                <div className="lbl">manual reporting effort cut</div>
              </div>
              <div className="stat">
                <div className="num accent">2</div>
                <div className="lbl">product internships shipped</div>
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
                  <span>May 2026 — Present</span>
                  <span>·</span>
                  <span>Gurugram, HR</span>
                </div>
                <h3>
                  Product Intern · <span className="org">Ambak Home Loans</span>
                </h3>
                <ul>
                  <li>
                    Interviewed <strong>30–40 Relationship Managers</strong> to find why
                    2,500+ registered partners never used the app — they were routing
                    leads through RMs and bank tie-ups, bypassing it entirely.
                  </li>
                  <li>
                    Built the first activation funnels in CleverTap across 4 core
                    features, exposing <strong>sub-20% adoption</strong> on the flagship
                    CIBIL feature.
                  </li>
                  <li>
                    Defined a <strong>Partner Activation CRM</strong> — live activation
                    status, retention health, and next-best-action per partner.
                  </li>
                  <li>
                    Shipped <strong>2 engagement campaigns</strong> over WhatsApp
                    (Serri.ai) and Email API to re-engage dormant partners before they
                    churned silently.
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
                <ul>
                  <li>
                    Found that enterprise renewal reps had{" "}
                    <strong>no visibility into client claims history</strong>, and defined
                    Nautica — a sales-insight platform on AWS QuickSight.
                  </li>
                  <li>
                    Scoped dashboards for claim ratios, loss ratios and projected renewal
                    premiums, giving reps a data-backed basis for negotiation.
                  </li>
                  <li>
                    Designed logic separating recurring from non-recurring medical
                    claims, improving risk-assessment accuracy by an estimated{" "}
                    <strong>15%</strong>.
                  </li>
                  <li>
                    Cut manual reporting effort by <strong>~30%</strong> and delivered 20+
                    ad-hoc analyses for the Employee Benefits strategy team.
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
