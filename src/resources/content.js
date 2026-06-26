import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dhairya',
    lastName: 'Rastogi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Product Manager',
    avatar: '/images/avatar.jpg',   // <-- replace with your photo
    location: 'Asia/Kolkata',
    languages: ['English', 'Hindi'],
}

const newsletter = {
    display: false,
    title: <></>,
    description: <></>,
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/dhairya1411',   // <-- update with your GitHub URL
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/dhairya-rastogi-a396b2220/',   // <-- update with your LinkedIn URL
    },
    {
        name: 'LeetCode',
        icon: 'code',
        link: 'https://leetcode.com/u/dhairya9999/',   // <-- update with your LeetCode URL
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:dhairyarastogi1411@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Product Manager | Fintech & Growth | Ambak Home Loans`,
    headline: <>Building products that move people from sign-up to self-sufficient</>,
    subline: <>I'm Dhairya — a PM intern at <InlineCode>Ambak Home Loans</InlineCode> working on partner activation and growth. Previously at <InlineCode>PolicyBazaar for Business</InlineCode>, where I built Nautica, a sales insight platform. CS grad, fintech nerd, obsessed with why users don't do what you expect them to.</>
}

const about = {
    label: 'About',
    title: 'About me',
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
        link: '',
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm a final-year CS student and aspiring Product Manager with hands-on experience in fintech and partner-led business models. I combine a technical background with product thinking to find and fix the gaps between what users do and what a product needs them to do. My work spans user research, funnel analysis, CRM design, and growth campaigns — all in real fintech environments. I'm drawn to problems where the data looks fine on the surface and falls apart when you talk to actual users.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Ambak Home Loans',
                timeframe: 'May 2026 – Present',
                role: 'Product Intern — Growth & Marketing',
                achievements: [
                    <>Conducted primary research with <strong>30–40 Relationship Managers</strong>, uncovering that RMs were using Ambak Saathi on behalf of partners — identifying proxy-user behavior as the root cause of activation failure across a 5,000-partner network.</>,
                    <>Built <strong>CleverTap feature adoption funnels</strong> for 4 core app features (CIBIL, APF, Banker's Directory, My Earnings), establishing the first baseline activation metrics and revealing sub-20% adoption on the flagship CIBIL feature.</>,
                    <>Defined requirements for and building a <strong>Partner Activation CRM</strong> integrated into Ambak Sangam — giving the onboarding team real-time visibility into activation status, retention health, and recommended next action per partner.</>,
                    <>Planned and executed <strong>2 partner engagement campaigns</strong> (Udaan 2.0 winners announcement + RM transition alert) via WhatsApp (Serri.ai) and Email API across the full Ambak partner network.</>,
                    <>Audited CleverTap event mapping and proposed corrected event nomenclature to improve analytics data reliability for future product decisions.</>,
                ],
                images: [],
            },
            {
                company: 'PolicyBazaar for Business',
                timeframe: 'Dec 2025 – May 2026',
                role: 'Product Intern — Employee Benefits Division',
                achievements: [
                    <>Independently identified a critical information gap in the enterprise renewal sales process — reps had zero visibility into client claims history before meetings — and <strong>defined product requirements for Nautica</strong>, a Sales Insight Platform built on AWS QuickSight.</>,
                    <>Defined dashboard scope covering Incurred Claim Ratios, Loss Ratios, projected renewal premiums, and client risk profiles — giving the sales team a data-backed foundation for renewal negotiations for the first time.</>,
                    <>Wrote custom <strong>SQL logic to segment recurring vs. non-recurring medical claims</strong>, ensuring risk scores reflected true ongoing risk rather than one-time event distortion.</>,
                    <>Reduced manual reporting effort by <strong>~30%</strong> and delivered <strong>20+ ad-hoc leadership analyses</strong> via AWS QuickSight, accelerating decision-making across the Employee Benefits strategy team.</>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'Amity University, Lucknow',
                description: <>B.Tech, Computer Science &amp; Engineering &nbsp;·&nbsp; CGPA: 8.01 &nbsp;·&nbsp; 2022 – 2026</>,
            },
        ],
    },
    technical: {
        display: true,
        title: 'Skills',
        skills: [
            {
                title: 'Product & Growth',
                description: <>Funnel Analysis &nbsp;·&nbsp; User Research &nbsp;·&nbsp; Feature Prioritization &nbsp;·&nbsp; CRM Design &nbsp;·&nbsp; Activation &amp; Retention Strategy &nbsp;·&nbsp; Stakeholder Management &nbsp;·&nbsp; Product Requirements</>,
                images: [],
            },
            {
                title: 'Analytics & Tools',
                description: <>CleverTap &nbsp;·&nbsp; AWS QuickSight &nbsp;·&nbsp; Power BI &nbsp;·&nbsp; AWS Athena &nbsp;·&nbsp; MySQL &nbsp;·&nbsp; Python &nbsp;·&nbsp; SQL &nbsp;·&nbsp; Serri.ai &nbsp;·&nbsp; WhatsApp Business API</>,
                images: [],
            },
        ],
    },
}

const work = {
    label: 'Work',
    title: 'Case Studies',
    description: `Product case studies by ${person.name} — fintech, growth, and partner-led products`,
}

const blog = {
    label: 'Blog',
    title: 'Writing about product and growth',
    description: `Read what ${person.name} has been thinking about`,
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [],
}

export { person, social, home, about, work, blog, gallery, newsletter };
