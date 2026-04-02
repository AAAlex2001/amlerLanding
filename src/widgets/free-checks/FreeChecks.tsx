"use client";

import { motion } from "framer-motion";
import cn from "classnames";
import { TypographyH3, TypographyP, Button } from "@/shared/ui";
import { ProfileGlyph } from "@/shared/ui/icons";
import styles from "./FreeChecks.module.scss";

const BAR_HEIGHTS = [289, 249, 199, 144, 109, 144, 199, 249, 289];

export type FreeChecksProps = {
  className?: string;
};

const TOTAL = BAR_HEIGHTS.length;
const BAR_DURATION = 0.6;
const BAR_STAGGER = 0.2;
const CYCLE_PAUSE = 1.2;

export function FreeChecks({ className }: FreeChecksProps) {
  return (
    <section className={cn(styles.root, className)}>
      <div className={styles.bars}>
        {BAR_HEIGHTS.map((h, i) => (
          <div key={i} className={styles.bar} style={{ height: h }}>
            <motion.div
              className={styles.barInner}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: BAR_DURATION,
                repeat: Infinity,
                repeatDelay: (TOTAL - 1) * BAR_STAGGER + CYCLE_PAUSE,
                ease: "easeInOut",
                delay: i * BAR_STAGGER,
              }}
            />
          </div>
        ))}
      </div>

      <div className={styles.body}>
        <TypographyH3>
          Дарим 3 бесплатные проверки{"\n"}новым пользователям
        </TypographyH3>
        <TypographyP className={styles.subtitle}>
          Регистрация через email или телеграм-id
        </TypographyP>
      </div>

      <Button
        variant="cta"
        icon={<ProfileGlyph />}
        className={styles.cta}
      >
        Зарегистрироваться
      </Button>
    </section>
  );
}
