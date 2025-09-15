"use client";
import { projects } from "@/content/projects";
import { useUI } from "@/store/ui";
import About from "./About";
import AppWindow from "./AppWindow";
import Dock from "./Dock";
import TerminalPane from "./Terminal";

export default function Desktop() {
	const wins = useUI((s) => s.wins);
	return (
		<div className="relative h-dvh w-screen ">
			{/* Wallpaper/branding */}
			<div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_30%,#000_20%,transparent_60%)]" />

			{/* Windows */}
			<AppWindow id="about" title="About Me">
				<div className="prose prose-invert max-w-none">
					<About />
				</div>
			</AppWindow>

			<AppWindow id="projects" title="Projects">
				<ul className="space-y-4">
					{projects.map((p) => (
						<li
							key={p.slug}
							className="rounded-lg border border-white/10 p-3"
						>
							<div className="flex items-center justify-between">
								<h3 className="text-base font-semibold">
									{p.title}
								</h3>
								<div className="text-xs text-white/70">
									{p.stack.join(" · ")}
								</div>
							</div>
							<p className="mt-2 text-sm text-white/90">
								{p.summary}
							</p>
							<ul className="mt-2 list-disc pl-5 text-sm text-white/80">
								{p.highlights.map((h, i) => (
									<li key={i}>{h}</li>
								))}
							</ul>
							{p.links?.code && (
								<div className="mt-2 text-sm">
									<a
										href={p.links.code}
										className="underline opacity-90 hover:opacity-100"
										target="_blank"
									>
										Code
									</a>
								</div>
							)}
						</li>
					))}
				</ul>
			</AppWindow>

			<AppWindow id="skills" title="Skills">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<SkillGroup
						title="Frontend"
						items={[
							"React",
							"TypeScript",
							"Next.js",
							"Vite",
							"Tailwind",
						]}
					/>
					<SkillGroup
						title="Backend"
						items={[".NET 8", "EF Core", "REST", "JWT Auth"]}
					/>
					<SkillGroup
						title="DevOps"
						items={["Ubuntu", "Nginx", "systemd", "MySQL"]}
					/>
					<SkillGroup
						title="Tools"
						items={["Git", "GitHub", "CI basics"]}
					/>
				</div>
			</AppWindow>

			<AppWindow id="contact" title="Contact">
				<p className="text-sm">
					Email:{" "}
					<a className="underline" href="me@arvydasvingis.com">
						me@arvydasvingis.com
					</a>
				</p>
				<p className="text-sm">
					GitHub:{" "}
					<a
						className="underline"
						href="https://github.com/avinys"
						target="_blank"
					>
						github.com/avinys
					</a>
				</p>
				<p className="text-sm">
					LinkedIn:{" "}
					<a
						className="underline"
						href="https://www.linkedin.com/in/arvydasvingis"
						target="_blank"
					>
						https://www.linkedin.com/in/arvydasvingis
					</a>
				</p>
			</AppWindow>

			<AppWindow id="terminal" title="Terminal">
				<div className="h-full">
					<TerminalPane />
				</div>
			</AppWindow>

			<Dock />

			{/* Hint overlay (optional) */}
			{!wins.projects.open && !wins.about.open && (
				<div className="pointer-events-none absolute left-6 top-6 opacity-70">
					<kbd className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs">
						Open Dock → Projects
					</kbd>
				</div>
			)}
		</div>
	);
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
	return (
		<div className="rounded-lg border border-white/10 p-3">
			<h4 className="text-sm font-semibold">{title}</h4>
			<div className="mt-2 flex flex-wrap gap-2">
				{items.map((i) => (
					<span
						key={i}
						className="rounded-md border border-white/15 bg-white/5 px-2 py-0.5 text-xs"
					>
						{i}
					</span>
				))}
			</div>
		</div>
	);
}
