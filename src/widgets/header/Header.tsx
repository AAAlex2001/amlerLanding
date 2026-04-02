"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { Button, LanguageSelect, TextLink } from "@/shared/ui";
import { AmlerLogo, AmlerLogoMark, TgGlyph } from "@/shared/ui/icons";
import styles from "./Header.module.scss";

const NAV_PRIMARY = [
  { href: "#aml", label: "Что такое AML" },
  { href: "#report", label: "Отчет о проверке" },
  { href: "#telegram", label: "Проверка в телеграм" },
] as const;

const NAV_SECONDARY = [
  { href: "/api", label: "Amler API" },
  { href: "/articles", label: "Статьи" },
] as const;

const DEFAULT_TELEGRAM_HREF = "https://t.me/";
const SCROLL_THRESHOLD = 32;

const logoSpring = {
  type: "spring" as const,
  stiffness: 520,
  damping: 38,
  mass: 0.75,
};

export type HeaderProps = {
  className?: string;
  telegramHref?: string;
};

export function Header({
  className,
  telegramHref = DEFAULT_TELEGRAM_HREF,
}: HeaderProps) {
  const [glass, setGlass] = useState(false);

  useEffect(() => {
    const sync = () => setGlass(window.scrollY > SCROLL_THRESHOLD);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <header className={cn(styles.root, glass && styles.rootGlass, className)}>
      <div className={styles.shell}>
        <div className={cn(styles.inner, glass && styles.innerGlass)}>
          <ul className={styles.navPrimary} aria-label="Разделы">
            {NAV_PRIMARY.map((item) => (
              <li key={item.href}>
                <TextLink href={item.href} variant="header">
                  {item.label}
                </TextLink>
              </li>
            ))}
          </ul>

          <NextLink
            href="/"
            className={styles.logoLink}
            aria-label="Amler — на главную"
          >
            <span className={styles.logoSlot}>
              <AnimatePresence mode="wait" initial={false}>
                {glass ? (
                  <motion.span
                    key="mark"
                    initial={{ opacity: 0, scale: 0.88, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.88, filter: "blur(6px)" }}
                    transition={logoSpring}
                    style={{
                      display: "inline-flex",
                      position: "absolute",
                      inset: 0,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AmlerLogoMark className={styles.logoCompact} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="full"
                    initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                    transition={logoSpring}
                    style={{
                      display: "inline-flex",
                      position: "absolute",
                      inset: 0,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AmlerLogo className={styles.logo} />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </NextLink>

          <div className={styles.right}>
            <ul className={styles.navSecondary} aria-label="Сервисы">
              {NAV_SECONDARY.map((item) => (
                <li key={item.href}>
                  <TextLink href={item.href} variant="header">
                    {item.label}
                  </TextLink>
                </li>
              ))}
            </ul>

            <div className={styles.rightControls}>
              <div className={styles.lang}>
                <LanguageSelect />
              </div>
              <Button
                variant="cta"
                size="m"
                icon={<TgGlyph />}
                href={telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tgBtn}
              >
                Телеграм-бот
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
