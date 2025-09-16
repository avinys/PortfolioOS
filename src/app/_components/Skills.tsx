function Skills() {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 px-6 py-4">
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
		<div
			className="
        rounded-xl border border-indigo-200/70 bg-white/70 backdrop-blur-sm
        shadow-sm px-4 py-3
        transition hover:shadow-md hover:border-indigo-300
      "
		>
			<h4 className="text-md font-semibold text-slate-700 text-center">
				{title}
			</h4>
			<div className="mt-3 flex flex-wrap justify-center gap-2">
				{items.map((i) => (
					<span
						key={i}
						className="
              inline-flex items-center justify-center
              rounded-md bg-indigo-50 text-indigo-950
              border border-indigo-200/60
              px-3 py-1 text-sm font-medium
              shadow-sm
            "
					>
						{i}
					</span>
				))}
			</div>
		</div>
	);
}

export default Skills;
