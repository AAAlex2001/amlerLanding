"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import styles from "./Partners.module.scss";
import "swiper/css";

const PARTNER_LOGOS = [
  { src: "/partners/1.svg", alt: "Партнёр" },
  { src: "/partners/2.svg", alt: "Партнёр" },
  { src: "/partners/3.svg", alt: "Партнёр" },
  { src: "/partners/4.svg", alt: "Партнёр" },
] as const;

export type PartnersProps = {
  className?: string;
};

export function Partners({ className }: PartnersProps) {
  return (
    <section
      className={cn(styles.root, className)}
      aria-label="Партнёры"
    >
      <div className={styles.swiperWrap}>
        <Swiper
          className={styles.swiper}
          slidesPerView="auto"
          spaceBetween={40}
          loop
          centeredSlides={false}
        >
          {PARTNER_LOGOS.map((item, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.logoWrap}>
                <img
                  className={styles.logo}
                  src={item.src}
                  alt={item.alt}
                  width={140}
                  height={40}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
