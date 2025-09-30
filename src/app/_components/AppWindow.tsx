"use client";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import { useUI, type AppId } from "@/store/ui";
import { WindowChrome } from "./WindowChrome";
import type { Breakpoint } from "../hooks/useBreakpoint";
import { useLayoutEffect, useState } from "react";

export default function AppWindow({
  id,
  title,
  children,
  bp,
}: {
  id: AppId;
  title: string;
  children: React.ReactNode;
  bp: Breakpoint;
}) {
  const win = useUI((s) => s.wins[id]);
  const { close, focus, move } = useUI();
  const [areaWidth, setAreaWidth] = useState<number | null>(null);

  const effectiveWidth = bp === "tablet" ? Math.min(win.w, 630) : win.w;

  useLayoutEffect(() => {
    const areaElement = document.getElementById("desktop-area");
    if (!areaElement) return;
    const update = () => setAreaWidth(areaElement.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(areaElement);
    return () => ro.disconnect();
  });

  const pad = 5;
  const clampedX =
    areaWidth == null
      ? win.x // first paint fallback; will fix after mount
      : Math.max(pad, Math.min(win.x, areaWidth - effectiveWidth - pad));

  const initialPos = { x: clampedX, y: Math.max(pad, win.y) };

  if (!win.open) return null;

  if (bp === "mobile") {
    return (
      <section
        className="absolute inset-0 flex flex-col overflow-hidden"
        style={{ zIndex: win.z }} // ← apply store z
        onMouseDown={() => focus(id)}
      >
        <WindowChrome
          title={title}
          onClose={() => close(id)}
          onFocus={() => focus(id)}
        />
        <div className="bg-surface min-h-0 flex-1 overflow-auto">
          {children}
        </div>
      </section>
    );
  }

  return (
    <Rnd
      size={{
        width: effectiveWidth,
        height: win.h,
      }}
      position={{ x: initialPos.x, y: initialPos.y }}
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
