"use client";

import {
  TypographyH2,
  TypographyH5,
  TypographyP,
  TypographyCaption,
  TypographyText,
  Chip,
} from "@/shared/ui";
import {
  SwipeGlyph,
  CalendarGlyph,
  TimerGlyph,
  EyeGlyph,
} from "@/shared/ui/icons";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./NewsSection.module.scss";

export type NewsArticle = {
  id: string;
  imageSrc: string;
  badgeLabel: string;
  publishedAt: string;
  readTime: string;
  views: string;
  title: string;
  excerpt: string;
  href: string;
};

const DEFAULT_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    imageSrc: "/news/news1.png",
    badgeLabel: "10.12.2025 – 10.01.2026",
    publishedAt: "12.02.2025 14:22",
    readTime: "5 мин",
    views: "3 231",
    title: "Что такое AML и почему важно проверять криптовалюту",
    excerpt:
      "За последние 6 лет только через выявленные криптовалютные адреса, связанных с незаконной деятельностью (доходы от даркнет площадок, программ-вымогателей, мошенничества, терроризма …) прошло около 60 млрд долларов. Некоторые из этих средств проходили процесс «отмывания» через биржи, миксеры, а также счета рядовых пользователей.",
    href: "/news/aml-basics",
  },
  {
    id: "2",
    imageSrc: "/news/news2.png",
    badgeLabel: "10.12.2025 – 10.01.2026",
    publishedAt: "12.02.2025 14:22",
    readTime: "5 мин",
    views: "3 231",
    title: "Что такое AML и почему важно проверять криптовалюту",
    excerpt:
      "За последние 6 лет только через выявленные криптовалютные адреса, связанных с незаконной деятельностью (доходы от даркнет площадок, программ-вымогателей, мошенничества, терроризма …) прошло около 60 млрд долларов. Некоторые из этих средств проходили процесс «отмывания» через биржи, миксеры, а также счета рядовых пользователей.",
    href: "/news/aml-compliance",
  },
  {
    id: "3",
    imageSrc: "/news/news3.png",
    badgeLabel: "10.12.2025 – 10.01.2026",
    publishedAt: "12.02.2025 14:22",
    readTime: "5 мин",
    views: "3 231",
    title: "Что такое AML и почему важно проверять криптовалюту",
    excerpt:
      "За последние 6 лет только через выявленные криптовалютные адреса, связанных с незаконной деятельностью (доходы от даркнет площадок, программ-вымогателей, мошенничества, терроризма …) прошло около 60 млрд долларов. Некоторые из этих средств проходили процесс «отмывания» через биржи, миксеры, а также счета рядовых пользователей.",
    href: "/news/crypto-screening",
  },
  {
    id: "4",
    imageSrc: "/news/news4.png",
    badgeLabel: "10.12.2025 – 10.01.2026",
    publishedAt: "12.02.2025 14:22",
    readTime: "5 мин",
    views: "3 231",
    title: "Что такое AML и почему важно проверять криптовалюту",
    excerpt:
      "За последние 6 лет только через выявленные криптовалютные адреса, связанных с незаконной деятельностью (доходы от даркнет площадок, программ-вымогателей, мошенничества, терроризма …) прошло около 60 млрд долларов. Некоторые из этих средств проходили процесс «отмывания» через биржи, миксеры, а также счета рядовых пользователей.",
    href: "/news/regulation",
  },
];

type NewsArticleCardProps = {
  article: NewsArticle;
  onReadClick?: (article: NewsArticle) => void;
};

function NewsArticleCard({ article, onReadClick }: NewsArticleCardProps) {
  return (
    <article className={styles.article}>
      <div className={styles.cover}>
        <div
          className={styles.coverMedia}
          style={{ backgroundImage: `url(${article.imageSrc})` }}
          aria-hidden
        />
        <Chip variant="accent">{article.badgeLabel}</Chip>
      </div>
      <div className={styles.body}>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <CalendarGlyph />
            <TypographyCaption muted>{article.publishedAt}</TypographyCaption>
          </div>
          <div className={styles.metaItem}>
            <TimerGlyph />
            <TypographyCaption muted>{article.readTime}</TypographyCaption>
          </div>
          <div className={styles.metaItem}>
            <EyeGlyph />
            <TypographyCaption muted>{article.views}</TypographyCaption>
          </div>
        </div>
        <div className={styles.textBlock}>
          <TypographyH5>{article.title}</TypographyH5>
          <TypographyP className={styles.excerpt}>{article.excerpt}</TypographyP>
          <button
            type="button"
            className={styles.hit}
            onClick={() => onReadClick?.(article)}
          >
            <TypographyText className={styles.accentText}>
              Читать статью
            </TypographyText>
          </button>
        </div>
      </div>
    </article>
  );
}

export type NewsSectionProps = {
  className?: string;
  articles?: NewsArticle[];
  onAllArticlesClick?: () => void;
  onArticleClick?: (article: NewsArticle) => void;
};

export function NewsSection({
  className,
  articles = DEFAULT_ARTICLES,
  onAllArticlesClick,
  onArticleClick,
}: NewsSectionProps) {
  return (
    <section
      className={cn(styles.root, className)}
      aria-labelledby="news-section-title"
    >
      <div className={styles.inner}>
        <div className={styles.headRow}>
          <div className={styles.headText}>
            <TypographyH2 id="news-section-title">Статьи</TypographyH2>
            <button
              type="button"
              className={styles.hit}
              onClick={() => onAllArticlesClick?.()}
            >
              <TypographyText className={styles.accentText}>
                Все статьи
              </TypographyText>
            </button>
          </div>
          <SwipeGlyph className={styles.swipe} aria-hidden />
        </div>

        <Swiper
          className={styles.swiper}
          slidesPerView="auto"
          spaceBetween={20}
          grabCursor
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id} className={styles.slide}>
              <NewsArticleCard
                article={article}
                onReadClick={onArticleClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
