"use client";

import { Download, ExternalLink, Printer } from "lucide-react";
import React from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

const PDF_URL = "/resume/Arvydas-Vingis-CV.pdf";

export default function Resume() {
  const bp = useBreakpoint();
  console.log(bp);

  const canEmbed =
    bp === "desktop" &&
    typeof navigator !== "undefined" &&
    !/iPad|iPhone|iPod/i.test(navigator.userAgent);
  const openPdf = () => window.open(PDF_URL, "_blank", "noopener,noreferrer");
  const downloadPdf = () => {
    const a = document.createElement("a");
    a.href = PDF_URL;
    a.download = "Arvydas-Vingis-CV.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  const printPdf = () => window.open(PDF_URL, "_blank")?.print();

  return (
    <div className="space-y-5 px-5 py-4">
      {/* Actions */}
      <div className="flex items-center gap-2">
        <ActionBtn
          onClick={openPdf}
          icon={<ExternalLink size={16} />}
          label="Open PDF"
        />
        <ActionBtn
          onClick={downloadPdf}
          icon={<Download size={16} />}
          label="Download"
        />
        <ActionBtn
          onClick={printPdf}
          icon={<Printer size={16} />}
          label="Print"
        />
      </div>
      {/* Header summary */}
      <div className="bg-surface border-accent-200/70 rounded-xl border px-4 py-3 shadow-sm backdrop-blur-sm">
        <h2 className="text-fg text-lg font-semibold">
          Arvydas Vingis — Frontend / Full-Stack Developer
        </h2>
        <p className="text-fg-muted text-sm">
          React + TypeScript, Next.js, .NET APIs. I like clean architecture,
          accessible UI, and shipping solutions, creating real value.
        </p>
      </div>
      {/* Education */}
      <Section title="Education">
        <div className="text-fg flex items-baseline justify-between text-sm">
          <span>
            <strong>Bachelor of Software Systems</strong>, Kaunas University of
            Technology
          </span>
          <span className="text-fg-muted text-xs">2022 – Present · Kaunas</span>
        </div>
        <ul className="text-fg list-disc pl-5 text-sm">
          <li>
            Fintech track — digital finance, system design, applied software
            solutions
          </li>
          <li>
            Erasmus exchange, University of Bologna (Spring 2025) —
            international teamwork
          </li>
        </ul>
      </Section>
      {/* Skills */}
      <Section title="Skills">
        <div className="grid grid-cols-1 gap-3">
          <Card
            title="Languages"
            items={["TypeScript", "JavaScript", "C#", "SQL"]}
          />
          <Card
            title="Frameworks / Libraries"
            items={["React", "Next.js", "Tailwind", ".NET 8", "EF Core"]}
          />
          <Card
            title="Tools / Platforms"
            items={[
              "Git",
              "Ubuntu",
              "Nginx",
              "systemd",
              "MySQL",
              "Docker (basics)",
            ]}
          />
        </div>
      </Section>
      {/* Projects */}
      <Section title="Projects">
        <Project
          title="TimeTracker"
          stack="React · TypeScript · TanStack Query · .NET 8 · EF Core · MySQL · Zoho Mail SMTP"
          bullets={[
            "JWT authentication; email confirmation & password reset with expiring tokens",
            "Time entries CRUD with validation; clean architecture",
            "Deployed on cloud Ubuntu server with systemd & Nginx",
          ]}
          links={{
            code: "https://github.com/avinys/TimeTracker",
            live: "https://timetracker.arvydasvingis.com",
          }}
        />
        <Project
          title="Portfolio OS (this site)"
          stack="Next.js · React · Tailwind CSS"
          bullets={[
            "Desktop-style environment with draggable windows, dock navigation, and a functional terminal",
            "Dark / light themes and a fast lite mode",
            "Deployed on cloud Ubuntu server with Nginx",
          ]}
          links={{
            code: "https://github.com/avinys/PortfolioOS",
            live: undefined,
          }}
        />
        <Project
          title="Karate Tournament Management System"
          stack="Node.js · Express.js"
          bullets={[
            "Match entry, bracket visualization, and result tracking",
            "Tested and successfully deployed in real local club tournaments",
            "Improved administrative efficiency by ~60% and reduced paper usage by ~90%",
          ]}
          links={{
            code: "https://github.com/avinys/Tournament-bracket",
            live: undefined,
          }}
        />
      </Section>
      {/* Courses (short) */}
      <Section title="Courses">
        <p className="text-fg text-sm">
          Udemy (2023–2025): Modern React with Redux, The Modern JavaScript
          Bootcamp, The Advanced JavaScript Concepts, 100 Days of Code (Python)
        </p>
      </Section>

      {canEmbed && (
        <details className="mt-2">
          <summary className="text-fg-muted cursor-pointer text-sm">
            Preview PDF
          </summary>
          <iframe
            src={PDF_URL}
            className="h-[60vh] w-full"
            title="Resume PDF"
          />
        </details>
      )}
    </div>
  );
}

function ActionBtn({
  onClick,
  icon,
  label,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className="focus:[var(--ring)] hover:border-accent-300 bg-surface border-accent-200/70 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm shadow-sm backdrop-blur-sm transition hover:shadow-md focus:ring-2 focus:outline-none"
    >
      <span className="inline-flex h-5 w-5 items-center justify-center">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-accent-200/70 hover:border-accent-300 bg-surface rounded-xl border px-4 py-3 shadow-sm backdrop-blur-sm transition hover:shadow-md">
      <h3 className="text-md text-fg font-semibold">{title}</h3>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-accent-200/60 bg-surface rounded-lg border px-3 py-2 shadow-sm">
      <h4 className="text-fg text-sm font-semibold">{title}</h4>
      <div className="mt-2 flex flex-wrap gap-2">
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

// function Grid({ two, children }: { two?: boolean; children: React.ReactNode }) {
//   return (
//     <div className={`grid gap-3 ${two ? "sm:grid-cols-2" : "grid-cols-1"}`}>
//       {children}
//     </div>
//   );
// }

// function Line({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex items-baseline justify-between text-sm text-slate-800">
//       {children}
//     </div>
//   );
// }
// function Right({ children }: { children: React.ReactNode }) {
//   return <span className="text-xs text-slate-500">{children}</span>;
// }

function Project({
  title,
  stack,
  bullets,
  links,
}: {
  title: string;
  stack?: string;
  bullets: string[];
  links?: { code?: string; live?: string };
}) {
  return (
    <div className="border-accent-200/60 rounded-lg border px-3 py-2 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-fg text-sm font-semibold">{title}</h4>
        {stack ? (
          <span className="text-fg-muted text-[11px]">{stack}</span>
        ) : null}
      </div>
      <ul className="text-fg mt-2 list-disc pl-5 text-sm">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {links && (links.code || links.live) ? (
        <div className="mt-2 flex gap-4 text-sm">
          {links.code && (
            <a
              className="underline hover:opacity-70"
              href={links.code}
              target="_blank"
            >
              Code
            </a>
          )}
          {links.live && (
            <a
              className="underline hover:opacity-70"
              href={links.live}
              target="_blank"
            >
              Live
            </a>
          )}
        </div>
      ) : null}
    </div>
  );
}
