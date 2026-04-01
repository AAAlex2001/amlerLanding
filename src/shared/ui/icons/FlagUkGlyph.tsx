"use client";

import { useId } from "react";

export function FlagUkGlyph({ className }: { className?: string }) {
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
        <rect width={20} height={20} rx={2.5} fill="#001B69" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.12759 0H0V3.33333L17.8609 20L20 20V16.6667L2.12759 0Z"
          fill="white"
        />
        <path
          d="M0.709618 0L20 18.0472V20H19.307L0 1.93408V0H0.709618Z"
          fill="#C9072A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.0952 0H20V3.33333C20 3.33333 7.62839 14.4374 1.90476 20H0V16.6667L18.0952 0Z"
          fill="white"
        />
        <path d="M20 0H19.3541L0 18.0628V20H0.709618L20 1.94868V0Z" fill="#C9072A" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.27341 0H12.7432V6.16909H20V13.8268H12.7432V20H7.27341V13.8268H0V6.16909H7.27341V0Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.42105 0H11.5789V7.69231H20V12.3077H11.5789V20H8.42105V12.3077H0V7.69231H8.42105V0Z"
          fill="#C9072A"
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
