"use client";

import { useId } from "react";

export function HowItWorksStep2Illustration({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      width={168}
      height={168}
      viewBox="0 0 168 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={`${uid}_g0`}
          x1={84.085}
          y1={37}
          x2={84.085}
          y2={127.17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B1AF8C" />
          <stop offset={1} stopColor="#9A9761" />
        </linearGradient>
        <linearGradient
          id={`${uid}_g1`}
          x1={84.085}
          y1={37}
          x2={84.085}
          y2={127.17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>
        <clipPath id={`${uid}_c0`}>
          <rect width={168} height={168} fill="white" />
        </clipPath>
        <clipPath id={`${uid}_c2`}>
          <rect x={66.5} y={69} width={35} height={30} rx={5} fill="white" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${uid}_c0)`}>
        <path
          d="M49.7143 4H18.6789C10.572 4 4 10.572 4 18.6789V49.7143"
          stroke="white"
          strokeOpacity={0.15}
          strokeWidth={6.66667}
        />
        <path
          d="M118.286 164H149.321C157.428 164 164 157.428 164 149.321V118.286"
          stroke="white"
          strokeOpacity={0.15}
          strokeWidth={6.66667}
        />
        <path
          d="M118.286 4H149.321C157.428 4 164 10.572 164 18.6789V49.7143"
          stroke="white"
          strokeOpacity={0.15}
          strokeWidth={6.66667}
        />
        <path
          d="M49.7143 164H18.6789C10.572 164 4 157.428 4 149.321V118.286"
          stroke="white"
          strokeOpacity={0.15}
          strokeWidth={6.66667}
        />
        <rect
          x={112.263}
          y={114.06}
          width={7.51416}
          height={22.5425}
          rx={3.75708}
          transform="rotate(-45 112.263 114.06)"
          fill="#9A9761"
        />
        <circle
          cx={84.085}
          cy={82.085}
          r={44.6153}
          fill={`url(#${uid}_g0)`}
          fillOpacity={0.3}
          stroke={`url(#${uid}_g1)`}
          strokeWidth={0.93927}
        />
        <g clipPath={`url(#${uid}_c2)`}>
          <rect x={66.5} y={69} width={35} height={30} rx={5} fill="white" fillOpacity={0.15} />
          <path
            d="M89 84C89 81.2386 91.2386 79 94 79H101.5V89H94C91.2386 89 89 86.7614 89 84Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
}
