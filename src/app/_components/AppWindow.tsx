"use client";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import { useUI, type AppId } from "@/store/ui";
import { WindowChrome } from "./WindowChrome";
import type { Breakpoint } from "../hooks/useBreakpoint";
import { useLayoutEffect, useState } from "react";

const WINDOW_PADDING = 5;
const MIN_WINDOW_WIDTH = 320;
const MIN_WINDOW_HEIGHT = 200;

type DesktopBounds = { width: number; height: number };

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
  const [desktopBounds, setDesktopBounds] = useState<DesktopBounds | null>(
    null,
  );

  const effectiveWidth = bp === "tablet" ? Math.min(win.w, 630) : win.w;

  useLayoutEffect(() => {
    const areaElement = document.getElementById("desktop-area");
    if (!areaElement) return;
    const update = () =>
      setDesktopBounds({
        width: areaElement.clientWidth,
        height: areaElement.clientHeight,
      });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(areaElement);
    return () => ro.disconnect();
  }, []);

  const availableWidth = desktopBounds
    ? Math.max(0, desktopBounds.width - WINDOW_PADDING * 2)
    : null;
  const availableHeight = desktopBounds
    ? Math.max(0, desktopBounds.height - WINDOW_PADDING * 2)
    : null;
  const width =
    availableWidth == null
      ? effectiveWidth
      : Math.min(effectiveWidth, availableWidth);
  const height =
    availableHeight == null ? win.h : Math.min(win.h, availableHeight);

  const position = desktopBounds
    ? {
        x: Math.max(
          WINDOW_PADDING,
          Math.min(win.x, desktopBounds.width - width - WINDOW_PADDING),
        ),
        y: Math.max(
          WINDOW_PADDING,
          Math.min(win.y, desktopBounds.height - height - WINDOW_PADDING),
        ),
      }
    : { x: win.x, y: win.y };

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
        width,
        height,
      }}
      position={position}
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
      bounds="parent"
      minWidth={
        availableWidth != null
          ? Math.min(MIN_WINDOW_WIDTH, availableWidth)
          : MIN_WINDOW_WIDTH
      }
      minHeight={
        availableHeight != null
          ? Math.min(MIN_WINDOW_HEIGHT, availableHeight)
          : MIN_WINDOW_HEIGHT
      }
      dragHandleClassName="window-handle"
      cancel=".no-drag"
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
