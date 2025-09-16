"use client";
import { X } from "lucide-react";

export function WindowChrome({
	title,
	onClose,
	onFocus,
}: {
	title: string;
	onClose: () => void;
	onFocus?: () => void;
}) {
	return (
		<div
			className="window-handle cursor-grab flex items-center justify-between border-b-2 border-indigo-500 bg-indigo-200 px-3 py-2 backdrop-blur  overflow-auto"
			onMouseDown={onFocus}
		>
			<span className="text-sm font-bold text-indigo-950">{title}</span>
			<button
				className="rounded p-1 hover:bg-indigo-100 hover:cursor-pointer focus:outline-none"
				aria-label="Close window"
				onClick={onClose}
			>
				<X className="h-4 w-4" />
			</button>
		</div>
	);
}
