"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { LanguageSelect, TextLink } from "@/shared/ui";
import { TgGlyph } from "@/shared/ui/icons";
import { AmlerLogo } from "./AmlerLogo";
import { AmlerLogoMark } from "./AmlerLogoMark";
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

const springBar = {
  type: "spring" as const,
  stiffness: 380,
  damping: 34,
  mass: 0.9,
};

const easeOut = [0.16, 1, 0.3, 1] as const;

const logoTransition = {
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
    <motion.header
      className={cn(styles.root, className)}
      initial={false}
      animate={{
        backgroundColor: glass ? "rgba(34, 34, 34, 0)" : "rgb(34, 34, 34)",
      }}
      transition={{ duration: 0.4, ease: easeOut }}
    >
      <div className={styles.shell}>
        <motion.div
          className={cn(styles.bar, glass && styles.barFloating, glass && styles.barBlur)}
          initial={false}
          animate={{
            padding: glass ? 12 : 0,
            borderRadius: glass ? 12 : 0,
            backgroundColor: glass ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0)",
          }}
          transition={{
            padding: springBar,
            borderRadius: springBar,
            backgroundColor: { duration: 0.42, ease: easeOut },
          }}
        >
          <div
            className={cn(
              styles.inner,
              glass && styles.innerDocked,
            )}
          >
            <ul className={styles.navPrimary} aria-label="Разделы">
              {NAV_PRIMARY.map((item) => (
                <li key={item.href}>
                  <TextLink href={item.href} variant="header">
                    {item.label}
                  </TextLink>
                </li>
              ))}
            </ul>

            <NextLink href="/" className={styles.logoLink} aria-label="Amler — на главную">
              <motion.span
                className={styles.logoSlot}
                layout
                animate={{ width: glass ? 41 : 111 }}
                transition={springBar}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {glass ? (
                    <motion.span
                      key="mark"
                      initial={{ opacity: 0, scale: 0.88, filter: "blur(5px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.88, filter: "blur(5px)" }}
                      transition={logoTransition}
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
                      initial={{ opacity: 0, scale: 0.92, filter: "blur(5px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.92, filter: "blur(5px)" }}
                      transition={logoTransition}
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
              </motion.span>
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
                <a
                  href={telegramHref}
                  className={styles.tgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TgGlyph className={styles.tgIcon} />
                  <span className={styles.tgLabel}>Телеграм-бот</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
