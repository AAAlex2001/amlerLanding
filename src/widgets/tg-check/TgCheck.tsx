"use client";

import cn from "classnames";
import Image from "next/image";
import { Slider, type SliderSlide } from "@/features/slider";
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

export function TgCheck({
  className,
  heading = "Быстрая AML-проверка\nв телеграм",
  lead = "Дарим 3 бесплатные проверки новым пользователям",
  ctaText = "Зарегистрироваться",
  slides = defaultSlides,
}: TgCheckProps) {
  return (
    <section className={cn(styles.root, className)}>
      <div className={styles.bg} aria-hidden />

      <div className={styles.inner}>
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
      </div>
    </section>
  );
}

