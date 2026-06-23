import type { SkillGroup } from "./interfaces";

export const fallbackSkillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    accent: "#159bd8",
    description: "Typed, practical languages for full-stack product delivery.",
    metrics: [
      { label: "TypeScript", level: 96 },
      { label: "JavaScript", level: 92 },
      { label: "Python", level: 78 },
    ],
    tools: ["TypeScript", "JavaScript", "Python", "HTML/CSS"],
  },
  {
    title: "Frontend",
    icon: "frontend",
    accent: "#22a6df",
    description: "Responsive portals, dashboards, and polished client-facing UI.",
    metrics: [
      { label: "React", level: 96 },
      { label: "Apollo Client", level: 88 },
      { label: "React Native", level: 86 },
    ],
    tools: [
      "React",
      "React Native",
      "Mantine",
      "Chakra UI",
      "Ant Design",
      "Redux Toolkit",
      "Apollo Client",
    ],
  },
  {
    title: "Backend",
    icon: "backend",
    accent: "#004643",
    description: "GraphQL APIs, authentication, background workflows, and services.",
    metrics: [
      { label: "Node.js", level: 94 },
      { label: "GraphQL", level: 92 },
      { label: "Express", level: 88 },
    ],
    tools: ["Node.js", "Express", "GraphQL", "Apollo Server", "JWT", "REST APIs"],
  },
  {
    title: "Database & Storage",
    icon: "database",
    accent: "#4f6f68",
    description: "Data modelling for real products, operations, and reporting.",
    metrics: [
      { label: "MongoDB", level: 92 },
      { label: "Mongoose", level: 90 },
      { label: "Firebase", level: 78 },
    ],
    tools: ["MongoDB", "Mongoose", "Firebase", "Redis", "Cloud Storage"],
  },
  {
    title: "Cloud & Payments",
    icon: "cloud",
    accent: "#159bd8",
    description: "Deployment, integrations, payment flows, and production operations.",
    metrics: [
      { label: "DigitalOcean", level: 84 },
      { label: "Vercel", level: 82 },
      { label: "Payments", level: 86 },
    ],
    tools: ["DigitalOcean", "Vercel", "Render", "Firebase", "Stripe", "Paystack", "Hubtel"],
  },
  {
    title: "Tools & Workflow",
    icon: "workflow",
    accent: "#3b4652",
    description: "Shipping discipline, automation, debugging, and collaboration.",
    metrics: [
      { label: "Git", level: 92 },
      { label: "GitHub Actions", level: 78 },
      { label: "AI Automation", level: 86 },
    ],
    tools: ["Git", "GitHub", "Docker", "GraphQL Codegen", "Codex", "Claude", "n8n"],
  },
];

export const categoryAliases: Record<string, string> = {
  backend: "Backend",
  cloud: "Cloud & Payments",
  database: "Database & Storage",
  databases: "Database & Storage",
  db: "Database & Storage",
  devops: "Cloud & Payments",
  frontend: "Frontend",
  language: "Languages",
  languages: "Languages",
  mobile: "Frontend",
  payment: "Cloud & Payments",
  payments: "Cloud & Payments",
  storage: "Database & Storage",
  tooling: "Tools & Workflow",
  tools: "Tools & Workflow",
  workflow: "Tools & Workflow",
};
