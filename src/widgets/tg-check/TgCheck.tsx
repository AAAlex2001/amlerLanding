"use client";

import cn from "classnames";
import type { ReactNode } from "react";
import Image from "next/image";
import { Slider, type SliderSlide } from "@/features/slider";
import { useMediaQuery } from "@/shared/hooks";
import { Button, TypographyH2, TypographyP, TypographyTextMedium } from "@/shared/ui";
import {
  LightningGlyph,
  ProfileGlyph,
  ShieldGlyph,
  SparklesGlyph,
  SwipeGlyph,
  UsersGlyph,
} from "@/shared/ui/icons";
import styles from "./TgCheck.module.scss";

export type TgCheckProps = {
  className?: string;
  heading?: string;
  lead?: string;
  ctaText?: string;
  slides?: SliderSlide[];
};

const defaultSlides: SliderSlide[] = [
  {
    title: "",
    illustration: (
      <div className={styles.phoneSlideFigure}>
        <div className={styles.slideTopRow}>
          <TypographyTextMedium className={styles.slideTopText}>
            Проверка «на лету»: @amler T82Ks21k
          </TypographyTextMedium>
        </div>
        <div className={styles.phoneImageBox}>
          <Image
            src="/banner.png"
            alt="Превью бота в Telegram"
            fill
            sizes="220px"
            className={styles.phoneSlideImage}
          />
        </div>
      </div>
    ),
  },
  {
    title: "",
    illustration: (
      <div className={styles.phoneSlideFigure}>
        <div className={styles.slideTopRow}>
          <LightningGlyph className={styles.slideIcon} />
          <TypographyTextMedium className={styles.slideTopText}>
            Проверка по адресу, QR{"\n"}или на лету @amler T82Ks21k
          </TypographyTextMedium>
        </div>
        <div className={styles.phoneImageBox}>
          <Image
            src="/banner.png"
            alt="Превью бота в Telegram"
            fill
            sizes="220px"
            className={styles.phoneSlideImage}
          />
        </div>
      </div>
    ),
  },
  {
    title: "",
    illustration: (
      <div className={styles.phoneSlideFigure}>
        <div className={styles.slideTopRow}>
          <ShieldGlyph className={styles.slideIcon} />
          <TypographyTextMedium className={styles.slideTopText}>
            AI-оценка, риск-скор{"\n"}и портрет владельца
          </TypographyTextMedium>
        </div>
        <div className={styles.phoneImageBox}>
          <Image
            src="/banner.png"
            alt="Превью бота в Telegram"
            fill
            sizes="220px"
            className={styles.phoneSlideImage}
          />
        </div>
      </div>
    ),
  },
  {
    title: "",
    illustration: (
      <div className={styles.phoneSlideFigure}>
        <div className={styles.slideTopRow}>
          <SparklesGlyph className={styles.slideIcon} />
          <TypographyTextMedium className={styles.slideTopText}>
            Проверка безопасности кошелька
          </TypographyTextMedium>
        </div>
        <div className={styles.phoneImageBox}>
          <Image
            src="/banner.png"
            alt="Превью бота в Telegram"
            fill
            sizes="220px"
            className={styles.phoneSlideImage}
          />
        </div>
      </div>
    ),
  },
  {
    title: "",
    illustration: (
      <div className={styles.phoneSlideFigure}>
        <div className={styles.slideTopRow}>
          <UsersGlyph className={styles.slideIcon} />
          <TypographyTextMedium className={styles.slideTopText}>
            Для команд, чатов{"\n"}и P2P-сделок
          </TypographyTextMedium>
        </div>
        <div className={styles.phoneImageBox}>
          <Image
            src="/banner.png"
            alt="Превью бота в Telegram"
            fill
            sizes="220px"
            className={styles.phoneSlideImage}
          />
        </div>
      </div>
    ),
  },
];

const desktopTabs: { icon: ReactNode; text: string }[] = [
  {
    icon: <LightningGlyph className={styles.slideIcon} />,
    text: "Проверка по адресу, QR\nили на лету @amler T82Ks21k",
  },
  {
    icon: <SparklesGlyph className={styles.slideIcon} />,
    text: "AI-оценка, риск-скор\nи портрет владельца",
  },
  {
    icon: <ShieldGlyph className={styles.slideIcon} />,
    text: "Проверка безопасности\nкошелька",
  },
  {
    icon: <UsersGlyph className={styles.slideIcon} />,
    text: "Для команд, чатов\nи P2P-сделок",
  },
];

export function TgCheck({
  className,
  heading = "Быстрая AML-проверка\nв телеграм",
  lead = "Дарим 3 бесплатные проверки новым пользователям",
  ctaText = "Зарегистрироваться",
  slides = defaultSlides,
}: TgCheckProps) {
  const usTablet = useMediaQuery("(min-width: 768px)");
  const isDesctop = useMediaQuery("(min-width: 1440px)");
  const isMobile = !usTablet;

  return (
    <section className={cn(styles.root, className)}>
      <div className={styles.bg} aria-hidden>
        <div className={styles.bgLayer} />
        <div className={styles.bgLayer} />
        <div className={styles.bgLayer} />
        <div className={styles.bgLayer} />
      </div>

      <div className={styles.inner}>
        {isMobile ? (
          <>
            <div className={styles.intro}>
              <TypographyH2 className={styles.heading}>{heading}</TypographyH2>
              <div className={styles.leadRow}>
                <TypographyP className={styles.lead}>{lead}</TypographyP>
                <div className={styles.swipeWrap} aria-hidden>
                  <SwipeGlyph />
                </div>
              </div>
          </div>

            <Slider layout="embedded" slides={slides} className={styles.slider} />

            <Button variant="cta" icon={<ProfileGlyph />} className={styles.cta}>
              {ctaText}
            </Button>
          </>
        ) : isDesctop ? (
          <div className={styles.desktopPanel}>
            <div className={styles.desktopInfo}>
              <div className={styles.desktopTextGroup}>
                <TypographyH2 className={styles.desktopHeading}>{heading}</TypographyH2>
                <TypographyP className={styles.desktopLead}>{lead}</TypographyP>
              </div>
              <Button variant="cta" icon={<ProfileGlyph />} className={styles.desktopCta}>
                {ctaText}
              </Button>
            </div>

            <div className={styles.desktopImageWrap} aria-hidden>
              <Image
                src="/banner.png"
                alt="Превью бота в Telegram"
                fill
                sizes="334px"
                className={styles.desktopImage}
              />
            </div>

            <div className={styles.desktopTabs} aria-label="Функции AML-проверки">
              {desktopTabs.map((item, idx) => (
                <div
                  className={cn(styles.desktopTab, idx === 0 && styles.desktopTabActive)}
                  key={idx}
                >
                  {item.icon}
                  <TypographyTextMedium className={styles.desktopTabText}>
                    {item.text}
                  </TypographyTextMedium>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.desktopPanel}>
            <div className={styles.desktopLeft}>
              <div className={styles.desktopInfo}>
                <div className={styles.desktopTextGroup}>
                  <TypographyH2 className={styles.desktopHeading}>{heading}</TypographyH2>
                  <TypographyP className={styles.desktopLead}>{lead}</TypographyP>
                </div>
                <Button variant="cta" icon={<ProfileGlyph />} className={styles.desktopCta}>
                  {ctaText}
                </Button>
              </div>

              <div className={styles.desktopTabs} aria-label="Функции AML-проверки">
                {desktopTabs.map((item, idx) => (
                  <div
                    className={cn(styles.desktopTab, idx === 0 && styles.desktopTabActive)}
                    key={idx}
                  >
                    {item.icon}
                    <TypographyTextMedium className={styles.desktopTabText}>
                      {item.text}
                    </TypographyTextMedium>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.desktopImageWrap} aria-hidden>
              <Image
                src="/banner.png"
                alt="Превью бота в Telegram"
                fill
                sizes="334px"
                className={styles.desktopImage}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

