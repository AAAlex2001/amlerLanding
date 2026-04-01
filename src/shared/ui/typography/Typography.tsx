import type { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Typography.module.scss";

type WithClass = { children: ReactNode; className?: string };

export type TypographyH1Props = WithClass &
  Omit<HTMLAttributes<HTMLHeadingElement>, "className">;

export type TypographyH2Props = WithClass &
  Omit<HTMLAttributes<HTMLHeadingElement>, "className">;

export type TypographyPProps = WithClass &
  Omit<HTMLAttributes<HTMLParagraphElement>, "className">;

export type TypographyH4Props = WithClass & {
  /** center — маркетинговый слайдер; start — карточки AML и т.п. */
  align?: "center" | "start";
} & Omit<HTMLAttributes<HTMLHeadingElement>, "className">;

export type TypographyTextMediumProps = WithClass &
  Omit<HTMLAttributes<HTMLParagraphElement>, "className">;

export type TypographyTextProps = WithClass &
  Omit<HTMLAttributes<HTMLSpanElement>, "className">;

export type TypographyDisplayMProps = WithClass &
  Omit<HTMLAttributes<HTMLHeadingElement>, "className">;

export function TypographyH1({ children, className, ...rest }: TypographyH1Props) {
  return (
    <h1 className={cn(styles.heading1, className)} {...rest}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className, ...rest }: TypographyH2Props) {
  return (
    <h2 className={cn(styles.heading2, className)} {...rest}>
      {children}
    </h2>
  );
}

export function TypographyP({ children, className, ...rest }: TypographyPProps) {
  return (
    <p className={cn(styles.lead, className)} {...rest}>
      {children}
    </p>
  );
}

export function TypographyH4({
  children,
  className,
  align = "center",
  ...rest
}: TypographyH4Props) {
  return (
    <h4
      className={cn(
        align === "start" ? styles.heading4Left : styles.heading4,
        className,
      )}
      {...rest}
    >
      {children}
    </h4>
  );
}

export function TypographyTextMedium({
  children,
  className,
  ...rest
}: TypographyTextMediumProps) {
  return (
    <p className={cn(styles.textMedium, className)} {...rest}>
      {children}
    </p>
  );
}

export function TypographyText({ children, className, ...rest }: TypographyTextProps) {
  return (
    <span className={cn(styles.text, className)} {...rest}>
      {children}
    </span>
  );
}

export function TypographyDisplayM({
  children,
  className,
  ...rest
}: TypographyDisplayMProps) {
  return (
    <h2 className={cn(styles.displayM, className)} {...rest}>
      {children}
    </h2>
  );
}
