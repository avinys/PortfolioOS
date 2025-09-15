"use client";
import {
	Terminal,
	Folder,
	User2,
	Wrench,
	Mail,
	FileText,
	Sun,
	Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useUI } from "@/store/ui";

export default function Dock() {
	const { open, toggleLite, lite } = useUI();
	const { theme, setTheme } = useTheme();
	return (
		<div className=" w-screen justify-center fixed bottom-[-8px] left-1/2 z-50 -translate-x-1/2 border border-white bg-gray-200 px-3 py-2 pb-4 backdrop-blur flex items-center gap-2">
			<div className="flex items-center gap-2">
				<DockButton
					label="About"
					onClick={() => open("about")}
					icon={<User2 />}
				/>
				<DockButton
					label="Projects"
					onClick={() => open("projects")}
					icon={<Folder />}
				/>
				<DockButton
					label="Skills"
					onClick={() => open("skills")}
					icon={<Wrench />}
				/>
				<DockButton
					label="Contact"
					onClick={() => open("contact")}
					icon={<Mail />}
				/>
				<DockButton
					label="Terminal"
					onClick={() => open("terminal")}
					icon={<Terminal />}
				/>
				<div className="mx-2 h-6 w-px bg-white/20" />
				<DockButton
					label="Resume"
					onClick={() => (window.location.href = "/resume")}
					icon={<FileText />}
				/>
				<DockButton
					label={theme === "light" ? "Dark" : "Light"}
					onClick={() =>
						setTheme(theme === "light" ? "dark" : "light")
					}
					icon={theme === "light" ? <Moon /> : <Sun />}
				/>
				<DockButton
					label={lite ? "Lite: On" : "Lite: Off"}
					onClick={toggleLite}
				/>
			</div>
		</div>
	);
}

function DockButton({
	label,
	onClick,
	icon,
}: {
	label: string;
	onClick: () => void;
	icon?: React.ReactNode;
}) {
	return (
		<button
			onClick={onClick}
			className="flex items-center gap-2 rounded-lg px-2 py-1 text-sm border border-white/0 hover:border-solid hover:border-gray-300 hover:shadow-sm focus:outline-none hover:cursor-pointer "
			title={label}
			aria-label={label}
		>
			<span className="inline-flex h-5 w-5 items-center justify-center">
				{icon}
			</span>
			<span className="hidden sm:inline">{label}</span>
		</button>
	);
}
