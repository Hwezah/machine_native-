// Edit prices here. Every figure on /pricing is read from this file.

export const currencies = ["UGX", "USD"] as const;
export type Currency = (typeof currencies)[number];

export type Tier = {
  name: string;
  badge: string;
  featured?: boolean;
  price: Record<Currency, string>;
  unit: string;
  body: string;
  items: string[];
  cta: string;
};

export const tiers: Tier[] = [
  {
    name: "Launch",
    badge: "Websites",
    price: { UGX: "UGX 2,000,000", USD: "$530" },
    unit: "starting, fixed scope",
    body: "A marketing site for a company that needs to look established and load fast.",
    items: [
      "Up to 8 pages",
      "Custom design, no templates",
      "CMS for all content",
      "SEO & analytics setup",
      "Vercel deployment",
      "4–6 weeks",
    ],
    cta: "Get a quote",
  },
  {
    name: "Product",
    badge: "Most common",
    featured: true,
    price: { UGX: "UGX 8,500,000", USD: "$2,250" },
    unit: "starting, phased",
    body: "A web or mobile application with real users, permissions and data.",
    items: [
      "Discovery week included",
      "Web app or iOS + Android",
      "Auth, roles & admin tooling",
      "Integrations & migrations",
      "Weekly demos on staging",
      "8–16 weeks",
    ],
    cta: "Start a project",
  },
  {
    name: "Partner",
    badge: "Retainer",
    price: { UGX: "UGX 3,000,000", USD: "$790" },
    unit: "per month, 6-month minimum",
    body: "A standing team for companies shipping continuously.",
    items: [
      "Dedicated engineering days",
      "Roadmap planning with you",
      "Monitoring & incident response",
      "Quarterly architecture review",
      "Priority turnaround",
      "Rolling, cancel with 30 days",
    ],
    cta: "Talk to us",
  },
];

export const pricingNote: Record<Currency, string> = {
  UGX: "Figures are starting points for a typical scope; a fixed quote follows discovery. USD equivalents use an indicative rate of UGX 3,800 to the dollar. Care retainers start at UGX 1,200,000/month and cover hosting, monitoring, security patches and a monthly change budget.",
  USD: "Figures are starting points for a typical scope; a fixed quote follows discovery. Billed in USD for clients outside Uganda. Care retainers start at $320/month and cover hosting, monitoring, security patches and a monthly change budget.",
};
