"use client";
import { useBreakpoint } from "../hooks/useBreakpoint";
import About from "./About";
import AppWindow from "./AppWindow";
import Contacts from "./Contacts";
import Experience from "./Experience";
import Dock from "./Dock";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import TerminalPane from "./Terminal";

export default function Desktop() {
  const bp = useBreakpoint();

  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--bg-start),var(--bg-end))]" />
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <img
          className="h-[min(40rem, 30rem)] aspect-square object-contain opacity-75"
          src="/av.png"
          alt="AV logo"
        />
      </div>
      <header className="text-foreground absolute inset-0 -z-10 flex items-center justify-end px-[6vw]">
        <div className="max-w-md text-right">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Arvydas Vingis
          </h1>
          <p className="mt-2 text-lg font-medium">Web Engineer at Vinted</p>
          <p className="mt-3 text-sm leading-6">
            Building and owning core customer-facing marketplace experiences
            across homepage, catalog, and search with React, TypeScript,
            frontend architecture, modularization, and service extraction.
            Implementing observability and metrics with Prometheus and Grafana.
          </p>
          <p className="mt-3 text-sm leading-6">
            Previously an EY Technology Consultant working on governmental
            metadata modeling, SEMIC vocabularies, and EU interoperability.
            Interested in AI-assisted engineering, coding agents, harness
            engineering, and loop engineering.
          </p>
        </div>
      </header>
      <div className="flex h-dvh w-screen flex-col overflow-hidden">
        <main id="desktop-area" className="relative flex-1 overflow-hidden">
          <AppWindow id="about" title="About Me" bp={bp}>
            <About />
          </AppWindow>
          <AppWindow id="experience" title="Experience" bp={bp}>
            <Experience />
          </AppWindow>
          <AppWindow id="projects" title="Projects" bp={bp}>
            <Projects />
          </AppWindow>
          <AppWindow id="skills" title="Skills" bp={bp}>
            <Skills />
          </AppWindow>
          <AppWindow id="contacts" title="Contacts" bp={bp}>
            <Contacts />
          </AppWindow>
          <AppWindow id="terminal" title="Terminal" bp={bp}>
            <div className="h-full">
              <TerminalPane />
            </div>
          </AppWindow>
          <AppWindow id="resume" title="Resume" bp={bp}>
            <Resume />
          </AppWindow>
        </main>
        <Dock />
      </div>

      {/* Hint overlay (optional)
			{!wins.projects.open && !wins.about.open && (
				<div className="pointer-events-none absolute left-6 top-6 opacity-70">
					<kbd className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs">
						Open Dock → Projects
					</kbd>
				</div>
			)} */}
    </div>
  );
}
