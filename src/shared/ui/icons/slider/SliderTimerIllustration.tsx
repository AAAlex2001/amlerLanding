type Props = { className?: string };

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
