"use client";

import type { HTMLAttributes } from "react";
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

  const lensBlurClip = `${uid}_lensBlurClip`;

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
        <clipPath id={lensBlurClip} transform="translate(-29.6073 -27.6073)">
          <circle cx={84.085} cy={82.085} r={44.6153} />
        </clipPath>
        <linearGradient id={`${uid}_g0`} x1={84.085} y1={37} x2={84.085} y2={127.17} gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1AF8C" />
          <stop offset={1} stopColor="#9A9761" />
        </linearGradient>
        <linearGradient id={`${uid}_g1`} x1={84.085} y1={37} x2={84.085} y2={127.17} gradientUnits="userSpaceOnUse">
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

        <g clipPath={`url(#${uid}_c2)`}>
          <rect x={66.5} y={69} width={35} height={30} rx={5} fill="white" fillOpacity={0.15} />
          <path
            d="M89 84C89 81.2386 91.2386 79 94 79H101.5V89H94C91.2386 89 89 86.7614 89 84Z"
            fill="white"
          />
        </g>

        <motion.g
          animate={interactive ? { x: orbitX, y: orbitY } : { x: 0, y: 0 }}
          transition={
            interactive
              ? { duration: 2.4, ease: "linear", repeat: Infinity }
              : { duration: 0.4, ease: "easeOut" }
          }
        >
          <rect
            x={112.263}
            y={114.06}
            width={7.51416}
            height={22.5425}
            rx={3.75708}
            transform="rotate(-45 112.263 114.06)"
            fill="#9A9761"
          />
          <foreignObject x={29.6073} y={27.6073} width={108.955} height={108.955}>
            <div
              {...({
                xmlns: "http://www.w3.org/1999/xhtml",
                style: {
                  backdropFilter: "blur(4.7px)",
                  WebkitBackdropFilter: "blur(4.7px)",
                  clipPath: `url(#${lensBlurClip})`,
                  height: "100%",
                  width: "100%",
                },
              } as unknown as HTMLAttributes<HTMLDivElement>)}
            />
          </foreignObject>
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
