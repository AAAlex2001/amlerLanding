import { Slider } from "@/features/slider";
import {
  SliderChatIllustration,
  SliderPhoneIllustration,
  SliderTimerIllustration,
  SliderVaultIllustration,
} from "@/shared/ui/icons";
import { Hero } from "@/widgets/hero";
import { HowItWorksSlider } from "@/widgets/how-it-works-slider";
import { DetailedReport } from "@/widgets/detailed-report";
import { FreeChecks } from "@/widgets/free-checks";
import { Partners } from "@/widgets/partners";
import styles from "./page.module.scss";

const heroCopy = {
  heading: "AML-проверка криптокошелька",
  lead: "Агрегированный анализ от 3 AML-провайдеров + AI-оценка риска",
  inputLabel: "Адрес кошелька",
  inputPlaceholder: "введите адрес кошелька",
  chevronAriaLabel: "Далее",
  providerName: "КоинКит",
  providerSubtitle: "бесплатно",
  providerButtonText: "Подключить",
  networksTitle: "Проверка в сетях:",
  ctaText: "Проверить кошелёк",
};

const sliderSlides = [
  {
    title: "Быстрая\nпроверка кошелька",
    illustration: <SliderTimerIllustration />,
  },
  {
    title: "Удобный\nTelegram-бот",
    illustration: <SliderPhoneIllustration />,
  },
  {
    title: "Недорогая стоимость\nпроверки",
    illustration: <SliderVaultIllustration />,
  },
  {
    title: "Подробные отчеты\nв удобных форматах",
    illustration: <SliderChatIllustration />,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroSliderRow}>
        <Hero {...heroCopy} />
        <Slider slides={sliderSlides} />
      </div>
      <Partners />
      <HowItWorksSlider />
      <div className={styles.reportGroup}>
        <DetailedReport />
        <FreeChecks />
      </div>
    </main>
  );
}
