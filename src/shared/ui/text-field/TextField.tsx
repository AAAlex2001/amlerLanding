import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import cn from "classnames";
import { TronGlyph, WalletGlyph } from "@/shared/ui/icons";
import styles from "./TextField.module.scss";

export type TextFieldVisualVariant =
  | "interactive"
  | "default"
  | "hover"
  | "typing"
  | "entered"
  | "error";

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label: string;
  error?: string;
  startSlot?: ReactNode;
  endSlot?: ReactNode;
  /** Зафиксированное состояние для сетки UI-kit (без взаимодействия) */
  visualVariant?: TextFieldVisualVariant;
};

const STATIC: Record<
  Exclude<TextFieldVisualVariant, "interactive">,
  { value: string; placeholder: string }
> = {
  default: { value: "", placeholder: "Placeholder" },
  hover: { value: "", placeholder: "Placeholder" },
  typing: { value: "Place", placeholder: "" },
  entered: { value: "Placeholder", placeholder: "" },
  error: { value: "", placeholder: "Placeholder" },
};

function DefaultStartSlot() {
  return (
    <span className={cn(styles.slot, styles.slotIcon)}>
      <WalletGlyph />
    </span>
  );
}

function DefaultEndSlot() {
  return (
    <>
      <span className={cn(styles.slot, styles.slotIcon)}>
        <WalletGlyph />
      </span>
      <span className={cn(styles.slot, styles.slotIcon)}>
        <TronGlyph />
      </span>
    </>
  );
}

export function TextField({
  label,
  error,
  startSlot,
  endSlot,
  className,
  visualVariant = "interactive",
  placeholder = "Placeholder",
  ...inputProps
}: TextFieldProps) {
  const fieldId = useId();
  const isStatic = visualVariant !== "interactive";
  const showError = visualVariant === "error" || Boolean(error);
  const errorMessage =
    error ?? (visualVariant === "error" ? "Text error" : undefined);

  const staticProps = isStatic
    ? STATIC[visualVariant as keyof typeof STATIC]
    : null;

  return (
    <div
      className={cn(
        styles.wrapper,
        showError && styles.hasError,
        isStatic && styles.static,
        visualVariant === "default" && styles.visualDefault,
        visualVariant === "hover" && styles.visualHover,
        visualVariant === "typing" && styles.visualTyping,
        visualVariant === "entered" && styles.visualEntered,
        visualVariant === "error" && styles.visualError,
        className,
      )}
    >
      <label className={styles.label} htmlFor={fieldId}>
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
          {...(staticProps
            ? {
                readOnly: true,
                tabIndex: -1,
                value: staticProps.value,
                placeholder: staticProps.placeholder,
              }
            : {})}
          {...(!isStatic ? { ...inputProps, placeholder } : {})}
          aria-invalid={showError || undefined}
        />
        {endSlot !== undefined ? (
          endSlot !== null ? (
            <span className={styles.slot}>{endSlot}</span>
          ) : null
        ) : (
          <DefaultEndSlot />
        )}
      </div>
      {showError && errorMessage ? (
        <p className={styles.errorText} role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
