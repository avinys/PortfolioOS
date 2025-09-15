import { create } from "zustand";

export type AppId = "about" | "projects" | "skills" | "contact" | "terminal";
export type Win = {
	id: AppId;
	z: number;
	open: boolean;
	x: number;
	y: number;
	w: number;
	h: number;
};

let zCounter = 1;
const defaults: Record<AppId, Win> = {
	about: { id: "about", z: 1, open: true, x: 80, y: 90, w: 420, h: 360 },
	projects: {
		id: "projects",
		z: 0,
		open: false,
		x: 220,
		y: 140,
		w: 560,
		h: 420,
	},
	skills: { id: "skills", z: 0, open: false, x: 300, y: 120, w: 460, h: 360 },
	contact: {
		id: "contact",
		z: 0,
		open: false,
		x: 360,
		y: 160,
		w: 360,
		h: 300,
	},
	terminal: {
		id: "terminal",
		z: 0,
		open: false,
		x: 40,
		y: 420,
		w: 640,
		h: 240,
	},
};

type UI = {
	wins: Record<AppId, Win>;
	focus: (id: AppId) => void;
	open: (id: AppId) => void;
	close: (id: AppId) => void;
	move: (id: AppId, pos: Partial<Pick<Win, "x" | "y" | "w" | "h">>) => void;
	toggleLite: () => void;
	lite: boolean;
};

export const useUI = create<UI>((set) => ({
	wins: defaults,
	focus: (id) =>
		set((s) => ({
			wins: { ...s.wins, [id]: { ...s.wins[id], z: ++zCounter } },
		})),
	open: (id) =>
		set((s) => ({
			wins: {
				...s.wins,
				[id]: { ...s.wins[id], open: true, z: ++zCounter },
			},
		})),
	close: (id) =>
		set((s) => ({
			wins: { ...s.wins, [id]: { ...s.wins[id], open: false } },
		})),
	move: (id, pos) =>
		set((s) => ({ wins: { ...s.wins, [id]: { ...s.wins[id], ...pos } } })),
	lite: false,
	toggleLite: () => set((s) => ({ lite: !s.lite })),
}));
