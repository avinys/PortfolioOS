import { experiences } from "@/content/profile";

export default function Experience() {
  return (
    <div className="space-y-4 px-6 py-4">
      {experiences.map((experience) => (
        <article
          key={experience.company + experience.role}
          className="border-accent-200/70 bg-surface rounded-xl border px-5 py-4 shadow-sm"
        >
          <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
            <div>
              <h2 className="text-foreground text-lg font-semibold">
                {experience.company}
              </h2>
              <p className="text-foreground font-medium">{experience.role}</p>
            </div>
            <span
              className={
                "rounded-full border px-3 py-1 text-xs font-semibold " +
                (experience.current
                  ? "border-accent-300 bg-accent-100 text-accent-700"
                  : "border-border-strong text-muted")
              }
            >
              {experience.period}
            </span>
          </header>

          <p className="text-muted mt-3 text-sm">{experience.summary}</p>
          <ul className="text-foreground mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
