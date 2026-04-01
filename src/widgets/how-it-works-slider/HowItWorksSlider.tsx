"use client";

import cn from "classnames";
import { Slider, type SliderSlide } from "@/features/slider";
import { TypographyH2, TypographyP } from "@/shared/ui";
import { SwipeGlyph } from "@/shared/ui/icons";
import {
  HowItWorksStep1Illustration,
  HowItWorksStep2Illustration,
  HowItWorksStep3Illustration,
} from "@/shared/ui/icons/how-it-works";
import styles from "./HowItWorksSlider.module.scss";

const defaultSlides: SliderSlide[] = [
  {
    eyebrow: "01",
    illustration: <HowItWorksStep1Illustration />,
    title: "Неизвестный\nкошелёк",
  },
  {
    eyebrow: "02",
    illustration: <HowItWorksStep2Illustration />,
    title: "Провайдеры собирают\nинформацию по транзакциям кошелька",
  },
  {
    eyebrow: "03",
    illustration: <HowItWorksStep3Illustration />,
    title: "Получаете отчёт\nс оценкой риска",
  },
  {
    variant: "risk",
    title: "Риски, связанные с незаконной деятельностью",
    chips: ["Скам", "Даркнет", "Санкции", "Миксеры", "Взломы"],
  },
];

export type HowItWorksSliderProps = {
  className?: string;
  heading?: string;
  lead?: string;
  slides?: SliderSlide[];
  swipeLabel?: string;
};

export function HowItWorksSlider({
  className,
  heading = "Что такое AML-проверка",
  lead = "Анализ криптокошелька, который помогает избежать блокировок, потери средств и проблем с биржами.",
  slides = defaultSlides,
  swipeLabel = "Листайте карточки",
}: HowItWorksSliderProps) {
  return (
    <section className={cn(styles.root, className)}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <TypographyH2>{heading}</TypographyH2>
            <TypographyP>{lead}</TypographyP>
          </div>
          <div className={styles.swipeWrap} aria-hidden title={swipeLabel}>
            <SwipeGlyph className={styles.swipeIcon} />
          </div>
        </div>

        <Slider layout="embedded" slides={slides} className={styles.slider} />
      </div>
    </section>
  );
}
