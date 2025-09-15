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
			className="flex items-center justify-between border-b border-white/10 bg-gray-100 px-3 py-2 backdrop-blur  overflow-auto"
			onMouseDown={onFocus}
		>
			<span className="text-sm font-medium">{title}</span>
			<button
				className="rounded p-1 hover:bg-gray-200 hover:cursor-pointer focus:outline-none"
				aria-label="Close window"
				onClick={onClose}
			>
				<X className="h-4 w-4" />
			</button>
		</div>
	);
}
