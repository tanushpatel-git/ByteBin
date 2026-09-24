import type Lenis from "lenis";

type Subscribe = (lenis: Lenis) => () => void;

let lenis: Lenis | null = null;
const entries = new Map<Subscribe, (() => void) | undefined>();

export function registerLenis(instance: Lenis) {
  lenis = instance;
  entries.forEach((cleanup, subscribe) => {
    cleanup?.();
    entries.set(subscribe, subscribe(instance));
  });
}

export function unregisterLenis() {
  lenis = null;
  entries.forEach((cleanup) => cleanup?.());
  entries.forEach((_, subscribe) => entries.set(subscribe, undefined));
}

export function onLenis(subscribe: Subscribe) {
  entries.set(subscribe, lenis ? subscribe(lenis) : undefined);
  return () => {
    entries.get(subscribe)?.();
    entries.delete(subscribe);
  };
}