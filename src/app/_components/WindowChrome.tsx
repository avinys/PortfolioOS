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
			className="flex items-center justify-between border-b border-white/10 bg-white/5 px-3 py-2 backdrop-blur"
			onMouseDown={onFocus}
		>
			<span className="text-sm font-medium">{title}</span>
			<button
				className="rounded p-1 hover:bg-white/10 focus:outline-none"
				aria-label="Close window"
				onClick={onClose}
			>
				<X className="h-4 w-4" />
			</button>
		</div>
	);
}
