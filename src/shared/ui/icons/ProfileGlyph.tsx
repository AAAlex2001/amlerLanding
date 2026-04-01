export function ProfileGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      aria-hidden
    >
      <circle cx={10} cy={7} r={5} fill="currentColor" />
      <ellipse cx={10} cy={15.5} rx={9.375} ry={4.375} fill="currentColor" opacity={0.15} />
    </svg>
  );
}
