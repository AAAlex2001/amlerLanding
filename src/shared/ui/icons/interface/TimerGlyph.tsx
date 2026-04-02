"use client";

import { useId } from "react";

export function TimerGlyph({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const clipId = `timer-clip-${uid}`;

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
      <g clipPath={`url(#${clipId})`}>
        <circle cx="10" cy="10" r="10" fill="white" fillOpacity={0.15} />
        <path
          d="M10 5.3335V10.6668L14.6667 14.0002"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
