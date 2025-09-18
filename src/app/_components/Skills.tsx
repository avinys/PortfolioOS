function Skills() {
  return (
    <div className="grid grid-cols-1 gap-4 px-6 py-4 sm:grid-cols-2">
      <SkillGroup
        title="Frontend"
        items={["React", "TypeScript", "Next.js", "Vite", "Tailwind"]}
      />
      <SkillGroup
        title="Backend"
        items={[".NET 8", "EF Core", "REST", "JWT Auth"]}
      />
      <SkillGroup
        title="DevOps"
        items={["Ubuntu", "Nginx", "systemd", "MySQL"]}
      />
      <SkillGroup title="Tools" items={["Git", "GitHub", "CI basics"]} />
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
