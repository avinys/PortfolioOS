import { Project } from "@/content/projects";
import { useState } from "react";
import ProjectMedia from "./ProjectMedia";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowBigDown,
  ChevronDown,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

function ProjectItem({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="mt-4 w-full px-4">
      <div
        className="project-title text-fg bg-accent-200 border-accent-50/0 grid w-full cursor-pointer grid-cols-[auto_1rem] rounded-2xl border-2 px-4 py-1 text-center transition duration-300 hover:-translate-y-1 hover:border-[var(--color-ring)] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:transform-none dark:bg-indigo-900"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h3 className="text-foreground text-lg font-semibold">{p.title}</h3>
        {open ? <ChevronDown /> : <ChevronRight />}
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg p-3"
          >
            <div className="flex flex-col items-center justify-between overflow-hidden">
              <ul className="text-foreground mt-1 flex flex-row flex-wrap justify-center gap-4 text-sm">
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

            <ProjectMedia
              webmSrc={p.files.webm}
              gifSrc={p.files.gif}
              posterSrc={p.files.poster}
              videoAlt={p.files.videoAlt}
              posterAlt={p.files.posterAlt}
            />

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
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default ProjectItem;
