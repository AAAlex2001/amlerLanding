"use client";

import cn from "classnames";
import styles from "./ProgressBar.module.scss";

const THEMES = {
  low: { filled: "#4B6E46", unfilled: "rgba(75, 110, 70, 0.15)" },
  medium: { filled: "#FFC04D", unfilled: "rgba(205, 159, 75, 0.15)" },
  high: { filled: "#D35B5D", unfilled: "rgba(147, 61, 62, 0.15)" },
} as const;

export type ProgressBarLevel = keyof typeof THEMES;

export type ProgressBarProps = {
  filled: number;
  total?: number;
  level: ProgressBarLevel;
  className?: string;
};

export function ProgressBar({
  filled,
  total = 18,
  level,
  className,
}: ProgressBarProps) {
  const theme = THEMES[level];

  return (
    <div className={cn(styles.bar, className)}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={styles.sprite}
          style={{
            background: i < filled ? theme.filled : theme.unfilled,
            transitionDelay: `${i * 30}ms`,
          }}
        />
      ))}
    </div>
  );
}
