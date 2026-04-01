/** Упрощённая иконка токена (круг + знак), как в макете. */
export function TrxGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      aria-hidden
    >
      <rect
        width={20}
        height={20}
        rx={3.33}
        fill="currentColor"
        opacity={0.15}
      />
      <path
        d="M10 5.5L14 14h-2.2l-.8-2H8.9l-.8 2H6L10 5.5z"
        fill="currentColor"
      />
    </svg>
  );
}
