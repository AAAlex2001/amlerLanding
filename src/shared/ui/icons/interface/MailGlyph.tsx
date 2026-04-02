"use client";

import { useId } from "react";

export function MailGlyph({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const clipId = `mail-clip-${uid}`;

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
        <path
          d="M18.8889 2.22217H1.11111C0.497461 2.22217 0 2.71963 0 3.33328V16.6666C0 17.2803 0.497462 17.7777 1.11111 17.7777H18.8889C19.5025 17.7777 20 17.2803 20 16.6666V3.33328C20 2.71963 19.5025 2.22217 18.8889 2.22217Z"
          fill="white"
          fillOpacity={0.15}
        />
        <path
          d="M1.1106 3.3335L10.2852 11.1113L18.8884 3.3335"
          stroke="white"
          strokeWidth="1.14286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="20" height="15.5556" fill="white" transform="translate(0 2.22217)" />
        </clipPath>
      </defs>
    </svg>
  );
}
