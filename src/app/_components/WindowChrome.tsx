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
      className="window-handle bg-accent-200 dark:bg-accent-700 border-accent-500 dark:border-accent-950 flex cursor-grab items-center justify-between overflow-auto border-b-2 px-3 py-2 backdrop-blur"
      onMouseDown={onFocus}
    >
      <span className="text-fg text-sm font-bold">{title}</span>
      <button
        className="hover:bg-accent-100 rounded p-1 hover:cursor-pointer focus:outline-none"
        aria-label="Close window"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
