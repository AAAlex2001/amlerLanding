"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { ChevronDownGlyph, FlagRuGlyph, FlagUkGlyph } from "@/shared/ui/icons";
import styles from "./LanguageSelect.module.scss";

export type LanguageSelectVariant = "default" | "invert";

export type LanguageOption = { value: string; label: string };

export type LanguageSelectProps = {
  variant?: LanguageSelectVariant;
  options?: LanguageOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export function LanguageSelect({
  variant = "default",
  options = [
    { value: "ru", label: "RUS" },
    { value: "en", label: "ENG" },
  ],
  value: controlledValue,
  defaultValue,
  onChange,
  className,
}: LanguageSelectProps) {
  const [open, setOpen] = useState(false);
  const [uncontrolled, setUncontrolled] = useState(
    defaultValue ?? options[0]?.value ?? "ru",
  );
  const rootRef = useRef<HTMLDivElement>(null);

  const value = controlledValue ?? uncontrolled;
  const selected = options.find((o) => o.value === value) ?? options[0];

  const setValue = useCallback(
    (v: string) => {
      if (controlledValue === undefined) {
        setUncontrolled(v);
      }
      onChange?.(v);
    },
    [controlledValue, onChange],
  );

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const isDark = variant === "default";

  const Flag = selected.value === "en" ? FlagUkGlyph : FlagRuGlyph;

  return (
    <div
      ref={rootRef}
      className={cn(styles.root, open && styles.open, className)}
    >
      <button
        type="button"
        className={cn(
          styles.trigger,
          isDark ? styles.triggerDark : styles.triggerInvert,
          open && isDark && styles.triggerDarkOpen,
          open && !isDark && styles.triggerInvertOpen,
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.inner}>
          <Flag className={styles.flag} />
          <span className={styles.label}>{selected.label}</span>
        </span>
        <ChevronDownGlyph
          className={cn(styles.chevron, open && styles.chevronOpen)}
        />
      </button>

      {open ? (
        <ul
          className={cn(styles.menu, isDark ? styles.menuDark : styles.menuInvert)}
          role="listbox"
        >
          {options.map((opt) => {
            const ItemFlag = opt.value === "en" ? FlagUkGlyph : FlagRuGlyph;
            return (
              <li key={opt.value} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={opt.value === value}
                  className={cn(
                    styles.menuItem,
                    isDark ? styles.menuItemDark : styles.menuItemLight,
                  )}
                  onClick={() => {
                    setValue(opt.value);
                    setOpen(false);
                  }}
                >
                  <ItemFlag className={styles.flag} />
                  <span className={styles.menuItemLabel}>{opt.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
