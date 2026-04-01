export function FlagRuGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      aria-hidden
    >
      <rect width={20} height={6.67} y={0} fill="#FFFFFF" />
      <rect width={20} height={6.67} y={6.67} fill="#0036A7" />
      <rect width={20} height={6.66} y={13.34} fill="#D62718" />
    </svg>
  );
}
