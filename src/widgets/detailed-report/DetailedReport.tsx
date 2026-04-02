"use client";

import { useState, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { Tabs, Tab, TypographyH2, TypographyH4, TypographyP } from "@/shared/ui";
import { ProgressBar, type ProgressBarLevel } from "@/shared/ui/progress-bar";
import { useMediaQuery } from "@/shared/hooks";
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

const CYCLE = [0, 1, 2, 3] as const;
const CYCLE_DELAY = 2000;

const RISK_LABELS = ["Низкий", "Средний", "Высокий"];

const ease: [number, number, number, number] = [0.45, 0, 0.55, 1];

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function DigitRoller({ digit, height }: { digit: number; height: number }) {
  return (
    <div className={styles.digitSlot}>
      <motion.div
        className={styles.digitStrip}
        animate={{ y: -digit * height }}
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

function RiskLevelRoller({ index, height }: { index: number; height: number }) {
  return (
    <div className={styles.riskLevelSlot}>
      <motion.div
        className={styles.riskLevelStrip}
        animate={{ y: -index * height }}
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
  heading?: string;
  tabs?: DetailedReportTab[];
};

const defaultTabs: DetailedReportTab[] = [
  { label: "Риск-скор", presetIndex: 0 },
  { label: "Ai-оценка и портрет владельца", presetIndex: 1 },
  { label: "Оценка риска от провайдера", presetIndex: 2 },
  { label: "Баланс кошелька", presetIndex: 3 },
  { label: "История транзакций", presetIndex: 4 },
  { label: "Телеграм-бот", presetIndex: 5 },
];

type PresetContent = {
  title: ReactNode;
  description: string;
  imageSrc: string;
};

const PRESET_CONTENT: Record<number, PresetContent> = {
  0: {
    title: "Риск-скор",
    description:
      "Совокупная оценка риска от выбранных провайдеров. Чем выше процент, тем выше риск.",
    imageSrc: "",
  },
  1: {
    title: "Ai-оценка и портрет владельца",
    description:
      "Совокупная оценка риска от выбранных провайдеров. Чем выше процент, тем выше риск.",
    imageSrc: "/detailedData/AI.svg",
  },
  2: {
    title: "Оценка риска от провайдера",
    description:
      "Совокупная оценка риска от выбранных провайдеров. Чем выше процент, тем выше риск.",
    imageSrc: "/detailedData/Providers.svg",
  },
  3: {
    title: "Баланс кошелька",
    description:
      "Совокупная оценка риска от выбранных провайдеров. Чем выше процент, тем выше риск.",
    imageSrc: "/detailedData/Crypto.svg",
  },
  4: {
    title: "История транзакций",
    description:
      "Совокупная оценка риска от выбранных провайдеров. Чем выше процент, тем выше риск.",
    imageSrc: "/detailedData/Payments.svg",
  },
  5: {
    title: "Телеграм-бот",
    description:
      "Совокупная оценка риска от выбранных провайдеров. Чем выше процент, тем выше риск.",
    imageSrc: "/detailedData/Robot.svg",
  },
};

export function DetailedReport({
  className,
  heading = "Подробный отчет\nо проверке",
  tabs = defaultTabs,
}: DetailedReportProps) {
  const [activeTab, setActiveTab] = useState(0);
  const activePresetIndex = tabs[activeTab]?.presetIndex ?? 0;
  const showRiskScore = activePresetIndex === 0;
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const digitH = isDesktop ? 72 : isTablet ? 60 : 54;
  const labelH = isDesktop ? 16 : isTablet ? 13 : 12;

  const [cycleIndex, setCycleIndex] = useState(0);

  useEffect(() => {
    if (!showRiskScore) return;
    const id = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % CYCLE.length);
    }, CYCLE_DELAY);
    return () => clearInterval(id);
  }, [showRiskScore]);

  const preset = PRESETS[CYCLE[cycleIndex]];
  const tens = Math.floor(preset.value / 10) % 10;
  const ones = preset.value % 10;

  const presetContent = PRESET_CONTENT[activePresetIndex];

  return (
    <section className={cn(styles.root, className)}>
      <TypographyH2>{heading}</TypographyH2>

      <div className={styles.content}>
        <div className={styles.tabBar}>
          <Tabs orientation={isDesktop ? "vertical" : "horizontal"}>
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
            <TypographyH4 align="start">{presetContent?.title}</TypographyH4>
            <TypographyP className={styles.description}>
              {presetContent?.description}
            </TypographyP>
          </div>

          {showRiskScore ? (
            <div
              className={styles.levelScreen}
              style={{
                boxShadow: `inset 0px 4px 116.8px ${preset.glow}`,
              }}
            >
              <div className={styles.levelInner}>
                <div className={styles.numberRow}>
                  <div className={styles.rollingNumber}>
                    <DigitRoller digit={tens} height={digitH} />
                    <DigitRoller digit={ones} height={digitH} />
                    <span className={styles.percentSign}>%</span>
                  </div>
                  <div className={styles.riskLabel}>
                    <RiskLevelRoller index={preset.labelIndex} height={labelH} />
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
          ) : (
            <div className={styles.svgScreen}>
              <img
                src={presetContent?.imageSrc}
                alt={typeof presetContent?.title === "string" ? presetContent.title : "Detailed report"}
                className={styles.svgImg}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
