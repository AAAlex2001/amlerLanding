export function EyeGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M18.8409 8.6132C19.5706 9.40973 19.5706 10.5903 18.8409 11.3868C17.1543 13.2281 13.8063 16.25 10 16.25C6.19373 16.25 2.84574 13.2281 1.15907 11.3868C0.42942 10.5903 0.429419 9.40973 1.15907 8.6132C2.84574 6.77192 6.19372 3.75 10 3.75C13.8063 3.75 17.1543 6.77192 18.8409 8.6132Z"
        fill="white"
        fillOpacity={0.15}
      />
      <circle cx="10" cy="10" r="3.75" fill="white" />
    </svg>
  );
}
