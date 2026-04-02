"use client";

import cn from "classnames";
import Image from "next/image";
import { Slider, type SliderSlide } from "@/features/slider";
import { Button, TypographyH2, TypographyP } from "@/shared/ui";
import { ProfileGlyph, SwipeGlyph } from "@/shared/ui/icons";
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
    title: "Проверка по адресу, QR или на лету @amler T82Ks21k",
    illustration: (
      <div className={styles.phoneSlideImageWrap}>
        <Image
          src="/banner.png"
          alt="Превью бота в Telegram"
          width={176}
          height={368}
          className={styles.phoneSlideImage}
        />
      </div>
    ),
  },
  {
    title: "Проверка «на лету»: @amler T82Ks21k",
    illustration: (
      <div className={styles.phoneSlideImageWrap}>
        <Image
          src="/banner.png"
          alt="Превью бота в Telegram"
          width={176}
          height={368}
          className={styles.phoneSlideImage}
        />
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

