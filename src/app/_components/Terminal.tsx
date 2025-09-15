"use client";
import { useEffect, useRef } from "react";
import "@xterm/xterm/css/xterm.css";
import { useUI } from "@/store/ui";
import { projects } from "@/content/projects";

type XTerm = import("@xterm/xterm").Terminal;
type FitAddon = import("@xterm/addon-fit").FitAddon;

const banner = "Welcome to av-os (type `help`)\r\n";

export default function TerminalPane() {
	const hostRef = useRef<HTMLDivElement>(null);
	const termRef = useRef<XTerm | null>(null);
	const fitRef = useRef<FitAddon | null>(null);
	const roRef = useRef<ResizeObserver | null>(null);
	const onDataDisposeRef = useRef<(() => void) | null>(null);

	const { open } = useUI();

	useEffect(() => {
		let disposed = false;
		(async () => {
			const host = hostRef.current;
			if (!host) return;

			// dynamic imports (no SSR eval, fixes "self is not defined")
			const { Terminal } = await import("@xterm/xterm");
			const { FitAddon } = await import("@xterm/addon-fit");
			if (disposed) return;

			// clean any previous DOM
			host.innerHTML = "";

			const term = new Terminal({
				fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
				fontSize: 13,
				cursorBlink: true,
				theme: { background: "#0b0f17" },
				convertEol: true,
			});
			const fit = new FitAddon();
			term.loadAddon(fit);
			term.open(host);
			fit.fit();

			termRef.current = term;
			fitRef.current = fit;

			writeLine(term, banner);
			prompt(term);

			// Input handling (use store function directly to avoid re-init deps)
			const { open } = useUI.getState();
			let buffer = "";
			const disposable = term.onData((data) => {
				const code = data.charCodeAt(0);
				if (code === 13) {
					handleCommand(term, buffer.trim(), { open });
					buffer = "";
					prompt(term);
				} else if (code === 127) {
					if (buffer.length > 0) {
						buffer = buffer.slice(0, -1);
						term.write("\b \b");
					}
				} else if (code >= 32) {
					buffer += data;
					term.write(data);
				}
			});
			onDataDisposeRef.current = () => disposable.dispose();

			// Fit on resize (react-rnd changes size)
			const ro = new ResizeObserver(() =>
				queueMicrotask(() => fit.fit())
			);
			ro.observe(host);
			roRef.current = ro;
		})();

		// cleanup — prevents duplicate terminals in Strict Mode
		return () => {
			disposed = true;
			try {
				onDataDisposeRef.current?.();
			} catch {}
			try {
				roRef.current?.disconnect();
			} catch {}
			try {
				termRef.current?.dispose();
			} catch {}
			termRef.current = null;
			fitRef.current = null;
			roRef.current = null;
			onDataDisposeRef.current = null;
		};
	}, []);

	return (
		<div ref={hostRef} className="h-full w-full bg-black/60 text-white" />
	);
}

/* helpers */
function writeLine(term: XTerm, line = "") {
	term.write("\r\n" + line.trim().replace(/\n/g, "\r\n") + "\r\n");
}
function prompt(term: XTerm) {
	term.write("\r\n$ ");
}
function handleCommand(
	term: XTerm,
	cmd: string,
	api: { open: (id: any) => void }
) {
	if (!cmd) return;
	const [name, ...args] = cmd.split(" ");
	switch (name) {
		case "help":
			writeLine(
				term,
				`help                Show commands\r\nwhoami               Short bio\r\nskills               List skills\r\nprojects             List projects\r\nopen <about|projects|skills|contact>  Open app\r\nemail                Copy email to clipboard\r\nclear                Clear terminal`
			);
			break;
		case "whoami":
			writeLine(
				term,
				"Arvydas — Front-end / Full-stack dev. React+TS, .NET APIs, accessible UI. Entry-level roles welcome."
			);
			break;
		case "skills":
			writeLine(
				term,
				"- Frontend: React, TS, Vite, Next, Tailwind\n- Backend: .NET 8, EF Core, MySQL\n- DevOps: Ubuntu, Nginx, systemd"
			);
			break;
		case "projects":
			projects.forEach((p) =>
				writeLine(term, `- ${p.title} — ${p.summary}`)
			);
			writeLine(term, "hint: open projects");
			break;
		case "open": {
			const target = args[0] as any;
			if (["about", "projects", "skills", "contact"].includes(target))
				api.open(target);
			else writeLine(term, "Usage: open about|projects|skills|contact");
			break;
		}
		case "email":
			navigator.clipboard.writeText("me@arvydasvingis.com");
			writeLine(term, "Copied: me@arvydasvingis.com");
			break;
		case "clear":
			// clear + redraw prompt
			term.reset(); // fully resets state + clears
			writeLine(term, banner);
			prompt(term);
			break;
		default:
			writeLine(term, `command not found: ${name}`);
	}
}
