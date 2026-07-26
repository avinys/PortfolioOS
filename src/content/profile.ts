export type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: string[];
};

export const profile = {
  name: "Arvydas Vingis",
  headline: "Web Engineer at Vinted",
  introduction:
    "I build and own core marketplace experiences across Vinted's homepage, catalog, and search. I enjoy working where product, user experience, and well-structured engineering meet.",
  education: {
    degree: "Software Systems, Bachelor of Computing",
    institution: "Kaunas University of Technology",
  },
} as const;

export const experiences: Experience[] = [
  {
    company: "Vinted",
    role: "Web Engineer",
    period: "Current",
    current: true,
    summary:
      "Building and owning core customer-facing experiences across Vinted's marketplace.",
    highlights: [
      "Build and own core customer-facing homepage, catalog, and search surfaces.",
      "Deliver UI changes supporting current product and business initiatives.",
      "Advance frontend modularization and support service extractions from the frontend side.",
      "Implement observability and metrics using Prometheus and Grafana dashboards.",
      "Own the reliability, maintenance, and evolution of the areas I work on.",
    ],
  },
  {
    company: "EY",
    role: "Technology Consultant",
    period: "3-month engagement",
    current: false,
    summary:
      "Modeled governmental institutions' metadata for an EU interoperability initiative.",
    highlights: [
      "Collaborated with institutional representatives to document data holdings and refine data models.",
      "Analyzed legal documents and translated institutional requirements into metadata models.",
      "Used SEMIC vocabularies to enrich metadata and improve interoperability.",
    ],
  },
];
