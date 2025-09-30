import { useEffect, useState } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";
export function useBreakpoint(): Breakpoint {
  const getCurrentBreakpoint = () => {
    if (typeof window === "undefined") return "desktop";

    const width = window.innerWidth;
    if (width < 640) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  };

  const [breakpoint, setBreakpoint] =
    useState<Breakpoint>(getCurrentBreakpoint);

  useEffect(() => {
    const onResize = () => {
      setBreakpoint(getCurrentBreakpoint());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return breakpoint;
}
