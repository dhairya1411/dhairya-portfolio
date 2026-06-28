import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Dhairya",
  lastName: "Rastogi",
  name: "Dhairya Rastogi",
  role: "Product Intern",
  avatar: "/images/avatar.jpg",
  email: "dhairyarastogi1411@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Thoughts on product, fintech, and growth.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dhairya1411",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dhairya-rastogi-a396b2220/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:dhairyarastogi1411@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Product Manager | Fintech & Growth | Ambak Home Loans`,
  featured: {
    display: false,
    title: <>Featured</>,
    href: "/work",
  },
  headline: <>Building products that move people from sign-up to self-sufficient</>,
  subline: (
    <>
      I'm Dhairya — a CS grad and aspiring APM, currently interning at{" "}
      <strong>Ambak Home Loans</strong> where I work on partner activation, funnel analysis, and
      CRM design. Previously at <strong>PolicyBazaar for Business</strong>, where I defined the
      product requirements for Nautica, a sales insight platform. I care about understanding why
      users behave the way they do — and building things that close that gap.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} focused on fintech and partner-led growth`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        CS graduate and aspiring Associate Product Manager with hands-on experience in fintech
        and partner-led business models. I've spent the last six months embedded in real product
        problems — running user research with 30+ Relationship Managers, building adoption funnels
        in CleverTap, designing a CRM from requirements to engineering handoff, and executing
        campaigns across a 5,000-partner network. I think in systems, work close to data, and
        genuinely enjoy talking to users — especially when what they say doesn't match what the
        numbers show.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Ambak Home Loans",
        timeframe: "May 2026 – Present",
        role: "Product Intern — Activation & Partner Growth",
        achievements: [
          <>
            Conducted primary research with <strong>30–40 Relationship Managers</strong> to
            diagnose why 2,500+ registered partners weren't independently using Ambak Saathi —
            uncovering a workflow gap where partners relied on RMs and existing bank tie-ups
            instead of engaging with the app themselves.
          </>,
          <>
            Built <strong>CleverTap feature adoption funnels</strong> for 4 core app features
            (CIBIL, APF, Banker's Directory, My Earnings), establishing the first baseline
            activation metrics and revealing sub-20% adoption on the flagship CIBIL feature.
          </>,
          <>
            Defined requirements for a <strong>Partner Activation CRM</strong> integrated into
            Ambak Sangam — giving the onboarding team real-time visibility into activation
            status, retention health, and recommended next action per partner.
          </>,
          <>
            Planned and executed <strong>2 partner engagement campaigns</strong> (Udaan 2.0
            winners announcement + RM transition alert) via WhatsApp (Serri.ai) and Email API
            across the full Ambak partner network.
          </>,
          <>
            Audited CleverTap event mapping and proposed corrected event nomenclature to improve
            analytics data reliability for future product decisions.
          </>,
        ],
        images: [],
      },
      {
        company: "PolicyBazaar for Business",
        timeframe: "Dec 2025 – May 2026",
        role: "Product Intern — Employee Benefits Division",
        achievements: [
          <>
            Independently identified a critical information gap in the enterprise renewal sales
            process — reps had zero visibility into client claims history before meetings — and{" "}
            <strong>defined product requirements for Nautica</strong>, a Sales Insight Platform
            built on AWS QuickSight.
          </>,
          <>
            Defined dashboard scope covering Incurred Claim Ratios, Loss Ratios, projected
            renewal premiums, and client risk profiles — giving the sales team a data-backed
            foundation for renewal negotiations for the first time.
          </>,
          <>
            Wrote custom <strong>SQL logic to segment recurring vs. non-recurring medical
            claims</strong>, ensuring risk scores reflected true ongoing risk rather than
            one-time event distortion.
          </>,
          <>
            Reduced manual reporting effort by <strong>~30%</strong> and delivered{" "}
            <strong>20+ ad-hoc leadership analyses</strong> via AWS QuickSight, accelerating
            decision-making across the Employee Benefits strategy team.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Amity University, Lucknow",
        description: (
          <>B.Tech, Computer Science &amp; Engineering &nbsp;·&nbsp; CGPA: 8.01 &nbsp;·&nbsp; 2022 – 2026</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Product & Growth",
        description: (
          <>
            Funnel Analysis &nbsp;·&nbsp; User Research &nbsp;·&nbsp; Feature Prioritization
            &nbsp;·&nbsp; CRM Design &nbsp;·&nbsp; Activation &amp; Retention Strategy
            &nbsp;·&nbsp; Stakeholder Management &nbsp;·&nbsp; Product Requirements
          </>
        ),
        images: [],
      },
      {
        title: "Analytics & Tools",
        description: (
          <>
            CleverTap &nbsp;·&nbsp; AWS QuickSight &nbsp;·&nbsp; Power BI &nbsp;·&nbsp; AWS
            Athena &nbsp;·&nbsp; MySQL &nbsp;·&nbsp; Python &nbsp;·&nbsp; SQL &nbsp;·&nbsp;
            Serri.ai &nbsp;·&nbsp; WhatsApp Business API
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about product and growth",
  description: `Read what ${person.name} has been thinking about`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Case Studies – ${person.name}`,
  description: `Product case studies by ${person.name} — fintech, growth, and partner-led products`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
