"use client";

import { useId } from "react";

export function HowItWorksStep3Illustration({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      width={130}
      height={130}
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={`${uid}_g0`}
          x1={65}
          y1={9.23657}
          x2={65}
          y2={127}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B1AF8C" />
          <stop offset={1} stopColor="#9A9761" />
        </linearGradient>
        <linearGradient
          id={`${uid}_g1`}
          x1={65}
          y1={9.23657}
          x2={65}
          y2={127}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>
        <clipPath id={`${uid}_c0`}>
          <rect width={130} height={130} fill="white" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${uid}_c0)`}>
        <path
          d="M19.2559 14.5478C19.2559 12.2152 20.8645 10.1907 23.1368 9.66365L63.6654 0.262787C64.4108 0.0898911 65.1858 0.0898908 65.9312 0.262787L106.46 9.66365C108.732 10.1907 110.341 12.2152 110.341 14.5478V57.252C110.341 69.4583 104.301 80.8738 94.2087 87.7403L66.4578 106.622C65.4564 107.304 64.1402 107.304 63.1387 106.622L35.3879 87.7403C25.296 80.8738 19.2559 69.4583 19.2559 57.252V14.5478Z"
          fill="#9A9761"
        />
        <path
          d="M63.9982 9.88306C64.6573 9.73018 65.343 9.73018 66.0021 9.88306L110.94 20.3059C112.949 20.772 114.371 22.5627 114.371 24.6252V71.8088C114.371 85.0159 107.835 97.3667 96.9161 104.796L67.4943 124.816C65.9893 125.84 64.0109 125.84 62.506 124.816L33.0831 104.796C22.1642 97.3666 15.6292 85.0157 15.629 71.8088V24.6252C15.629 22.5627 17.0515 20.772 19.0607 20.3059L63.9982 9.88306Z"
          fill={`url(#${uid}_g0)`}
          fillOpacity={0.3}
          stroke={`url(#${uid}_g1)`}
          strokeWidth={0.806061}
        />
        <path
          d="M49.0803 59.8898L59.7464 70.137L83.0783 47.7212"
          stroke="white"
          strokeWidth={6.44848}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
