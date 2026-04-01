"use client";

import { useId } from "react";

export function FlagRuGlyph({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");

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
      <g clipPath={`url(#${id})`}>
        <rect width={20} height={20} rx={2.5} fill="#0036A7" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 13.3333H20V19.9999H0V13.3333Z"
          fill="#D62718"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V6.66667H0V0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <rect width={20} height={20} rx={2.5} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
