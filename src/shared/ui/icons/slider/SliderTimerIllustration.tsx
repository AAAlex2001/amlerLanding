type Props = { className?: string };

/** Иллюстрация слайда 1: таймер / быстрая проверка (160×160). */
export function SliderTimerIllustration({ className }: Props) {
  return (
    <img
      className={className}
      src="/slider/1.svg"
      width={200}
      height={200}
      alt=""
      decoding="async"
    />
  );
}
