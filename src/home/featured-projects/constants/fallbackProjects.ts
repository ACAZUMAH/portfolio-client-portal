import type { FeaturedProject } from "../interfaces";

export const fallbackFeaturedProjects: FeaturedProject[] = [
  {
    id: "fallback-livelycura",
    title: "Healthcare Operations Platform",
    slug: "healthcare-operations-platform",
    summary:
      "A multi-tenant healthcare system connecting patient flows, pharmacies, labs, couriers, billing, permissions, and operational dashboards.",
    role: "Full-stack architecture, GraphQL APIs, admin UX, automation",
    company: "Healthcare",
    client: "Operations Platform",
    stack: ["TypeScript", "React", "GraphQL", "Node.js", "MongoDB"],
    outcomes: ["Unified care, pharmacy, lab, and delivery workflows"],
    status: "LIVE",
    visibility: "PRIVATE_SUMMARY",
  },
  {
    id: "fallback-courier-mobile",
    title: "Courier Mobile Workflow",
    slug: "courier-mobile-workflow",
    summary:
      "A React Native field workflow for delivery riders with task queues, station context, profile setup, and performance views.",
    role: "Mobile UI and state architecture",
    company: "Logistics",
    client: "Courier Product",
    stack: ["React Native", "Redux Toolkit", "TypeScript", "Firebase"],
    outcomes: ["Cleaner mobile operations for riders and dispatch teams"],
    status: "CLIENT_WORK",
    visibility: "PRIVATE_SUMMARY",
  },
  {
    id: "fallback-payments",
    title: "Payments & Investment Portal",
    slug: "payments-investment-portal",
    summary:
      "A finance-facing portal for collections, transaction visibility, subaccount flows, and payment operations.",
    role: "Backend services, payment integrations, dashboards",
    company: "Fintech",
    client: "Investment Platform",
    stack: ["Node.js", "Stripe", "Paystack", "React", "MongoDB"],
    outcomes: ["More reliable payment tracking and financial operations"],
    status: "LIVE",
    visibility: "PRIVATE_SUMMARY",
  },
];
