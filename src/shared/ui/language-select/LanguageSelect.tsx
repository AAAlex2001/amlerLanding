"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { ChevronDownGlyph, FlagRuGlyph, FlagUkGlyph } from "@/shared/ui/icons";
import styles from "./LanguageSelect.module.scss";

export type LanguageSelectVariant = "default" | "invert";

export type LanguageOption = { value: string; label: string };

export type LanguageSelectDemo = "default" | "hover" | "open";

export type LanguageSelectProps = {
  variant?: LanguageSelectVariant;
  options?: LanguageOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Статичные состояния для сетки макета */
  demo?: LanguageSelectDemo;
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
  demo,
  className,
}: LanguageSelectProps) {
  const [open, setOpen] = useState(false);
  const [uncontrolled, setUncontrolled] = useState(
    defaultValue ?? options[0]?.value ?? "ru",
  );
  const rootRef = useRef<HTMLDivElement>(null);

  const value = controlledValue ?? uncontrolled;
  const selected = options.find((o) => o.value === value) ?? options[0];

  const isStatic = demo !== undefined;
  const openState = isStatic ? demo === "open" : open;

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
    if (isStatic) {
      return;
    }
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [isStatic]);

  const isDark = variant === "default";

  const Flag = selected.value === "en" ? FlagUkGlyph : FlagRuGlyph;

  return (
    <div
      ref={rootRef}
      className={cn(
        styles.root,
        openState && !isStatic && styles.rootOpen,
        className,
      )}
    >
      <button
        type="button"
        className={cn(
          styles.trigger,
          isDark ? styles.triggerDark : styles.triggerInvert,
          !isStatic && openState && isDark && styles.triggerDarkOpen,
          !isStatic && openState && !isDark && styles.triggerInvertOpen,
          isDark &&
            isStatic &&
            demo === "hover" &&
            styles.triggerDarkStaticHover,
          isDark && isStatic && demo === "open" && styles.triggerDarkStaticOpen,
          !isDark &&
            isStatic &&
            demo === "open" &&
            styles.triggerInvertStaticOpen,
        )}
        aria-expanded={openState}
        aria-haspopup="listbox"
        disabled={isStatic}
        onClick={() => !isStatic && setOpen((o) => !o)}
      >
        <span className={styles.inner}>
          <Flag className={styles.flag} />
          <span className={styles.label}>{selected.label}</span>
        </span>
        <ChevronDownGlyph
          className={cn(styles.chevron, openState && styles.chevronOpen)}
        />
      </button>

      {openState && !isStatic ? (
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
