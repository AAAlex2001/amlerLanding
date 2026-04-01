import { Hero } from "@/widgets/hero";
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

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero {...heroCopy} />
    </main>
  );
}
