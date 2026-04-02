import type { ReactNode } from "react";
import cn from "classnames";
import { TypographyText } from "@/shared/ui/typography";
import styles from "./Chip.module.scss";

export type ChipVariant = "default" | "accent";

export type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: ChipVariant;
};

export function Chip({ children, className, variant = "default" }: ChipProps) {
  return (
    <span
      className={cn(
        styles.root,
        variant === "accent" && styles.accent,
        className,
      )}
    >
      {variant === "accent" ? (
        <span className={styles.accentLabel}>{children}</span>
      ) : (
        <TypographyText>{children}</TypographyText>
      )}
    </span>
  );
}

export type ChipGroupProps = {
  children: ReactNode;
  className?: string;
};

export function ChipGroup({ children, className }: ChipGroupProps) {
  return <div className={cn(styles.group, className)}>{children}</div>;
}
