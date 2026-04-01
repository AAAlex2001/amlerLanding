"use client";

import { createContext, useContext, type ReactNode } from "react";

const Ctx = createContext(false);

export function HowItWorksCardInteractionProvider({
  value,
  children,
}: {
  value: boolean;
  children: ReactNode;
}) {
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useHowItWorksCardInteraction(): boolean {
  return useContext(Ctx);
}
