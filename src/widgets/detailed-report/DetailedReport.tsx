"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { Tabs, Tab, TypographyH4, TypographyP } from "@/shared/ui";
import { ProgressBar, type ProgressBarLevel } from "@/shared/ui/progress-bar";
import styles from "./DetailedReport.module.scss";

type RiskPreset = {
  value: number;
  filled: number;
  level: ProgressBarLevel;
  glow: string;
  labelIndex: number; // 0 = Низкий, 1 = Средний, 2 = Высокий
};

const PRESETS: RiskPreset[] = [
  { value: 0, filled: 0, level: "low", glow: "rgba(76, 167, 62, 0.5)", labelIndex: 0 },
  { value: 13, filled: 4, level: "low", glow: "rgba(76, 167, 62, 0.5)", labelIndex: 0 },
  { value: 45, filled: 8, level: "medium", glow: "rgba(219, 104, 32, 0.5)", labelIndex: 1 },
  { value: 95, filled: 17, level: "high", glow: "#933D3E", labelIndex: 2 },
];

const RISK_LABELS = ["Низкий", "Средний", "Высокий"];

const ease: [number, number, number, number] = [0.45, 0, 0.55, 1];

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function DigitRoller({ digit }: { digit: number }) {
  return (
    <div className={styles.digitSlot}>
      <motion.div
        className={styles.digitStrip}
        animate={{ y: -digit * 72 }}
        transition={{ duration: 0.6, ease }}
      >
        {DIGITS.map((d, i) => (
          <span key={i} className={styles.digit}>
            {d}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function RiskLevelRoller({ index }: { index: number }) {
  return (
    <div className={styles.riskLevelSlot}>
      <motion.div
        className={styles.riskLevelStrip}
        animate={{ y: -index * 16 }}
        transition={{ duration: 0.4, ease }}
      >
        {RISK_LABELS.map((label, i) => (
          <span key={i} className={styles.riskLevelItem}>
            {label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export type DetailedReportTab = {
  label: string;
  presetIndex: number;
};

export type DetailedReportProps = {
  className?: string;
  title?: string;
  description?: string;
  tabs?: DetailedReportTab[];
};

const defaultTabs: DetailedReportTab[] = [
  { label: "Риск-скор", presetIndex: 0 },
  { label: "Источники средств", presetIndex: 1 },
  { label: "Назначение средств", presetIndex: 2 },
  { label: "Контрагенты", presetIndex: 3 },
  { label: "Связанные кошельки", presetIndex: 1 },
  { label: "Транзакции", presetIndex: 2 },
];

export function DetailedReport({
  className,
  title = "Риск-скор",
  description = "Совокупная оценка риска от выбранных провайдеров. Чем выше процент, тем выше риск.",
  tabs = defaultTabs,
}: DetailedReportProps) {
  const [activeTab, setActiveTab] = useState(0);
  const preset = PRESETS[tabs[activeTab]?.presetIndex ?? 0];
  const tens = Math.floor(preset.value / 10) % 10;
  const ones = preset.value % 10;

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.tabBar}>
        <Tabs orientation="horizontal">
          {tabs.map((tab, i) => (
            <Tab
              key={i}
              active={i === activeTab}
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </Tab>
          ))}
        </Tabs>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <TypographyH4 align="start">{title}</TypographyH4>
          <TypographyP className={styles.description}>{description}</TypographyP>
        </div>

        <div
          className={styles.levelScreen}
          style={{
            boxShadow: `inset 0px 4px 116.8px ${preset.glow}`,
          }}
        >
          <div className={styles.levelInner}>
            <div className={styles.numberRow}>
              <div className={styles.rollingNumber}>
                <DigitRoller digit={tens} />
                <DigitRoller digit={ones} />
                <span className={styles.percentSign}>%</span>
              </div>
              <div className={styles.riskLabel}>
                <RiskLevelRoller index={preset.labelIndex} />
                <span className={styles.riskStatic}>уровень риска</span>
              </div>
            </div>

            <div className={styles.progressBarWrap}>
              <ProgressBar
                filled={preset.filled}
                total={18}
                level={preset.level}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
