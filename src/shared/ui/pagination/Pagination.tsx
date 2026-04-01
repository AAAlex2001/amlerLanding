"use client";

import type { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Pagination.module.scss";

export type PaginationProps = {
  count: number;
  activeIndex: number;
  onDotClick?: (index: number) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function Pagination({
  count,
  activeIndex,
  onDotClick,
  className,
  ...rest
}: PaginationProps) {
  return (
    <div
      className={cn(styles.root, className)}
      role="tablist"
      aria-label="Разделы"
      {...rest}
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={activeIndex === i}
          tabIndex={activeIndex === i ? 0 : -1}
          className={cn(styles.dot, activeIndex === i && styles.dotActive)}
          onClick={() => onDotClick?.(i)}
        />
      ))}
    </div>
  );
}
