"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll("section .container > *");
    els.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = Math.min(i, 4) * 60 + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top">
            <span className="badge">DR</span> Dhairya Rastogi
          </a>
          <nav className={"nav-links" + (menuOpen ? " open" : "")}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a
              className="nav-cta"
              href="/Dhairya_Rastogi_Resume.pdf"
              target="_blank"
              rel="noopener"
              onClick={closeMenu}
            >
              Resume ↗
            </a>
          </nav>
          <button
            className="menu-btn"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </header>

      <main id="top" ref={mainRef}>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="status">
              <span className="dot"></span> Open to Associate Product Manager roles · 2026
            </div>
            <h1>
              Dhairya Rastogi
              <span className="role">Aspiring APM</span>
            </h1>
            <p className="lead">
              I turn <strong>user research and product data into decisions</strong> —
              diagnosing why users don&apos;t activate, defining the CRM and features
              that fix it, and shipping campaigns that move the metric. Currently a
              Product Intern at <strong>Ambak Home Loans</strong>.
            </p>
            <div className="btns">
              <a className="btn btn-primary" href="#projects">View Projects →</a>
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
            <div className="about-grid">
              <div className="about-copy">
                <h2 className="section-title">
                  A product thinker who starts with the user problem, not the feature.
                </h2>
                <p>
                  I&apos;m an aspiring product manager with two hands-on product
                  internships in <strong>fintech and insurance</strong>. My work lives
                  at the intersection of{" "}
                  <strong>user research, funnel analytics, and CRM design</strong> —
                  figuring out where users drop off, why, and what to build to close the
                  gap.
                </p>
                <p>
                  At <strong>Ambak Home Loans</strong> I diagnosed why 2,500+ registered
                  partners weren&apos;t using our app, built the first activation funnels
                  in CleverTap, and defined a Partner Activation CRM. At{" "}
                  <strong>PolicyBazaar for Business</strong> I shaped a sales-insight
                  platform that gave renewal reps client risk visibility for the first
                  time.
                </p>
                <p>
                  I come from a <strong>Computer Science</strong> background, so
                  I&apos;m comfortable talking to engineers, writing SQL, and building
                  models — but I&apos;m happiest translating messy business problems into
                  clear product requirements.
                </p>
                <div className="pills">
                  <span className="pill">Product Discovery</span>
                  <span className="pill">Funnel Analytics</span>
                  <span className="pill">CRM Design</span>
                  <span className="pill">Activation &amp; Growth</span>
                  <span className="pill">Data Storytelling</span>
                </div>
              </div>
              <div className="code-card">
                <div className="code-top">
                  <span className="c r"></span>
                  <span className="c y"></span>
                  <span className="c g"></span>
                  <span className="fname">profile.ts</span>
                </div>
                <div className="code-body">
                  <div>
                    <span className="tk-key">const</span>{" "}
                    <span className="tk-var">pm</span> ={" "}
                    <span className="tk-str">&quot;Dhairya Rastogi&quot;</span>
                  </div>
                  <div>&nbsp;</div>
                  <div>
                    <span className="tk-com">// what I optimise for</span>
                  </div>
                  <div>
                    <span className="tk-var">focus</span>: [
                    <span className="tk-str">&quot;Activation&quot;</span>,{" "}
                    <span className="tk-str">&quot;Retention&quot;</span>,{" "}
                    <span className="tk-str">&quot;Insight&quot;</span>]
                  </div>
                  <div>
                    <span className="tk-var">domains</span>: [
                    <span className="tk-str">&quot;Fintech&quot;</span>,{" "}
                    <span className="tk-str">&quot;Insurance&quot;</span>]
                  </div>
                  <div>&nbsp;</div>
                  <div>
                    <span className="tk-com">// how I work</span>
                  </div>
                  <div>
                    <span className="tk-var">toolkit</span>: [
                    <span className="tk-str">&quot;CleverTap&quot;</span>,{" "}
                    <span className="tk-str">&quot;Power BI&quot;</span>,
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="tk-str">&quot;QuickSight&quot;</span>,{" "}
                    <span className="tk-str">&quot;SQL&quot;</span>]
                  </div>
                  <div>
                    <span className="tk-var">education</span>:{" "}
                    <span className="tk-str">&quot;B.Tech CSE, Amity &apos;26&quot;</span>
                  </div>
                  <div>&nbsp;</div>
                  <div>
                    <span className="tk-fn">buildProduct</span>(
                    <span className="tk-var">userProblem</span>) {"{"}
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="tk-key">return</span>{" "}
                    <span className="tk-var">research</span> →{" "}
                    <span className="tk-var">define</span> →{" "}
                    <span className="tk-var">ship</span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="container">
            <div className="eyebrow mono">02 · Experience</div>
            <h2 className="section-title">
              Two product internships, both shipped real, measurable outcomes.
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
                    Ran primary research with 30–40 Relationship Managers to diagnose why
                    2,500+ registered partners weren&apos;t independently using Ambak
                    Saathi — found partners routed leads through RMs and existing bank
                    tie-ups, bypassing the app entirely.
                  </li>
                  <li>
                    Built CleverTap adoption funnels for 4 core features (CIBIL, APF,
                    Banker&apos;s Directory, My Earnings), setting the first baseline
                    activation metrics and exposing sub-20% adoption on the flagship CIBIL
                    feature.
                  </li>
                  <li>
                    Defined requirements for a Partner Activation CRM inside Ambak Sangam
                    — real-time activation status, retention health (Active / At-Risk /
                    Dormant / Churned), and next-best-action per partner.
                  </li>
                  <li>
                    Planned and shipped 2 engagement campaigns via WhatsApp (Serri.ai) and
                    Email API to drive network engagement and prevent silent churn.
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
                    Identified that enterprise renewal reps had zero visibility into
                    client claims history, and defined requirements for Nautica — a
                    sales-insight platform on AWS QuickSight.
                  </li>
                  <li>
                    Scoped dashboards covering Incurred Claim Ratios, Loss Ratios,
                    projected renewal premiums, and client risk profiles — a data-backed
                    foundation for renewal negotiations.
                  </li>
                  <li>
                    Designed logic to separate recurring vs. non-recurring medical claims,
                    improving risk-assessment accuracy by an estimated 15%.
                  </li>
                  <li>
                    Cut manual reporting effort by ~30% and delivered 20+ ad-hoc
                    leadership analyses for the Employee Benefits strategy team.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>




        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <div className="eyebrow mono">03 · Builds</div>
            <h2 className="section-title">
              Side projects where I built the product end-to-end.
            </h2>
            <div className="proj-grid">
              <div className="proj">
                <h3>ISL Vision — Real-Time Sign Language Recognition</h3>
                <p>
                  Fine-tuned VideoMAE (Vision Transformer) on a 262-class Indian Sign
                  Language dataset to 91.45% Top-1 accuracy (~25pts over CNN-LSTM
                  baselines), then built a real-time translator that runs webcam inference
                  on CPU with a confidence score.
                </p>
                <div className="cs-stack">
                  <span>Python</span>
                  <span>PyTorch</span>
                  <span>HuggingFace</span>
                  <span>OpenCV</span>
                </div>
              </div>
              <div className="proj">
                <h3>Retail Customer Behavior Analytics</h3>
                <p>
                  Analysed 3,900 transactions ($233K revenue) in Python, PostgreSQL &amp;
                  Power BI — found male customers drove 2.1x more revenue than female, and
                  flagged 839 above-average spenders who still buy on discount as a
                  margin-recovery segment, alongside 701 returning buyers as the target for
                  a loyalty program.
                </p>
                <div className="cs-stack">
                  <span>Python</span>
                  <span>Pandas</span>
                  <span>SQL</span>
                  <span>Power BI</span>
                </div>
              </div>
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
              I&apos;m looking for an <strong>Associate Product Manager</strong> role
              where I can own activation, retention, and the metrics that matter. Happy to
              walk through any case study.
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
              <a
                className="btn btn-ghost"
                href="/Dhairya_Rastogi_Resume.pdf"
                target="_blank"
                rel="noopener"
              >
                Résumé
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="container foot-inner">
          <span>© 2026 Dhairya Rastogi</span>
          <span>dhairyarastogi1411@gmail.com · +91 74608 33833</span>
          <span>Built for product roles · Amity University, CSE &apos;26</span>
        </div>
      </footer>
    </>
  );
}
