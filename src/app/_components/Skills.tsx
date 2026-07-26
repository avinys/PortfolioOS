function Skills() {
  return (
    <div className="grid grid-cols-1 gap-4 px-6 py-4 sm:grid-cols-2">
      <SkillGroup
        title="Web Engineering"
        items={[
          "React",
          "TypeScript",
          "Next.js",
          "Accessible UI",
          "Marketplace experiences",
        ]}
      />
      <SkillGroup
        title="Frontend Architecture"
        items={[
          "Modularization",
          "Service extraction",
          "Component architecture",
          "UI ownership",
        ]}
      />
      <SkillGroup
        title="Observability"
        items={["Prometheus", "Grafana", "Metrics", "Dashboards"]}
      />
      <SkillGroup
        title="Data Interoperability"
        items={[
          "Metadata modeling",
          "SEMIC vocabularies",
          "Semantic interoperability",
          "Data documentation",
        ]}
      />
      <SkillGroup
        title="Backend & Infrastructure"
        items={[".NET 8", "REST APIs", "MySQL", "Ubuntu", "Nginx", "Git"]}
      />
      <SkillGroup
        title="Engineering Interests & AI"
        items={[
          "AI-assisted software engineering",
          "Coding agents & agentic workflows",
          "Harness engineering",
          "Loop engineering",
          "Reusable agent skills",
          "Emerging AI tools",
        ]}
      />
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-accent-200/70 bg-surface hover:border-accent-300 rounded-xl border px-4 py-3 shadow-sm backdrop-blur-sm transition hover:shadow-md">
      <h4 className="text-md text-foreground text-center font-semibold">
        {title}
      </h4>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {items.map((i) => (
          <span
            key={i}
            className="bg-surface border-accent-200/60 text-foreground inline-flex items-center justify-center rounded-md border px-3 py-1 text-sm font-medium shadow-sm"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
