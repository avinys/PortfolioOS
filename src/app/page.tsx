import Desktop from "./_components/Desktop";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://arvydasvingis.com/#person",
  name: "Arvydas Vingis",
  url: "https://arvydasvingis.com",
  image: "https://arvydasvingis.com/av_os.png",
  jobTitle: "Web Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Vinted",
    url: "https://www.vinted.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Kaunas University of Technology",
    url: "https://ktu.edu",
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Web Engineer",
      description:
        "Builds and owns core customer-facing marketplace experiences across homepage, catalog, and search at Vinted.",
      skills:
        "React, TypeScript, frontend architecture, modularization, service extraction, Prometheus, Grafana, observability",
    },
    {
      "@type": "Occupation",
      name: "Technology Consultant",
      description:
        "Modeled governmental institution metadata for EU interoperability, collaborating with institution representatives and using SEMIC vocabularies.",
    },
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Frontend architecture",
    "Frontend modularization",
    "Service extraction",
    "Prometheus",
    "Grafana",
    "Observability",
    "Metadata modeling",
    "Semantic interoperability",
    "SEMIC vocabularies",
    "AI-assisted software engineering",
    "Coding agents",
    "Harness engineering",
    "Loop engineering",
  ],
  sameAs: [
    "https://github.com/avinys",
    "https://www.linkedin.com/in/arvydasvingis",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Desktop />
    </>
  );
}
