import { useUI } from "@/store/ui";
import ProjectMedia from "./ProjectMedia";
import { projects } from "@/content/projects";

function Projects() {
  const { lite } = useUI();
  return (
    <ul className="space-y-4">
      {projects.map((p) => (
        <li key={p.slug} className="rounded-lg p-3">
          <div className="flex flex-col items-center justify-between">
            <h3 className="text-foreground text-lg font-semibold">{p.title}</h3>
            <ul className="flex-row- text-foreground flex flex-wrap gap-4 text-sm">
              {p.stack.map((item, i) => (
                <li
                  className="border-accent-200/60 bg-accent-100/50 text-foreground inline-flex items-center justify-center rounded-md border px-2 text-sm font-medium shadow-sm"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-md text-foreground mt-2">{p.summary}</p>
          <ul className="text-md text-foreground mt-2 mb-4 flex list-none flex-row flex-wrap items-center justify-center gap-2">
            {p.highlights.map((h, i) => (
              <li
                className="group border-accent-200/70 bg-accent-100/50 text-foreground hover:border-accent-300 focus:ring-ring/60 flex h-[5rem] w-[20rem] items-center gap-3 rounded-xl border px-4 py-3 shadow-sm backdrop-blur-sm transition hover:shadow-md focus:ring-2 focus:outline-none"
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
              className="border-accent-50/10 rounded-md border"
            />
          ) : (
            <ProjectMedia
              webmSrc="/media/timetracker/timetracker.webm"
              gifSrc="/media/timetracker/timetracker.gif"
              poster="/media/timetracker/poster.jpg"
              alt="Browsing the TimeTracker app"
            />
          )}
          <div className="text-md mt-4 flex flex-row items-center justify-center gap-8 text-center">
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
                  className="text-accent-700 dark:text-accent-300 underline opacity-90 hover:opacity-70"
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
