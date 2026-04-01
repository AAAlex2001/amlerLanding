import type { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export type ButtonVariant = "cta" | "secondary" | "burger" | "icon";
export type ButtonSize = "m" | "l";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "cta",
  size = "l",
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
        disabled && styles.disabled,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
