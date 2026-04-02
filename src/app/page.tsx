import { Hero } from "@/widgets/hero";
import { HowItWorksSlider } from "@/widgets/how-it-works-slider";
import { DetailedReport } from "@/widgets/detailed-report";
import { FreeChecks } from "@/widgets/free-checks";
import { Partners } from "@/widgets/partners";
import { IntegrationWidget } from "@/widgets/integration-widget";
import { TgCheck } from "@/widgets/tg-check";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroGroup}>
        <Hero />
        <Partners />
      </div>
      <HowItWorksSlider />
      <div className={styles.reportGroup}>
        <DetailedReport />
        <FreeChecks />
      </div>
      <TgCheck />
      <div className={styles.integrationGroup}>
        <IntegrationWidget />
      </div>
    </main>
  );
}
