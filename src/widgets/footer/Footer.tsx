import NextLink from "next/link";
import Image from "next/image";
import cn from "classnames";
import { Button, LanguageSelect, TextLink, TypographyText } from "@/shared/ui";
import { AmlerLogo, MailGlyph, TgGlyph } from "@/shared/ui/icons";
import styles from "./Footer.module.scss";
import { FooterBottomGlow } from "./FooterBottomGlow";

const NAV_ITEMS = [
  { href: "/", label: "Главная" },
  { href: "/articles", label: "Статьи" },
  { href: "/api", label: "Amler API" },
] as const;

const LEGAL_ITEMS = [
  { href: "/terms", label: "Пользовательское соглашение" },
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/legal", label: "Правовая информация" },
] as const;

export type FooterProps = {
  className?: string;
  email?: string;
};

export function Footer({
  className,
  email = "email@amler.ru",
}: FooterProps) {
  return (
    <footer className={cn(styles.root, className)}>
      <FooterBottomGlow />
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.topRow}>
            <NextLink
              href="/"
              className={styles.logoLink}
              aria-label="Amler — на главную"
            >
              <AmlerLogo className={styles.logo} />
            </NextLink>
            <LanguageSelect
              className={styles.lang}
              menuOpenUpFromMinWidthPx={1440}
            />
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.upper}>
            <div className={styles.navColumn}>
              <nav aria-label="Навигация в подвале">
                <ul className={styles.navList}>
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <TextLink
                        href={item.href}
                        variant="header"
                        className={styles.navLink}
                      >
                        {item.label}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <a className={styles.emailRow} href={`mailto:${email}`}>
              <MailGlyph className={styles.emailIcon} />
              <TypographyText className={styles.emailText}>{email}</TypographyText>
            </a>
          </div>
          <div className={styles.lower}>
            <div className={styles.legalColumn}>
              <ul className={styles.legalList}>
                {LEGAL_ITEMS.map((item) => (
                  <li key={item.href}>
                    <TextLink href={item.href} className={styles.legalLink}>
                      {item.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.copyright}>Amler © 2026</p>
          </div>
        </div>

        <div className={styles.preview}>
          <div className={styles.previewFrame}>
            <Image
              src="/banner.png"
              alt="Интерфейс Amler в Telegram"
              fill
              sizes="310px"
              className={styles.previewImg}
              priority={false}
            />
            <div className={styles.previewCta}>
              <Button
                variant="cta"
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                icon={<TgGlyph />}
                className={styles.previewCtaBtn}
              >
                Пороверить бесплатно
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
