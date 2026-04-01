type Props = { className?: string };

/** Иллюстрация слайда 2: узкий телефон (79×160 в макете). */
export function SliderPhoneIllustration({ className }: Props) {
  return (
    <img
      className={className}
      src="/slider/2.svg"
      width={200}
      height={200}
      alt=""
      decoding="async"
    />
  );
}
