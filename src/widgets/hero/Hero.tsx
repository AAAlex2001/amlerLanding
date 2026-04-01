import { Button, TextField, TypographyH1, TypographyP } from "@/shared/ui";
import {
  BitcoinGlyph,
  ChevronRightGlyph,
  EthereumGlyph,
  ToncoinGlyph,
  TronGlyph,
} from "@/shared/ui/icons";
import { CointkitGlyph } from "@/shared/ui/icons";
import styles from "./Hero.module.scss";

export type HeroProps = {
  heading: string;
  lead: string;
  inputLabel: string;
  inputPlaceholder: string;
  chevronAriaLabel: string;
  providerName: string;
  providerSubtitle: string;
  providerButtonText: string;
  networksTitle: string;
  ctaText: string;
};

export function Hero({
  heading,
  lead,
  inputLabel,
  inputPlaceholder,
  chevronAriaLabel,
  providerName,
  providerSubtitle,
  providerButtonText,
  networksTitle,
  ctaText,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <TypographyH1>{heading}</TypographyH1>
        <TypographyP>{lead}</TypographyP>
      </div>

      <div className={styles.actions}>
        <div className={styles.inputRow}>
          <TextField
            className={styles.field}
            label={inputLabel}
            hideLabel
            placeholder={inputPlaceholder}
            endSlot={null}
            name="wallet"
            autoComplete="off"
          />
          <Button
            type="button"
            variant="icon"
            size="l"
            className={styles.iconBtn}
            aria-label={chevronAriaLabel}
          >
            <ChevronRightGlyph />
          </Button>
        </div>

        <div className={styles.stack}>
          <div className={styles.providerCard}>
            <div className={styles.providerRow}>
              <div className={styles.logoWrap}>
                <CointkitGlyph aria-hidden />
              </div>
              <div className={styles.meta}>
                <p className={styles.providerTitle}>{providerName}</p>
                <p className={styles.providerSubtitle}>{providerSubtitle}</p>
              </div>
              <Button
                type="button"
                variant="secondary"
                size="m"
                className={styles.providerBtn}
              >
                <span className={styles.providerButtonText}>
                  {providerButtonText}
                </span>
              </Button>
            </div>
          </div>

          <div className={styles.networks}>
            <p className={styles.networkTitle}>{networksTitle}</p>
            <div className={styles.networkIcons} aria-hidden>
              <TronGlyph size={20} />
              <EthereumGlyph size={20} />
              <BitcoinGlyph size={20} />
              <ToncoinGlyph size={20} />
            </div>
          </div>

          <Button type="button" variant="cta" size="l" className={styles.cta}>
            <span className={styles.ctaLabel}>{ctaText}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
