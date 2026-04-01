import NextLink from "next/link";
import cn from "classnames";
import { LanguageSelect, TextLink } from "@/shared/ui";
import { TgGlyph } from "@/shared/ui/icons";
import { AmlerLogo } from "./AmlerLogo";
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

export type HeaderProps = {
  className?: string;
  telegramHref?: string;
};

export function Header({
  className,
  telegramHref = DEFAULT_TELEGRAM_HREF,
}: HeaderProps) {
  return (
    <header className={cn(styles.root, className)}>
      <div className={styles.shell}>
        <div className={styles.inner}>
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
            <AmlerLogo className={styles.logo} />
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
      </div>
    </header>
  );
}
