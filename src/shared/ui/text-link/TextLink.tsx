import type { ComponentProps } from "react";
import NextLink from "next/link";
import cn from "classnames";
import styles from "./TextLink.module.scss";

export type TextLinkVariant = "default" | "header" | "footer";

export type TextLinkProps = Omit<ComponentProps<typeof NextLink>, "className"> & {
  variant?: TextLinkVariant;
  className?: string;
};

export function TextLink({
  variant = "default",
  className,
  ...props
}: TextLinkProps) {
  return (
    <NextLink
      className={cn(styles.root, styles[`variant_${variant}`], className)}
      {...props}
    />
  );
}
