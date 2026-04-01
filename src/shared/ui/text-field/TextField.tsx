import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import cn from "classnames";
import { WalletGlyph } from "@/shared/ui/icons";
import styles from "./TextField.module.scss";

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label: string;
  hideLabel?: boolean;
  error?: string;
  startSlot?: ReactNode;
  endSlot?: ReactNode;
};

function DefaultStartSlot() {
  return (
    <span className={cn(styles.slot, styles.slotIcon)}>
      <WalletGlyph />
    </span>
  );
}

export function TextField({
  label,
  hideLabel = false,
  error,
  startSlot,
  endSlot,
  className,
  placeholder = "Placeholder",
  ...inputProps
}: TextFieldProps) {
  const fieldId = useId();
  const showError = Boolean(error);

  return (
    <div
      className={cn(styles.wrapper, showError && styles.hasError, className)}
    >
      <label
        className={cn(styles.label, hideLabel && styles.visuallyHidden)}
        htmlFor={fieldId}
      >
        {label}
      </label>
      <div className={styles.control}>
        {startSlot !== undefined ? (
          startSlot !== null ? (
            <span className={styles.slot}>{startSlot}</span>
          ) : null
        ) : (
          <DefaultStartSlot />
        )}
        <input
          id={fieldId}
          className={styles.input}
          placeholder={placeholder}
          aria-invalid={showError || undefined}
          {...inputProps}
        />
        {endSlot !== undefined ? (
          endSlot !== null ? (
            <span className={styles.slot}>{endSlot}</span>
          ) : null
        ) : null}
      </div>
      {showError && error ? (
        <p className={styles.errorText} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
