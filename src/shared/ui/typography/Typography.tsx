import type { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Typography.module.scss";

type WithClass = { children: ReactNode; className?: string };

export type TypographyH1Props = WithClass &
  Omit<HTMLAttributes<HTMLHeadingElement>, "className">;

export type TypographyPProps = WithClass &
  Omit<HTMLAttributes<HTMLParagraphElement>, "className">;

export type TypographyH4Props = WithClass &
  Omit<HTMLAttributes<HTMLHeadingElement>, "className">;

export type TypographyDisplayMProps = WithClass &
  Omit<HTMLAttributes<HTMLHeadingElement>, "className">;

export function TypographyH1({ children, className, ...rest }: TypographyH1Props) {
  return (
    <h1 className={cn(styles.heading1, className)} {...rest}>
      {children}
    </h1>
  );
}

export function TypographyP({ children, className, ...rest }: TypographyPProps) {
  return (
    <p className={cn(styles.lead, className)} {...rest}>
      {children}
    </p>
  );
}

export function TypographyH4({ children, className, ...rest }: TypographyH4Props) {
  return (
    <h4 className={cn(styles.heading4, className)} {...rest}>
      {children}
    </h4>
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
