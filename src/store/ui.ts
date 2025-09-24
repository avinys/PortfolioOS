import { create } from "zustand";

export type AppId =
  | "about"
  | "projects"
  | "skills"
  | "contacts"
  | "terminal"
  | "resume";
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
  about: { id: "about", z: 1, open: true, x: 80, y: 80, w: 550, h: 280 },
  projects: {
    id: "projects",
    z: 0,
    open: false,
    x: 120,
    y: 100,
    w: 730,
    h: 420,
  },
  skills: { id: "skills", z: 0, open: false, x: 160, y: 120, w: 660, h: 360 },
  contacts: {
    id: "contacts",
    z: 0,
    open: false,
    x: 200,
    y: 140,
    w: 550,
    h: 300,
  },
  terminal: {
    id: "terminal",
    z: 0,
    open: false,
    x: 240,
    y: 160,
    w: 640,
    h: 240,
  },
  resume: {
    id: "resume",
    z: 0,
    open: false,
    x: 280,
    y: 180,
    w: 800,
    h: 330,
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
        [id]: {
          ...s.wins[id],
          open: s.wins[id].open ? false : true,
          z: ++zCounter,
        },
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
