export function WalletGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      aria-hidden
    >
      <rect
        x={2.25}
        y={4}
        width={17.5}
        height={15}
        rx={2.5}
        fill="currentColor"
        opacity={0.15}
      />
      <rect x={11.25} y={7.5} width={6.25} height={5} rx={2.5} fill="currentColor" />
    </svg>
  );
}
