"use client";
import About from "./About";
import AppWindow from "./AppWindow";
import Contacts from "./Contacts";
import Dock from "./Dock";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import TerminalPane from "./Terminal";

export default function Desktop() {
  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      <div className="dark: absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--bg-start),var(--bg-end))]" />
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <img className="h-[40rem] opacity-75" src="/av.png" />
      </div>

      <AppWindow id="about" title="About Me">
        <About />
      </AppWindow>
      <AppWindow id="projects" title="Projects">
        <Projects />
      </AppWindow>
      <AppWindow id="skills" title="Skills">
        <Skills />
      </AppWindow>
      <AppWindow id="contacts" title="Contacts">
        <Contacts />
      </AppWindow>
      <AppWindow id="terminal" title="Terminal">
        <div className="h-full">
          <TerminalPane />
        </div>
      </AppWindow>
      <AppWindow id="resume" title="Resume">
        <Resume />
      </AppWindow>
      <Dock />

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
