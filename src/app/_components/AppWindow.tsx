"use client";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import { useUI, type AppId } from "@/store/ui";
import { WindowChrome } from "./WindowChrome";

export default function AppWindow({
  id,
  title,
  children,
}: {
  id: AppId;
  title: string;
  children: React.ReactNode;
}) {
  const win = useUI((s) => s.wins[id]);
  const { close, focus, move } = useUI();

  if (!win.open) return null;

  return (
    <Rnd
      size={{ width: win.w, height: win.h }}
      position={{ x: win.x, y: win.y }}
      onDragStart={() => focus(id)}
      onDragStop={(_, d) => move(id, { x: d.x, y: d.y })}
      onResizeStop={(_, __, ref, ___, pos) =>
        move(id, {
          w: ref.offsetWidth,
          h: ref.offsetHeight,
          x: pos.x,
          y: pos.y,
        })
      }
      style={{ zIndex: win.z, position: "absolute" }}
      bounds="window"
      minWidth={320}
      minHeight={200}
      dragHandleClassName="window-handle"
    >
      <motion.div
        className="bg-panel border-border flex h-full flex-col overflow-hidden rounded-sm border shadow-xl"
        onMouseDown={() => focus(id)}
        initial={{ opacity: 0.95, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <WindowChrome
          title={title}
          onClose={() => close(id)}
          onFocus={() => focus(id)}
        />
        <div className="bg-surface flex-1 overflow-auto">{children}</div>
      </motion.div>
    </Rnd>
  );
}
