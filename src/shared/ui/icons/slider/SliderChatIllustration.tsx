type Props = { className?: string };

/** Иллюстрация слайда 4: чат / документы. */
export function SliderChatIllustration({ className }: Props) {
  return (
    <img
      className={className}
      src="/slider/4.svg"
      width={200}
      height={200}
      alt=""
      decoding="async"
    />
  );
}
