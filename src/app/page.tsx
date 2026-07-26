import { experiences, profile } from "@/content/profile";
import Desktop from "./_components/Desktop";

const [currentExperience, previousExperience] = experiences;

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://arvydasvingis.com/#person",
  name: profile.name,
  url: "https://arvydasvingis.com",
  image: "https://arvydasvingis.com/av_os.png",
  jobTitle: currentExperience.role,
  worksFor: {
    "@type": "Organization",
    name: currentExperience.company,
    url: "https://www.vinted.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.education.institution,
    url: "https://ktu.edu",
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: currentExperience.role,
      description: [
        currentExperience.summary,
        ...currentExperience.highlights,
      ].join(" "),
      skills:
        "React, TypeScript, frontend architecture, modularization, service extraction, Prometheus, Grafana, observability",
    },
    {
      "@type": "Occupation",
      name: previousExperience.role,
      description: [
        previousExperience.summary,
        ...previousExperience.highlights,
      ].join(" "),
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
