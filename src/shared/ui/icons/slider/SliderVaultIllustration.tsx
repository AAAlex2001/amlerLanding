type Props = { className?: string };

export function SliderVaultIllustration({ className }: Props) {
  return (
    <img
      className={className}
      src="/slider/3.svg"
      width={200}
      height={200}
      alt=""
      decoding="async"
    />
  );
}
