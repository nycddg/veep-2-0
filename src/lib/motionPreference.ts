import { useSyncExternalStore } from "react";

type MotionPreference = "system" | "reduce";
const STORAGE_KEY = "veep-motion";
const CHANGE_EVENT = "veep-motion-change";
const QUERY = "(prefers-reduced-motion: reduce)";
let temporaryPreference: MotionPreference | undefined;

function readPreference(): MotionPreference {
  if (temporaryPreference) return temporaryPreference;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "reduce" ? "reduce" : "system";
  } catch {
    return "system";
  }
}

function getSnapshot() {
  if (readPreference() === "reduce") return "reduce";
  return window.matchMedia(QUERY).matches ? "system-reduced" : "system-full";
}

function subscribe(onChange: () => void) {
  const system = window.matchMedia(QUERY);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) onChange();
  };
  system.addEventListener("change", onChange);
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    system.removeEventListener("change", onChange);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export function setMotionPreference(preference: MotionPreference) {
  temporaryPreference = preference;
  try {
    window.localStorage.setItem(STORAGE_KEY, preference);
    temporaryPreference = undefined;
  } catch {
    // The choice still works for this visit when storage is unavailable.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Static SSR, a persistent opt-out, and live system-preference changes. */
export function useMotionPreference() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => "system-reduced");
  return {
    reduced: snapshot !== "system-full",
    preference: snapshot === "reduce" ? ("reduce" as const) : ("system" as const),
  };
}
