import { useRef, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getServerSnapshot() {
  return false;
}

export function useIsMobile(breakpoint = 768) {
  const isMobile = useSyncExternalStore(
    subscribe,
    () => window.innerWidth < breakpoint,
    getServerSnapshot
  );

  // Capture the initial client value (not SSR value)
  const initialIsMobile = useRef<boolean | null>(null);
  if (initialIsMobile.current === null && typeof window !== "undefined") {
    initialIsMobile.current = window.innerWidth < breakpoint;
  }

  return { isMobile, initialIsMobile: initialIsMobile.current ?? false };
}
