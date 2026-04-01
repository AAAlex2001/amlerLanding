"use client";

import { useRef, useState, type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import cn from "classnames";
import { Button } from "@/shared/ui/button";
import { ChevronRightGlyph } from "@/shared/ui/icons";
import { Pagination } from "@/shared/ui/pagination";
import styles from "./Slider.module.scss";
import "swiper/css";

export type SliderSlide = {
  title: string;
  illustration: ReactNode;
};

export type SliderProps = {
  slides: SliderSlide[];
  className?: string;
};

export function Slider({ slides, className }: SliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn(styles.root, className)}>
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

      <div className={styles.center}>
        <div className={styles.swiperWrap}>
          <Swiper
            className={styles.swiper}
            slidesPerView={1}
            spaceBetween={0}
            loop
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
                  <div className={styles.illustration}>{slide.illustration}</div>
                  <h4 className={styles.title}>{slide.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Pagination
          count={slides.length}
          activeIndex={activeIndex}
          onDotClick={(idx) => swiperRef.current?.slideToLoop(idx)}
          className={styles.pagination}
        />
      </div>

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
    </div>
  );
}
