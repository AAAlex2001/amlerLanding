"use client";

import { useRef, useState, type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import cn from "classnames";
import { useMediaQuery } from "@/shared/hooks";
import { Button } from "@/shared/ui/button";
import { Chip, ChipGroup, TypographyH4, TypographyTextMedium } from "@/shared/ui";
import { ChevronRightGlyph } from "@/shared/ui/icons";
import { HowItWorksCardInteractionProvider } from "@/shared/ui/icons/how-it-works";
import { Pagination } from "@/shared/ui/pagination";
import styles from "./Slider.module.scss";
import "swiper/css";

export type SliderLayout = "default" | "embedded";

export type SliderSlide =
  | {
      title: string;
      illustration: ReactNode;
      eyebrow?: string;
      variant?: undefined;
    }
  | {
      title: string;
      variant: "risk";
      chips: readonly string[];
      eyebrow?: string;
    };

export type SliderProps = {
  slides: SliderSlide[];
  className?: string;
  layout?: SliderLayout;
};

function EmbeddedSlideCard({ slide }: { slide: SliderSlide }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        styles.slideMain,
        styles.slideMainEmbedded,
        slide.variant === "risk" && styles.slideMainRisk,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {slide.eyebrow != null && slide.eyebrow !== "" && (
        <TypographyTextMedium className={styles.embeddedEyebrow}>
          {slide.eyebrow}
        </TypographyTextMedium>
      )}
      {slide.variant !== "risk" && (
        <div
          className={cn(styles.illustration, styles.illustrationEmbedded)}
        >
          <HowItWorksCardInteractionProvider value={hovered}>
            {slide.illustration}
          </HowItWorksCardInteractionProvider>
        </div>
      )}
      {slide.variant === "risk" ? (
        <>
          <TypographyH4 align="start" className={styles.riskHeading}>
            {slide.title.split("\n").map((line, idx) => (
              <span key={idx} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </TypographyH4>
          <ChipGroup className={styles.riskChips}>
            {slide.chips.map((label, idx) => (
              <Chip key={`${label}-${idx}`}>{label}</Chip>
            ))}
          </ChipGroup>
        </>
      ) : (
        <TypographyTextMedium className={styles.embeddedCardCaption}>
          {slide.title.split("\n").map((line, idx) => (
            <span key={idx} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </TypographyTextMedium>
      )}
    </div>
  );
}

export function Slider({ slides, className, layout = "default" }: SliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const embedded = layout === "embedded";
  const loop = !embedded && slides.length > 1;
  const wideDesktop = useMediaQuery("(min-width: 1440px)");
  const embeddedSwiper = embedded && !wideDesktop;

  return (
    <div
      className={cn(styles.root, embedded && styles.rootEmbedded, className)}
    >
      {!embedded && (
        <div className={styles.navCol}>
          <Button
            type="button"
            variant="icon"
            size="m"
            iconRail
            className={styles.navBtn}
            aria-label="Предыдущий слайд"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <span className={styles.navIconFlip}>
              <ChevronRightGlyph />
            </span>
          </Button>
        </div>
      )}

      <div className={cn(styles.center, embedded && styles.centerEmbedded)}>
        <div
          className={cn(styles.swiperWrap, embedded && styles.swiperWrapEmbedded)}
        >
          {embedded && wideDesktop ? (
            <div className={styles.embeddedTrack}>
              {slides.map((slide, i) => (
                <div key={i} className={styles.embeddedCell}>
                  <EmbeddedSlideCard slide={slide} />
                </div>
              ))}
            </div>
          ) : null}

          {embeddedSwiper ? (
            <Swiper
              className={cn(styles.swiper, styles.swiperEmbedded)}
              slidesPerView="auto"
              spaceBetween={20}
              loop={false}
              watchOverflow
              autoHeight={false}
              onSwiper={(s) => {
                swiperRef.current = s;
              }}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i} className={styles.embeddedSwiperSlide}>
                  <EmbeddedSlideCard slide={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}

          {!embedded ? (
            <Swiper
              className={styles.swiper}
              slidesPerView={1}
              spaceBetween={0}
              loop={loop}
              autoHeight={false}
              onSwiper={(s) => {
                swiperRef.current = s;
                setActiveIndex(s.realIndex);
              }}
              onSlideChange={(s) => setActiveIndex(s.realIndex)}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i} className={styles.slide}>
                  <div className={styles.slideMain}>
                    {slide.variant === "risk" ? null : (
                      <>
                        <div className={styles.illustration}>{slide.illustration}</div>
                        <TypographyH4 className={styles.marketingTitle}>
                          {slide.title}
                        </TypographyH4>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>

        {!embedded && (
          <Pagination
            count={slides.length}
            activeIndex={activeIndex}
            onDotClick={(idx) => {
              const s = swiperRef.current;
              if (!s) return;
              if (loop) s.slideToLoop(idx);
              else s.slideTo(idx);
            }}
            className={styles.pagination}
          />
        )}
      </div>

      {!embedded && (
        <div className={styles.navCol}>
          <Button
            type="button"
            variant="icon"
            size="m"
            iconRail
            className={styles.navBtn}
            aria-label="Следующий слайд"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRightGlyph />
          </Button>
        </div>
      )}
    </div>
  );
}
