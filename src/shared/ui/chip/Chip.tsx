import type { ReactNode } from "react";
import cn from "classnames";
import { TypographyText } from "@/shared/ui/typography";
import styles from "./Chip.module.scss";

export type ChipProps = {
  children: ReactNode;
  className?: string;
};

export function Chip({ children, className }: ChipProps) {
  return (
    <span className={cn(styles.root, className)}>
      <TypographyText>{children}</TypographyText>
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
