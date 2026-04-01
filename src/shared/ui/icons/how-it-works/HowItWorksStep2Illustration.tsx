"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { useHowItWorksCardInteraction } from "./HowItWorksCardInteractionContext";

const R = 10;
const CX = 1;

function circleX(deg: number) {
  return CX + R * Math.sin((deg * Math.PI) / 180);
}
function circleY(deg: number) {
  return -R * Math.cos((deg * Math.PI) / 180);
}

const STEPS = [0, 45, 90, 135, 180, 225, 270, 315, 360];
const orbitX = STEPS.map(circleX);
const orbitY = STEPS.map(circleY);

export function HowItWorksStep2Illustration({
  className,
}: {
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const interactive = useHowItWorksCardInteraction();

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
          gradientUnits="objectBoundingBox"
          x1={0.5}
          y1={0}
          x2={0.5}
          y2={1}
        >
          <stop stopColor="#B1AF8C" />
          <stop offset={1} stopColor="#9A9761" />
        </linearGradient>
        <linearGradient
          id={`${uid}_g1`}
          gradientUnits="objectBoundingBox"
          x1={0.5}
          y1={0}
          x2={0.5}
          y2={1}
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>
        <filter id={`${uid}_blur`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={4.7} />
        </filter>
        <clipPath id={`${uid}_c0`}>
          <rect width={168} height={168} fill="white" />
        </clipPath>
        <clipPath id={`${uid}_c2`}>
          <rect x={66.5} y={69} width={35} height={30} rx={5} fill="white" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${uid}_c0)`}>
        {/* Corner brackets — static */}
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

        {/* Wallet — static */}
        <g clipPath={`url(#${uid}_c2)`}>
          <rect
            x={66.5}
            y={69}
            width={35}
            height={30}
            rx={5}
            fill="white"
            fillOpacity={0.15}
          />
          <path
            d="M89 84C89 81.2386 91.2386 79 94 79H101.5V89H94C91.2386 89 89 86.7614 89 84Z"
            fill="white"
          />
        </g>

        {/* Magnifying glass — orbiting group */}
        <motion.g
          animate={
            interactive
              ? { x: orbitX, y: orbitY }
              : { x: 0, y: 0 }
          }
          transition={
            interactive
              ? {
                  duration: 2.4,
                  ease: "linear",
                  repeat: Infinity,
                }
              : { duration: 0.4, ease: "easeOut" }
          }
        >
          {/* Handle */}
          <rect
            x={112.263}
            y={114.06}
            width={7.51416}
            height={22.5425}
            rx={3.75708}
            transform="rotate(-45 112.263 114.06)"
            fill="#9A9761"
          />
          {/* Lens glow layer */}
          <circle
            cx={84.085}
            cy={82.085}
            r={44.6153}
            fill={`url(#${uid}_g0)`}
            fillOpacity={0.5}
            filter={`url(#${uid}_blur)`}
          />
          {/* Lens circle */}
          <circle
            cx={84.085}
            cy={82.085}
            r={44.6153}
            fill={`url(#${uid}_g0)`}
            fillOpacity={0.3}
            stroke={`url(#${uid}_g1)`}
            strokeWidth={0.93927}
          />
        </motion.g>
      </g>
    </svg>
  );
}
