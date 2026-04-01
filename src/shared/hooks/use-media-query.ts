"use client";

import { useSyncExternalStore } from "react";

/**
 * Подписка на matchMedia. На сервере всегда false — после гидрации совпадает с окном.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
