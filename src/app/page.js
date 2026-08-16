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
            <a href="#work" onClick={closeMenu}>Case Studies</a>
            <a href="#teardown" onClick={closeMenu}>Teardown</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
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
              <a className="btn btn-primary" href="#work">View Case Studies →</a>
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

        {/* CASE STUDIES */}
        <section id="work">
          <div className="container">
            <div className="eyebrow mono">03 · Case Studies</div>
            <h2 className="section-title">
              How I think about a product problem — from signal to shipped solution.
            </h2>
            <p className="section-sub">
              Deep-dives structured the way I actually work: understand the problem,
              form a hypothesis, define the solution, measure the impact.
            </p>
            <div className="cs-grid">
              {/* PolicyLens — shipped AI product */}
              <div className="cs-card">
                <div className="cs-head">
                  <div>
                    <span className="cs-tag">InsurTech · AI product I shipped</span>
                    <h3 style={{ marginTop: 12 }}>
                      PolicyLens — &ldquo;Is my claim actually covered?&rdquo;
                    </h3>
                    <div className="cs-role">
                      Solo · problem → build → evals → ship
                    </div>
                  </div>
                </div>
                <div className="cs-block">
                  <span className="k">Problem</span>
                  <p>
                    People discover what their health policy excludes <strong>at the hospital
                    counter</strong>, not before. The information is already in the 40-page PDF
                    they own — they just can&apos;t read it. The gap is comprehension, not data.
                  </p>
                </div>
                <div className="cs-block">
                  <span className="k">What I built</span>
                  <p>
                    Upload a policy → plain-language breakdown of coverage, exclusions, waiting
                    periods and sub-limits. Then describe a real situation and get a{" "}
                    <strong>verdict, the documents you&apos;ll need, and the risks that get claims
                    rejected</strong> — every statement citing the exact clause and page.
                  </p>
                </div>
                <div className="cs-block">
                  <span className="k">The PM decision that mattered</span>
                  <p>
                    Not all errors are equal here. Saying &ldquo;not covered&rdquo; when it is
                    costs a phone call; saying <strong>&ldquo;covered&rdquo; when it&apos;s
                    excluded sends someone to file a claim that gets rejected</strong>. So I made
                    that the north-star metric — a <strong>dangerous-error rate</strong>, target
                    zero — and built a 24-scenario eval suite that fails the build if it isn&apos;t met.
                  </p>
                </div>
                <div className="cs-block">
                  <span className="k">What the evals caught</span>
                  <p>
                    My own &ldquo;fix&rdquo; introduced a new dangerous error: the model let a
                    sub-limit override an unmet waiting period and called an 18-month-old policy
                    covered for a 24-month-wait procedure. <strong>Root cause was rule precedence</strong>,
                    so I restructured the prompt into five sequential gates where a later rule can
                    never overturn an earlier rejection.
                  </p>
                </div>
                <div className="cs-impact">
                  <div>
                    <div className="num">24</div>
                    <div className="lbl">clause-grounded eval scenarios, run on every change</div>
                  </div>
                  <div>
                    <div className="num">0</div>
                    <div className="lbl">dangerous errors — the ship/no-ship gate</div>
                  </div>
                  <div>
                    <div className="num">91.7%</div>
                    <div className="lbl">pass rate, up from 79.2% at baseline</div>
                  </div>
                </div>
                <div className="cs-stack">
                  <span>Problem definition</span>
                  <span>AI guardrails</span>
                  <span>Eval design</span>
                  <span>Next.js</span>
                  <span>RAG + citations</span>
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
                    href="https://github.com/dhairya1411/Policylens"
                    target="_blank"
                    rel="noopener"
                  >
                    Code &amp; eval suite
                  </a>
                </div>
              </div>

              {/* Ambak */}
              <div className="cs-card">
                <div className="cs-head">
                  <div>
                    <span className="cs-tag">Fintech · Activation &amp; Retention</span>
                    <h3 style={{ marginTop: 12 }}>
                      Fixing Partner Activation at Ambak Saathi
                    </h3>
                    <div className="cs-role">Product Intern · Ambak Home Loans</div>
                  </div>
                </div>
                <div className="cs-block">
                  <span className="k">Problem</span>
                  <p>
                    2,500+ partners were <strong>registered but inactive</strong> — the
                    app had a growing top-of-funnel but no independent usage, and no one
                    could see who was actually activating.
                  </p>
                </div>
                <div className="cs-block">
                  <span className="k">Discovery</span>
                  <p>
                    I interviewed 30–40 Relationship Managers and found the real
                    behaviour: partners submitted leads <strong>through RMs</strong> and
                    processed loans via <strong>existing bank tie-ups</strong>, so the app
                    added no new value to their day. It wasn&apos;t an awareness problem —
                    it was a workflow-fit and value problem.
                  </p>
                </div>
                <div className="cs-block">
                  <span className="k">What I built</span>
                  <p>
                    Baseline <strong>CleverTap adoption funnels</strong> for 4 core
                    features to quantify the gap, then defined a{" "}
                    <strong>Partner Activation CRM</strong> in Ambak Sangam classifying
                    every partner as Active / At-Risk / Dormant / Churned with a
                    recommended next action — giving onboarding a live view instead of a
                    static list. Also audited event nomenclature to make the analytics
                    trustworthy.
                  </p>
                </div>
                <div className="cs-impact">
                  <div>
                    <div className="num">&lt;20%</div>
                    <div className="lbl">
                      flagship CIBIL adoption surfaced as the priority gap
                    </div>
                  </div>
                  <div>
                    <div className="num">4 → 1</div>
                    <div className="lbl">
                      funnels built + a single activation source of truth
                    </div>
                  </div>
                  <div>
                    <div className="num">2</div>
                    <div className="lbl">
                      retention campaigns shipped against silent churn
                    </div>
                  </div>
                </div>
                <div className="cs-stack">
                  <span>User Research</span>
                  <span>CleverTap</span>
                  <span>Funnel Analysis</span>
                  <span>CRM Design</span>
                  <span>Serri.ai / WhatsApp API</span>
                </div>
              </div>

              {/* Nautica */}
              <div className="cs-card">
                <div className="cs-head">
                  <div>
                    <span className="cs-tag">InsurTech · Sales Enablement</span>
                    <h3 style={{ marginTop: 12 }}>
                      Nautica — Giving Renewal Reps Client Risk Visibility
                    </h3>
                    <div className="cs-role">
                      Product Intern · PolicyBazaar for Business
                    </div>
                  </div>
                </div>
                <div className="cs-block">
                  <span className="k">Problem</span>
                  <p>
                    Enterprise renewal reps negotiated blind — they had{" "}
                    <strong>zero visibility into a client&apos;s claims history</strong>,
                    so pricing and risk conversations were guesswork.
                  </p>
                </div>
                <div className="cs-block">
                  <span className="k">Approach</span>
                  <p>
                    I scoped <strong>Nautica</strong>, a sales-insight platform on AWS
                    QuickSight surfacing Incurred Claim Ratios, Loss Ratios, projected
                    renewal premiums, and client risk profiles — one place reps could open
                    before a renewal call.
                  </p>
                </div>
                <div className="cs-block">
                  <span className="k">The insight that mattered</span>
                  <p>
                    Raw claim totals overstated risk. I defined logic to{" "}
                    <strong>separate recurring vs. non-recurring medical claims</strong>,
                    so a one-off event didn&apos;t distort a client&apos;s ongoing risk
                    score — improving risk-assessment accuracy by an estimated 15%.
                  </p>
                </div>
                <div className="cs-impact">
                  <div>
                    <div className="num">~15%</div>
                    <div className="lbl">more accurate client risk scoring</div>
                  </div>
                  <div>
                    <div className="num">~30%</div>
                    <div className="lbl">manual reporting effort removed</div>
                  </div>
                  <div>
                    <div className="num">20+</div>
                    <div className="lbl">ad-hoc leadership analyses delivered</div>
                  </div>
                </div>
                <div className="cs-stack">
                  <span>Requirements</span>
                  <span>AWS QuickSight</span>
                  <span>AWS Athena</span>
                  <span>Risk Segmentation</span>
                  <span>Stakeholder Mgmt</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEARDOWN */}
        <section id="teardown" className="teardown">
          <div className="container">
            <div className="eyebrow mono">04 · Product Teardown</div>
            <h2 className="section-title">
              Teardown: onboarding &amp; activation in a digital home-loan app.
            </h2>
            <p className="section-sub">
              A short product-thinking exercise in my target domain — spotting where a
              lending app loses new borrowers and what I&apos;d prioritise to fix it.
            </p>
            <div className="td-card">
              <div className="cs-head" style={{ marginBottom: 2 }}>
                <div>
                  <span className="cs-tag">Lending · Onboarding funnel</span>
                  <h3 style={{ marginTop: 12, fontSize: 20 }}>
                    The &quot;eligibility-first&quot; home-loan journey
                  </h3>
                </div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: 15, marginTop: 8 }}>
                Home-loan apps ask for heavy documentation before the user sees any value.
                The result is a classic leaky funnel: high install intent, steep drop-off
                at KYC/income proof, and low first-session activation.
              </p>
              <div className="td-cols">
                <div>
                  <h4>What works</h4>
                  <ul className="td-list">
                    <li>
                      Instant eligibility / EMI calculators create a fast &quot;aha&quot;
                      before any paperwork.
                    </li>
                    <li>
                      Pre-approved offers pulled from a bureau reduce perceived effort.
                    </li>
                    <li>
                      Progress indicators on multi-step applications set expectations.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>Where it leaks</h4>
                  <ul className="td-list">
                    <li>Full document upload demanded upfront, before trust is earned.</li>
                    <li>
                      No saved-state — dropping off means restarting the whole journey.
                    </li>
                    <li>
                      Activation isn&apos;t defined: apps count installs, not the first
                      meaningful action.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="td-reco">
                <span className="k">If I owned activation, I&apos;d prioritise</span>
                <ol>
                  <li>
                    <strong>Define the activation event</strong> — e.g. &quot;checked
                    eligibility + saved an offer,&quot; not just sign-up — and instrument
                    the funnel around it.
                  </li>
                  <li>
                    <strong>Defer heavy KYC</strong> until after the eligibility
                    &quot;aha,&quot; using a lightweight value-first path to build trust.
                  </li>
                  <li>
                    <strong>Add save-and-resume + nudges</strong> (WhatsApp/email) so
                    partial applicants can return instead of restarting — the exact
                    silent-churn problem I worked on at Ambak.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="container">
            <div className="eyebrow mono">05 · Skills &amp; Tools</div>
            <h2 className="section-title">The toolkit behind the work.</h2>
            <div className="skill-grid">
              <div className="skill-cat">
                <h4>
                  <span className="ic">◆</span> Product
                </h4>
                <div className="skill-tags">
                  <span>Product Strategy</span>
                  <span>User Research</span>
                  <span>Funnel Analysis</span>
                  <span>Feature Prioritization</span>
                  <span>CRM Design</span>
                  <span>Requirements / PRDs</span>
                  <span>Stakeholder Management</span>
                </div>
              </div>
              <div className="skill-cat">
                <h4>
                  <span className="ic">◆</span> Analytics &amp; Data
                </h4>
                <div className="skill-tags">
                  <span>CleverTap</span>
                  <span>Power BI</span>
                  <span>AWS QuickSight</span>
                  <span>AWS Athena</span>
                  <span>MySQL</span>
                  <span>Excel / Sheets</span>
                </div>
              </div>
              <div className="skill-cat">
                <h4>
                  <span className="ic">◆</span> Growth &amp; Engagement
                </h4>
                <div className="skill-tags">
                  <span>Serri.ai</span>
                  <span>WhatsApp Business API</span>
                  <span>Email API</span>
                  <span>Activation Funnels</span>
                  <span>Retention / Churn</span>
                </div>
              </div>
              <div className="skill-cat">
                <h4>
                  <span className="ic">◆</span> Technical
                </h4>
                <div className="skill-tags">
                  <span>Python</span>
                  <span>SQL</span>
                  <span>Pandas / NumPy</span>
                  <span>PyTorch</span>
                  <span>Data Storytelling</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <div className="eyebrow mono">06 · Builds</div>
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
                  Analysed 3,900+ transactions ($230K+ revenue) in Python &amp; Power BI —
                  found male customers drove 2.1x more revenue and flagged 839 discount
                  users as a loyalty-conversion opportunity, with a targeted program to
                  convert 700+ returning buyers.
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
              07 · Contact
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
