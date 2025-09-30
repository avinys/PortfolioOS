"use client";
import { useBreakpoint } from "../hooks/useBreakpoint";
import About from "./About";
import dynamic from "next/dynamic";
const AppWindow = dynamic(() => import("./AppWindow"), { ssr: false });
import Contacts from "./Contacts";
const Dock = dynamic(() => import("./Dock"), { ssr: false });
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
      <div className="flex h-dvh w-screen flex-col overflow-hidden">
        <main id="desktop-area" className="relative flex-1 overflow-hidden">
          <AppWindow id="about" title="About Me" bp={bp}>
            <About />
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
