import { useEffect, useState } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";

function getCurrentBreakpoint(): Breakpoint {
  const width = window.innerWidth;
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const onResize = () => {
      setBreakpoint(getCurrentBreakpoint());
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return breakpoint;
}
