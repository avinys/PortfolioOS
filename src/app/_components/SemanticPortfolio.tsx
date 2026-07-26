import { contacts, skillGroups } from "@/content/portfolio";
import { experiences, profile } from "@/content/profile";
import { projects } from "@/content/projects";

const resumeUrl = "/resume/Arvydas-Vingis-CV.pdf";

export default function SemanticPortfolio() {
  return (
    <main className="semantic-document mx-auto max-w-5xl px-6 py-12 sm:px-10">
      <header className="border-border border-b pb-8">
        <p className="text-accent-700 dark:text-accent-300 text-sm font-semibold tracking-wide uppercase">
          Portfolio
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="text-muted mt-3 text-xl">{profile.headline}</p>
        <p className="mt-5 max-w-3xl leading-7">{profile.introduction}</p>
        <nav
          aria-label="Portfolio sections"
          className="mt-6 flex flex-wrap gap-4"
        >
          {[
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-accent-700 dark:text-accent-300 underline underline-offset-4"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section
        id="experience"
        className="mt-12"
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title" className="text-2xl font-semibold">
          Experience
        </h2>
        <div className="mt-5 space-y-6">
          {experiences.map((experience) => (
            <article key={experience.company + experience.role}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {experience.role} at {experience.company}
                </h3>
                <p className="text-muted text-sm">{experience.period}</p>
              </div>
              <p className="mt-2">{experience.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mt-12" aria-labelledby="projects-title">
        <h2 id="projects-title" className="text-2xl font-semibold">
          Projects
        </h2>
        <div className="mt-5 space-y-8">
          {projects.map((project) => (
            <article key={project.slug}>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2">{project.summary}</p>
              <p className="text-muted mt-2 text-sm">
                <strong className="text-foreground">Technologies:</strong>{" "}
                {project.stack.join(", ")}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {(project.links?.code || project.links?.url) && (
                <p className="mt-3 flex gap-4">
                  {project.links.code && (
                    <ExternalLink href={project.links.code}>
                      Source code
                    </ExternalLink>
                  )}
                  {project.links.url && (
                    <ExternalLink href={project.links.url}>
                      Live website
                    </ExternalLink>
                  )}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mt-12" aria-labelledby="skills-title">
        <h2 id="skills-title" className="text-2xl font-semibold">
          Skills and interests
        </h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3 className="font-semibold">{group.title}</h3>
              <p className="mt-2 leading-7">{group.items.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="education-title">
        <h2 id="education-title" className="text-2xl font-semibold">
          Education
        </h2>
        <p className="mt-4">
          <strong>{profile.education.degree}</strong>,{" "}
          {profile.education.institution}
        </p>
      </section>

      <section id="contact" className="mt-12" aria-labelledby="contact-title">
        <h2 id="contact-title" className="text-2xl font-semibold">
          Contact
        </h2>
        <ul className="mt-4 space-y-2">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <span className="font-semibold">{contact.label}:</span>{" "}
              <a
                href={contact.href}
                target={
                  contact.href.startsWith("https://") ? "_blank" : undefined
                }
                rel={
                  contact.href.startsWith("https://") ? "noreferrer" : undefined
                }
                className="text-accent-700 dark:text-accent-300 underline underline-offset-4"
              >
                {contact.value}
              </a>
            </li>
          ))}
          <li>
            <span className="font-semibold">Resume:</span>{" "}
            <a
              href={resumeUrl}
              className="text-accent-700 dark:text-accent-300 underline underline-offset-4"
            >
              Download PDF
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-accent-700 dark:text-accent-300 underline underline-offset-4"
    >
      {children}
    </a>
  );
}
