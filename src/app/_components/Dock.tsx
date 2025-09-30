"use client";
import { useUI } from "@/store/ui";
import {
  Feather,
  FileText,
  Folder,
  Mail,
  Moon,
  Rocket,
  Sun,
  Terminal,
  User2,
  Wrench,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default function Dock() {
  const { wins, open, toggleLite, lite } = useUI();
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const switchTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <div className="border-dock bg-dock flex h-12 w-full flex-row justify-center border px-3 py-2 pb-4 text-center backdrop-blur sm:h-20 md:h-12 lg:fixed lg:bottom-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2">
      <div className="flex items-center gap-1 sm:gap-2">
        <DockButton
          label="About"
          onClick={() => open("about")}
          active={wins["about"].open}
          icon={<User2 />}
        />
        <DockButton
          label="Projects"
          onClick={() => open("projects")}
          active={wins["projects"].open}
          icon={<Folder />}
        />
        <DockButton
          label="Skills"
          onClick={() => open("skills")}
          active={wins["skills"].open}
          icon={<Wrench />}
        />
        <DockButton
          label="Contact"
          onClick={() => open("contacts")}
          active={wins["contacts"].open}
          icon={<Mail />}
        />
        <DockButton
          label="Terminal"
          onClick={() => open("terminal")}
          active={wins["terminal"].open}
          icon={<Terminal />}
        />
        <DockButton
          label="Resume"
          onClick={() => open("resume")}
          active={wins["resume"].open}
          icon={<FileText />}
        />
        <div className="mx-2 h-6 w-px bg-white/20" />
        <DockButton
          label={
            mounted ? (resolvedTheme === "light" ? "Dark" : "Light") : "Theme"
          }
          onClick={switchTheme}
          icon={
            mounted ? (
              resolvedTheme === "light" ? (
                <Moon />
              ) : (
                <Sun />
              )
            ) : (
              <Sun className="opacity-0" />
            )
          }
        />
        <DockButton
          label={lite ? "Lite: On" : "Lite: Off"}
          onClick={toggleLite}
          icon={lite ? <Rocket /> : <Feather />}
        />
      </div>
    </div>
  );
}

function DockButton({
  label,
  onClick,
  icon,
  active,
}: {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  active?: boolean;
}) {
  const bp = useBreakpoint();
  return (
    <button
      onClick={onClick}
      className={`hover:border-dock flex flex-col items-center justify-center gap-2 rounded-lg border border-white/0 px-2 py-1 text-sm hover:cursor-pointer hover:border-solid hover:shadow-sm focus:outline-none md:flex-row ${active ? "border-b-accent-500 border-b-3" : ""}`}
      title={label}
      aria-label={label}
    >
      {icon && (
        <span className="inline-flex h-5 w-5 items-center justify-center">
          {icon}
        </span>
      )}
      <span className="md:text-md hidden text-sm wrap-normal sm:inline">
        {label}
      </span>
    </button>
  );
}
