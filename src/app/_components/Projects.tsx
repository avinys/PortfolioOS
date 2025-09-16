import { useUI } from "@/store/ui";
import ProjectMedia from "./ProjectMedia";
import { projects } from "@/content/projects";

function Projects() {
	const { lite } = useUI();
	return (
		<ul className="space-y-4">
			{projects.map((p) => (
				<li
					key={p.slug}
					className="rounded-lg border border-white/10 p-3"
				>
					<div className="flex items-center justify-between flex-col">
						<h3 className="text-lg font-semibold text-gray-700">
							{p.title}
						</h3>
						<ul className="text-sm text-gray-700 flex flex-row- flex-wrap gap-4">
							{p.stack.map((item) => (
								<li
									className="
              inline-flex items-center justify-center
              rounded-md bg-indigo-100/50 text-indigo-950
              border border-indigo-200/60
              px-2 text-sm font-medium
              shadow-sm
            "
								>
									{item}
								</li>
							))}
						</ul>
					</div>
					<p className="mt-2 text-md text-gray-700">{p.summary}</p>
					<ul className="mt-2 text-md text-gray-700 mb-4 flex flex-row flex-wrap list-none gap-2 items-center justify-center">
						{p.highlights.map((h, i) => (
							<li
								className="
          group flex items-center gap-3 rounded-xl
          border border-indigo-200/70 bg-indigo-100/50 backdrop-blur-sm
          px-4 py-3 shadow-sm w-[20rem] h-[5rem]
          transition text-indigo-950
          hover:shadow-md hover:border-indigo-300
          focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
								key={i}
							>
								{h}
							</li>
						))}
					</ul>
					{lite ? (
						<img
							src="/media/timetracker/poster.jpg"
							alt="TimeTracker poster"
							className="rounded-md border border-white/10"
						/>
					) : (
						<ProjectMedia
							webmSrc="/media/timetracker/timetracker.webm"
							gifSrc="/media/timetracker/timetracker.gif"
							poster="/media/timetracker/poster.jpg"
							alt="Browsing the TimeTracker app"
						/>
					)}
					<div className="flex flex-row gap-8 justify-center items-center text-md text-center mt-4">
						{p.links?.code && (
							<div>
								<a
									href={p.links.code}
									className="underline opacity-90 hover:opacity-70"
									target="_blank"
								>
									Link to GitHub
								</a>
							</div>
						)}
						{p.links?.url && (
							<div>
								<a
									href={p.links.url}
									className="underline opacity-90 hover:opacity-70 text-indigo-700"
									target="_blank"
								>
									Link to website
								</a>
							</div>
						)}
					</div>
				</li>
			))}
		</ul>
	);
}

export default Projects;
