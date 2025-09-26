"use client";
import { useEffect, useRef } from "react";
import "@xterm/xterm/css/xterm.css";
import { AppId, useUI } from "@/store/ui";
import { projects } from "@/content/projects";
type XTerm = import("@xterm/xterm").Terminal;
type FitAddon = import("@xterm/addon-fit").FitAddon;

const BANNER = "### Welcome to av-os (type `help`) ###\r\n";
const PROMPT = "$ ";

export default function TerminalPane() {
  const hostRef = useRef<HTMLDivElement>(null);
  const { open } = useUI();

  useEffect(() => {
    let alive = true;
    let dispose: (() => void) | null = null;

    (async () => {
      const host = hostRef.current;
      if (!host) return;

      const setup = await setupTerminal(host, open, alive);
      if (!alive) {
        setup.dispose();
        return;
      }

      dispose = setup.dispose;
    })();

    return () => {
      alive = false;
      dispose?.();
    };
  }, [open]);

  return (
    <div
      ref={hostRef}
      className="h-full w-full overflow-hidden bg-black/60 text-white"
    />
  );
}

/* helpers */
function writeLine(term: XTerm, line = "") {
  term.write("\r\n" + line.trim().replace(/\n/g, "\r\n") + "\r\n");
}
function prompt(term: XTerm) {
  term.write("\r\n" + PROMPT);
}
function renderLine(term: XTerm, buffer: string, cursor: number) {
  term.write("\x1b[2K\r" + PROMPT + buffer);
  const back = Math.max(0, buffer.length - cursor);
  if (back > 0) term.write(`\x1b[${back}D`);
}
function handleCommand(
  term: XTerm,
  cmd: string,
  api: { open: (id: AppId) => void },
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
          "email                Copy email to clipboard",
          "clear                Clear terminal",
        ].join("\r\n"),
      );
      break;
    case "whoami":
      writeLine(
        term,
        "Arvydas — Front-end / Full-stack dev. React+TS, .NET APIs, accessible UI. Entry-level roles welcome.",
      );
      break;
    case "skills":
      writeLine(
        term,
        "- Frontend: React, TS, Vite, Next, Tailwind\n- Backend: .NET 8, EF Core, MySQL\n- DevOps: Ubuntu, Nginx, systemd",
      );
      break;
    case "projects":
      projects.forEach((p) => writeLine(term, `- ${p.title} — ${p.summary}`));
      writeLine(term, "hint: open projects");
      break;
    case "open": {
      const target = args[0] as AppId;
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
      term.reset();
      writeLine(term, BANNER);
      prompt(term);
      break;
    case "exit":
      api.open("terminal");
      break;
    default:
      writeLine(term, `command not found: ${name}`);
  }
}

async function setupTerminal(
  host: HTMLDivElement,
  open: (id: AppId) => void,
  alive: boolean,
) {
  const { Terminal } = await import("@xterm/xterm");
  const { FitAddon } = await import("@xterm/addon-fit");

  host.innerHTML = "";

  const term: XTerm = new Terminal({
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    fontSize: 13,
    cursorBlink: true,
    theme: { background: "#0b0f17" },
    convertEol: true,
  });

  const fit: FitAddon = new FitAddon();
  term.loadAddon(fit);
  term.open(host);
  const safeFit = () => {
    if (!alive || !host.isConnected) return;
    const w = host.clientWidth,
      h = host.clientHeight;
    if (w > 0 && h > 0) {
      try {
        fit.fit();
      } catch {}
    }
  };
  requestAnimationFrame(() => {
    safeFit();
    requestAnimationFrame(safeFit);
  });

  writeLine(term, BANNER);
  prompt(term);

  /* Input or history inputs wiring */
  let buffer = "";
  let cursor = 0;
  const history: string[] = [];
  let histIndex = -1;

  /* handle Arrow keys */
  const keyDisp = term.onKey(({ domEvent }) => {
    domEvent.preventDefault();

    if (domEvent.key === "ArrowUp") {
      if (!history.length) return;
      histIndex =
        histIndex === -1 ? history.length - 1 : Math.max(0, histIndex - 1);
      buffer = history[histIndex] ?? "";
      cursor = buffer.length;
      renderLine(term, buffer, cursor);
    }

    if (domEvent.key === "ArrowDown") {
      if (!history.length || histIndex === -1) return;
      if (histIndex >= history.length - 1) {
        histIndex = -1;
        buffer = "";
      } else {
        histIndex = Math.min(histIndex + 1, history.length - 1);
        buffer = history[histIndex] ?? "";
      }
      cursor = buffer.length;
      renderLine(term, buffer, cursor);
    }

    if (domEvent.key === "ArrowLeft") {
      if (cursor > 0) {
        cursor -= 1;
        term.write("\x1b[D");
      }
      return;
    }

    if (domEvent.key === "ArrowRight") {
      if (cursor < buffer.length) {
        cursor += 1;
        term.write("\x1b[C");
      }
      return;
    }

    if (domEvent.key === "Backspace") {
      domEvent.preventDefault();
      if (cursor > 0) {
        buffer = buffer.slice(0, cursor - 1) + buffer.slice(cursor);
        cursor -= 1;
        renderLine(term, buffer, cursor);
      }
      return;
    }

    if (domEvent.key === "Delete") {
      domEvent.preventDefault();
      if (cursor < buffer.length) {
        buffer = buffer.slice(0, cursor) + buffer.slice(cursor + 1);
        renderLine(term, buffer, cursor);
      }
      return;
    }

    if (domEvent.key === "Home") {
      if (cursor !== 0) {
        cursor = 0;
        renderLine(term, buffer, cursor);
      }
      return;
    }
    if (domEvent.key === "End") {
      if (cursor !== buffer.length) {
        cursor = buffer.length;
        renderLine(term, buffer, cursor);
      }
      return;
    }
  });

  /* handle input, Enter and backspace */
  const dataDisp = term.onData((data) => {
    const code = data.charCodeAt(0);

    if (code === 13) {
      // Enter
      const command = buffer.trim();
      if (command && history[history.length - 1] !== command)
        history.push(command);
      histIndex = -1;
      handleCommand(term, command, { open });
      buffer = "";
      cursor = 0;
      prompt(term);
      return;
    }

    if (code === 127 || code == 8) {
      return;
    }

    if (code < 32) return;

    buffer = buffer.slice(0, cursor) + data + buffer.slice(cursor);
    cursor += data.length;
    renderLine(term, buffer, cursor);
  });

  // Fit terminal to container on resize
  const ro = new ResizeObserver(() => {
    safeFit();
    requestAnimationFrame(safeFit);
  });
  ro.observe(host);

  // Cleanup
  const dispose = () => {
    try {
      keyDisp.dispose();
    } catch {}
    try {
      dataDisp.dispose();
    } catch {}
    try {
      ro.disconnect();
    } catch {}
    try {
      term.dispose();
    } catch {}
  };

  return { term, fit, dispose };
}
