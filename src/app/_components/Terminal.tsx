"use client";
import { useEffect, useRef } from "react";
import { Terminal as XTerm } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";
import { useUI } from "@/store/ui";
import { projects } from "@/content/projects";

const banner = ["Welcome to av-os (type `help`)", ""].join("\r\n");

export default function TerminalPane() {
	const termRef = useRef<HTMLDivElement>(null);
	const { open } = useUI();

	useEffect(() => {
		if (!termRef.current) return;
		const term = new XTerm({
			fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
			fontSize: 13,
			cursorBlink: true,
			theme: { background: "#0b0f17" },
		});
		term.open(termRef.current);
		writeLine(term, banner);
		prompt(term);

		let buffer = "";
		const onData = term.onData((data) => {
			const code = data.charCodeAt(0);
			if (code === 13) {
				// Enter
				handleCommand(term, buffer.trim(), { open });
				buffer = "";
				prompt(term);
			} else if (code === 127) {
				// Backspace
				if (buffer.length > 0) {
					buffer = buffer.slice(0, -1);
					term.write("\b \b");
				}
			} else if (code < 32) {
				// ignore control chars
			} else {
				buffer += data;
				term.write(data);
			}
		});

		return () => onData.dispose();
	}, [open]);

	return <div className="h-full w-full bg-black/60" ref={termRef} />;
}

function writeLine(term: XTerm, line: string = "") {
	term.writeln(line.replace(/\n/g, "\r\n"));
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
				[
					"help                 Show commands",
					"whoami               Short bio",
					"skills               List skills",
					"projects             List projects",
					"open <about|projects|skills|contact>  Open app",
					// "resume               Open resume page",
					"email                Copy email to clipboard",
					"clear                Clear terminal",
				].join("\n")
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
		case "open":
			{
				const target = args[0] as any;
				if (["about", "projects", "skills", "contact"].includes(target))
					api.open(target);
				else
					writeLine(
						term,
						"Usage: open about|projects|skills|contact"
					);
			}
			break;
		// case "resume":
		// 	window.location.href = "/resume";
		// 	break;
		case "email":
			navigator.clipboard.writeText("me@arvydasvingis.com");
			writeLine(term, "Copied: me@arvydasvingis.com");
			break;
		case "clear":
			term.clear();
			break;
		default:
			writeLine(term, `command not found: ${name}`);
	}
}
