import type { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export type ButtonVariant = "cta" | "secondary" | "burger" | "icon";
export type ButtonSize = "m" | "l";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconRail?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "cta",
  size = "l",
  iconRail = false,
  className,
  disabled,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const isIcon = variant === "icon";

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        styles.root,
        styles[`variant_${variant}`],
        styles[`size_${size}`],
        isIcon && styles.iconOnly,
        isIcon && iconRail && styles.iconRail,
        disabled && styles.disabled,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
