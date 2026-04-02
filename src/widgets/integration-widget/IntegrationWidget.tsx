"use client";

import cn from "classnames";
import { TypographyH3, TypographyP, Button, Chip } from "@/shared/ui";
import { IntegrationIllustration } from "./IntegrationIllustration";
import styles from "./IntegrationWidget.module.scss";

const CHIPS = [
  "Интеграция за 10 минут",
  "Командный доступ",
  "Цена проверки от $0.1",
  "Массовые проверки",
  "Multi-provider скоринг",
  "REST API с документацией",
];

export type IntegrationWidgetProps = {
  className?: string;
};

export function IntegrationWidget({ className }: IntegrationWidgetProps) {
  return (
    <section className={cn(styles.root, className)}>
      <div className={styles.stack}>
        <div className={styles.textBlock}>
          <TypographyH3 className={styles.title}>
            Интегрируйте Amler{"\n"}в свой бизнес
          </TypographyH3>
          <TypographyP>
            Подходит для обменников, платёжных сервисов, кошельков и
            криптоплатформ.
          </TypographyP>
        </div>

        <div className={styles.chips}>
          {CHIPS.map((label) => (
            <Chip key={label} className={styles.chip}>
              {label}
            </Chip>
          ))}
        </div>

        <div className={styles.buttons}>
          <Button variant="cta" className={styles.btnPrimary}>
            Открыть документацию
          </Button>
          <Button variant="secondary" className={styles.btnSecondary}>
            Техподдержка
          </Button>
        </div>
      </div>

      <IntegrationIllustration className={styles.illustration} />
    </section>
  );
}
