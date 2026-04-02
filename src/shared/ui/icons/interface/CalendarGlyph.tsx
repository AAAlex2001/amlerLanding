"use client";

import { useId } from "react";

export function CalendarGlyph({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const clipId = `cal-clip-${uid}`;

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
        <rect
          x="1.25"
          y="2.5"
          width="17.5"
          height="17.5"
          rx="2.5"
          fill="white"
          fillOpacity={0.15}
        />
        <line
          x1="1.25"
          y1="8.125"
          x2="18.75"
          y2="8.125"
          stroke="white"
          strokeWidth="1.25"
        />
        <line
          x1="5.625"
          y1="0.625"
          x2="5.625"
          y2="1.875"
          stroke="white"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <line
          x1="14.375"
          y1="0.625"
          x2="14.375"
          y2="1.875"
          stroke="white"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="17.5" height="20" fill="white" transform="translate(1.25)" />
        </clipPath>
      </defs>
    </svg>
  );
}
