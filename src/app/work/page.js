import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "Work · Dhairya Rastogi",
  description:
    "Products built end-to-end — an AI insurance decoder with its own eval suite, a governed multi-agent platform, a sign-language recognition model, and a retail analytics study.",
};

const PROJECTS = [
  {
    title: "PolicyLens",
    tagline: "“Is my claim actually covered?”",
    kind: "InsurTech · Shipped AI product",
    body: "An AI product that reads your health insurance policy and answers the only question that matters — with every statement citing the exact clause and page from your own document. I made dangerous-error rate the north-star metric and built a 24-scenario eval suite that fails the build if a single one appears.",
    stack: ["Next.js", "Llama 3.3", "RAG + citations", "Eval design"],
    links: [
      { label: "Read the case study →", href: "/work/policylens", primary: true },
      { label: "Try it live", href: "https://policylens-nine.vercel.app", external: true },
      { label: "GitHub", href: "https://github.com/dhairya1411/Policylens", external: true },
    ],
  },
  {
    title: "Agentic AI Platform",
    tagline: "governed agents for project management",
    kind: "Developer tooling · In progress",
    working: true,
    body: "Jira and Slack signals routed through specialist agents on a governed LangGraph workflow, where every proposed action is gated by risk and confidence before a human sees it. Running it against a live model surfaced two real defects: agents proposing actions they could not execute, and three agents proposing the same action independently. Both are fixed and pinned by tests.",
    stack: ["Python", "LangGraph", "FastAPI", "PostgreSQL"],
    links: [
      { label: "GitHub", href: "https://github.com/dhairya1411/agentic-ai-platform", external: true },
    ],
  },
  {
    title: "ISL Vision",
    tagline: "real-time Indian Sign Language recognition",
    kind: "Computer vision",
    body: "Fine-tuned VideoMAE, a video transformer, on a 262-class Indian Sign Language dataset, then built a desktop translator that runs inference on a webcam clip and returns the predicted sign with a confidence score — on CPU, with no GPU required at inference time.",
    stack: ["Python", "PyTorch", "HuggingFace", "OpenCV"],
    links: [
      { label: "How it works →", href: "/work/isl-vision", primary: true },
      { label: "GitHub", href: "https://github.com/dhairya1411/ISL_Visions", external: true },
    ],
  },
  {
    title: "Retail Customer Behaviour",
    tagline: "3,900 transactions → decisions",
    kind: "Data analysis",
    body: "Cleaned and analysed 3,900 retail transactions in Python, queried them in PostgreSQL and built a Power BI dashboard — then turned the output into segment recommendations rather than charts: who drives revenue, and which customers are worth a margin intervention.",
    stack: ["Python", "Pandas", "PostgreSQL", "Power BI"],
    links: [
      { label: "What the data showed →", href: "/work/retail-analytics", primary: true },
      { label: "GitHub", href: "https://github.com/dhairya1411/Customer-Behavior-Analysis", external: true },
    ],
  },
];

export default function WorkIndex() {
  return (
    <>
      <SiteNav active="work" />
      <main id="top">
        <section className="page-head">
          <div className="container">
            <div className="eyebrow mono">Work</div>
            <h1 className="page-title">My projects</h1>
            <p className="page-sub">
              Four builds where I owned the problem, the guardrails and the measurement —
              not just the feature.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="work-list">
              {PROJECTS.map((project) => (
                <article className="work-item" key={project.title}>
                  <div className="work-kind mono">{project.kind}</div>
                  <h2>
                    {project.title}{" "}
                    <span className="work-tagline">— {project.tagline}</span>
                    {project.working ? <span className="tag-working">Working</span> : null}
                  </h2>
                  <p>{project.body}</p>
                  <div className="cs-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="cs-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        className={"cs-link" + (link.primary ? " cs-link-primary" : "")}
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
