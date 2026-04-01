type Props = { className?: string };

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
