// All site copy and data lives here so it can be edited without touching layout code.

export const site = {
  name: "MachineNative",
  tagline: "INVENT.RELATE",
  url: "https://machinenative.co",
  description:
    "A small, senior studio in Kampala building websites, web apps and mobile apps for companies that need them to actually work.",
  footerBlurb: "Websites, web apps and mobile apps for companies that depend on them.",
  availability: "Available for Q4 2026 — 2 slots",
  timeZone: "Africa/Kampala",
};

export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const clients = [
  "Trax Aviation Limited",
  "GrillMark",
  "Salvation Foods Ltd",
  "COMAFRO",
  "Baluti & Co Advocates",
];

export const stats = [
  { value: "4", label: "Years shipping" },
  { value: "4", label: "Products in production" },
  { value: "4", label: "People, all engineers" },
  { value: "100%", label: "Client retention" },
];

export const services = [
  {
    num: "01",
    title: "Websites",
    body: "Marketing sites that load instantly and are genuinely editable by the people who own them.",
    stack: "Next.js · Vercel · Headless CMS",
  },
  {
    num: "02",
    title: "Web apps",
    body: "Internal tools, dashboards and customer portals where the workflow is the product.",
    stack: "React · Node · Postgres",
  },
  {
    num: "03",
    title: "Mobile apps",
    body: "One codebase, two stores, native where it counts — offline, camera, push.",
    stack: "React Native · Expo",
  },
  {
    num: "04",
    title: "Care & scale",
    body: "Hosting, monitoring, security and a monthly change budget so nothing rots.",
    stack: "Vercel · Sentry · CI/CD",
  },
];

export const servicesFull = [
  {
    num: "01",
    title: "Websites",
    long: "Design and build of marketing sites, from positioning and copy structure through to a CMS your team can run without calling us. Static-first, deployed on edge infrastructure, measured on real-user performance rather than a lab score.",
    items: ["Design & art direction", "Next.js build", "Headless CMS setup", "SEO & analytics", "Vercel deployment"],
  },
  {
    num: "02",
    title: "Web applications",
    long: "Systems with real users, real permissions and real data. We start with the workflow, model it properly, and build an interface that a trained operator can move through quickly — not a CRUD form dressed in a design system.",
    items: [
      "Discovery & data modelling",
      "Auth & role permissions",
      "Dashboards & reporting",
      "Third-party integrations",
      "Load & security testing",
    ],
  },
  {
    num: "03",
    title: "Mobile applications",
    long: "Cross-platform apps for iOS and Android sharing one codebase, dropping to native modules where the hardware demands it. We handle store submission, review responses and release trains.",
    items: ["React Native / Expo", "Offline-first sync", "Push & deep links", "App Store & Play release", "Crash & usage analytics"],
  },
  {
    num: "04",
    title: "Care & scale",
    long: "A retainer for everything after launch: dependency updates, uptime and error monitoring, incident response, and a fixed monthly allocation for changes so improvements do not need a new contract each time.",
    items: [
      "24/7 uptime monitoring",
      "Security patching",
      "Monthly change budget",
      "Quarterly performance audit",
      "Named engineer on call",
    ],
  },
];

export type Project = {
  client: string;
  year: string;
  status: "Live" | "In progress";
  title: string;
  featuredTitle?: string;
  body: string;
  featuredBody?: string;
  tags: string;
  featuredTags?: string;
  url?: string;
  urlLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    client: "Trax Aviation",
    year: "2024",
    status: "Live",
    title: "Operations portal",
    featuredTitle: "Operations portal for an aviation services firm",
    body: "Scheduling, compliance and document control for an aviation services firm — replacing email spreadsheets with an audited system.",
    featuredBody:
      "A scheduling and compliance portal replacing spreadsheets shared over email — role-based access, audit trails, and exportable records for regulators.",
    tags: "Web app",
    featuredTags: "Web app · Dashboard",
    featured: true,
  },
  {
    client: "GrillMark",
    year: "2025",
    status: "Live",
    title: "Brand site & catalogue",
    featuredTitle: "Brand site and product catalogue",
    body: "Consumer brand site for the GrillMark line under Salvation Foods Ltd, with a self-serve product catalogue and retailer locator.",
    featuredBody:
      "A consumer site for the sausage brand under Salvation Foods Ltd, with a retailer locator and a catalogue their marketing team updates themselves.",
    tags: "Website · CMS",
    url: "https://grillmark.com",
    urlLabel: "grillmark.com",
    featured: true,
  },
  {
    client: "Baluti & Co",
    year: "2023",
    status: "Live",
    title: "Advocates practice site",
    body: "A credibility-first site for a law firm: practice areas, team profiles and an enquiry flow that routes to the right advocate.",
    tags: "Website",
  },
  {
    client: "COMAFRO",
    year: "2026",
    status: "In progress",
    title: "Logistics platform",
    body: "Shipment tracking and client-facing status for a logistics operator. Currently in build — first phase ships this quarter.",
    tags: "Web app",
  },
];

// Placeholder — awaiting a real client quote and attribution.
export const testimonial = {
  quote: "They shipped in six weeks what our last vendor scoped for six months.",
  attribution: "Placeholder quote — Operations Lead, Trax Aviation Limited",
};

export const processSteps = [
  {
    num: "01",
    title: "Scope",
    body: "A paid discovery week. We map the workflow, agree what success means in numbers, and write the specification we will both be held to.",
    duration: "1 week",
  },
  {
    num: "02",
    title: "Design",
    body: "Interface design in the browser, not in static mockups. You click through the real thing before a line of production code is written.",
    duration: "1–3 weeks",
  },
  {
    num: "03",
    title: "Build",
    body: "Weekly demos on a live staging URL. Every change is visible the day it lands, so course corrections cost hours instead of months.",
    duration: "3–10 weeks",
  },
  {
    num: "04",
    title: "Launch",
    body: "Migration, monitoring, analytics and a handover session recorded for whoever joins your team next year.",
    duration: "1 week",
  },
  {
    num: "05",
    title: "Care",
    body: "A retainer with a named engineer, monthly change budget, and a quarterly review of performance, cost and what to build next.",
    duration: "Ongoing",
  },
];

export const aboutIntro = [
  "Machine Native is a four-person studio. Everyone who talks to you also writes the code — there is no account layer, no handoff, no telephone game between a strategist and the person who actually has to build the thing.",
  "Four years in, we’ve shipped four products across aviation ops, food manufacturing, logistics and legal services. We work in long relationships rather than one-off launches, which is why the client list is short and the retention is not.",
];

export const values = [
  {
    num: "01",
    title: "Engineers only",
    body: "The person in your kickoff call is the person writing your code. No account management layer, no telephone game.",
  },
  {
    num: "02",
    title: "Fixed per phase",
    body: "Each phase is quoted as a number before it starts. If we estimated badly, that is our problem, not your invoice.",
  },
  {
    num: "03",
    title: "Boring infrastructure",
    body: "Proven stacks on managed platforms. We optimise for the thing still running in three years, not for novelty.",
  },
  {
    num: "04",
    title: "You own everything",
    body: "Your repository, your accounts, your data. No proprietary CMS, no lock-in, no hostage situation.",
  },
];

export const faqs = [
  {
    q: "How long does a project take?",
    a: "A marketing site is typically four to six weeks from kickoff. An application runs eight to sixteen weeks for a first production release, split into phases you approve individually.",
  },
  {
    q: "Do you work with companies outside your current industries?",
    a: "Yes. Aviation, food, logistics and legal is where we have depth, but the constraint we care about is whether the software is load-bearing for your business, not what sector you are in.",
  },
  {
    q: "Who owns the code?",
    a: "You do, from the first commit. Everything lives in your repository under your organisation, deployed to your accounts. If you ever leave, nothing needs to be handed over because it was never ours.",
  },
  {
    q: "Can you take over an existing site or app?",
    a: "Often, yes. We start with a paid audit of the codebase and infrastructure, then give you an honest recommendation — sometimes that recommendation is to rebuild, and sometimes it is to leave it alone.",
  },
  {
    q: "What happens after launch?",
    a: "Either you take the keys and run it yourself, or you move onto a care retainer with monitoring, patching and a monthly change budget. We do not make the retainer a condition of working with us.",
  },
  {
    q: "Why is the team so small?",
    a: "Because four senior engineers who all talk to clients directly ship faster than a larger team with a coordination layer. It also means we take a limited number of projects at a time.",
  },
];

export const contactLines = [
  { label: "Email", value: "info@machinenative.co", href: "mailto:info@machinenative.co" },
  { label: "Phone", value: "0742 696 353", href: "tel:+256742696353" },
  { label: "Based in", value: "Uganda, working worldwide" },
  { label: "Web", value: "machinenative.co", href: "https://machinenative.co" },
  { label: "Response", value: "Within one business day" },
];
