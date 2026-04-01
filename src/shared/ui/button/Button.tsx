import type { ReactNode, MouseEventHandler } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export type ButtonVariant = "cta" | "secondary" | "burger" | "icon";
export type ButtonSize = "m" | "l";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconRail?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
};

export function Button({
  variant = "cta",
  size = "l",
  icon,
  iconRail = false,
  href,
  target,
  rel,
  className,
  disabled,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const isIcon = variant === "icon";

  const classes = cn(
    styles.root,
    styles[`variant_${variant}`],
    styles[`size_${size}`],
    isIcon && styles.iconOnly,
    isIcon && iconRail && styles.iconRail,
    disabled && styles.disabled,
    className,
  );

  const content = (
    <>
      {icon && <span className={styles.iconSlot}>{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
}
