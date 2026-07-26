"use client";
import { useLayoutEffect } from "react";
import { experiences, profile } from "@/content/profile";
import { useUI } from "@/store/ui";
import { useEffect } from "react";
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

const previousExperience = experiences.find(
  (experience) => !experience.current,
);

export default function Desktop() {
  const bp = useBreakpoint();
  const hydrateWindowLayouts = useUI((state) => state.hydrateWindowLayouts);

  useEffect(() => {
    hydrateWindowLayouts();
  }, [hydrateWindowLayouts]);

  useLayoutEffect(() => {
    document.documentElement.dataset.portfolioReady = "true";

    return () => {
      document.documentElement.dataset.portfolioReady = "false";
    };
  }, []);

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
            {profile.name}
          </h1>
          <p className="mt-2 text-lg font-medium">{profile.headline}</p>
          <p className="mt-3 text-sm leading-6">{profile.introduction}</p>
          {previousExperience && (
            <p className="mt-3 text-sm leading-6">
              Previously {previousExperience.role} at{" "}
              {previousExperience.company}
              {" ("}
              {previousExperience.period}
              {"). "}
              {previousExperience.summary} {previousExperience.highlights[2]}
            </p>
          )}
          <p className="mt-3 text-sm leading-6">
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
