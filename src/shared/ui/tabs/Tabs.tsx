"use client";

import {
  createContext,
  useContext,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import cn from "classnames";
import styles from "./Tabs.module.scss";

export type TabsOrientation = "vertical" | "horizontal";

const OrientationContext = createContext<TabsOrientation>("vertical");

export type TabsProps = {
  orientation: TabsOrientation;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function Tabs({
  orientation,
  children,
  className,
  "aria-label": ariaLabel = "Вкладки",
}: TabsProps) {
  return (
    <OrientationContext.Provider value={orientation}>
      <div
        className={cn(styles.root, styles[`orient_${orientation}`], className)}
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation={orientation === "vertical" ? "vertical" : "horizontal"}
      >
        {children}
      </div>
    </OrientationContext.Provider>
  );
}

export type TabProps = {
  active?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Tab({
  active = false,
  children,
  className,
  type = "button",
  ...rest
}: TabProps) {
  const orientation = useContext(OrientationContext);

  return (
    <button
      type={type}
      role="tab"
      aria-selected={active}
      className={cn(
        styles.tab,
        styles[`tab_${orientation}`],
        active ? styles.tab_active : styles.tab_inactive,
        className,
      )}
      {...rest}
    >
      <span className={styles.tabLabel}>{children}</span>
    </button>
  );
}
