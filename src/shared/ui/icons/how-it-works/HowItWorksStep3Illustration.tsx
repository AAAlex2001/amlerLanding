"use client";

import { useId, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHowItWorksCardInteraction } from "./HowItWorksCardInteractionContext";

const FRAME_MS = 1400;
const FADE = { duration: 0.25 };

const WARN_GLASS_D =
  "M57.9766 9.89502C61.2443 3.97364 69.7557 3.97365 73.0234 9.89502L121.334 97.438C124.494 103.165 120.352 110.182 113.811 110.182H17.1895C10.6484 110.182 6.50564 103.165 9.66602 97.438L57.9766 9.89502Z";

const STOP_GLASS_D =
  "M65.4999 0.828613C97.589 0.828613 123.602 26.8421 123.602 58.9312C123.602 91.0203 97.589 117.034 65.4999 117.034C33.4108 117.034 7.39734 91.0203 7.39734 58.9312C7.39738 26.8421 33.4108 0.82865 65.4999 0.828613Z";

const CHECK_GLASS_D =
  "M63.9982 9.88306C64.6573 9.73018 65.343 9.73018 66.0021 9.88306L110.94 20.3059C112.949 20.772 114.371 22.5627 114.371 24.6252V71.8088C114.371 85.0159 107.835 97.3667 96.9161 104.796L67.4943 124.816C65.9893 125.84 64.0109 125.84 62.506 124.816L33.0831 104.796C22.1642 97.3666 15.6292 85.0157 15.629 71.8088V24.6252C15.629 22.5627 17.0515 20.772 19.0607 20.3059L63.9982 9.88306Z";

export function HowItWorksStep3Illustration({
  className,
}: {
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const interactive = useHowItWorksCardInteraction();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!interactive) {
      setPhase(0);
      return;
    }
    const id = setInterval(() => setPhase((p) => (p + 1) % 3), FRAME_MS);
    return () => clearInterval(id);
  }, [interactive]);

  const frame = interactive ? phase : 2;

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
        <filter id={`${uid}_fWarn`} x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={3.74} />
        </filter>
        <filter id={`${uid}_fStop`} x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={3.18} />
        </filter>
        <filter id={`${uid}_fCheck`} x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={2.02} />
        </filter>

        <linearGradient id={`${uid}_check0`} x1={65} y1={9.23657} x2={65} y2={127} gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1AF8C" />
          <stop offset={1} stopColor="#9A9761" />
        </linearGradient>
        <linearGradient id={`${uid}_check1`} x1={65} y1={9.23657} x2={65} y2={127} gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>

        <linearGradient id={`${uid}_warn0`} x1={65.5} y1={-4.51123} x2={65.5} y2={110.556} gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC04D" stopOpacity={0.7} />
          <stop offset={1} stopColor="#FFC04D" stopOpacity={0.2} />
        </linearGradient>
        <linearGradient id={`${uid}_warn1`} x1={65.5} y1={-4.51123} x2={65.5} y2={110.556} gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>

        <linearGradient id={`${uid}_stop0`} x1={65.4999} y1={0.51123} x2={65.4999} y2={117.351} gradientUnits="userSpaceOnUse">
          <stop stopColor="#D35B5D" stopOpacity={0.7} />
          <stop offset={1} stopColor="white" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient id={`${uid}_stop1`} x1={65.4999} y1={0.51123} x2={65.4999} y2={117.351} gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>

        <clipPath id={`${uid}_main`}>
          <rect width={130} height={130} fill="white" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${uid}_main)`}>
        <AnimatePresence mode="wait">
          {frame === 0 && (
            <motion.g
              key="warning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE}
            >
              <path
                d="M58.6256 30.182C61.7476 24.5247 69.8788 24.5247 73.0008 30.182L117.234 110.336C120.253 115.807 116.295 122.511 110.046 122.511H21.5804C15.3312 122.511 11.3734 115.807 14.3928 110.336L58.6256 30.182Z"
                fill="#B98E3E"
              />
              <path
                d={WARN_GLASS_D}
                fill={`url(#${uid}_warn0)`}
                fillOpacity={0.45}
                filter={`url(#${uid}_fWarn)`}
              />
              <path
                d={WARN_GLASS_D}
                fill={`url(#${uid}_warn0)`}
                fillOpacity={0.3}
                stroke={`url(#${uid}_warn1)`}
                strokeWidth={0.747191}
              />
              <path
                d="M65.4657 86.1422H66.2029V86.9142H65.4657V86.1422Z"
                stroke="white"
                strokeWidth={8.96629}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M65.8331 42.562V73.442"
                stroke="white"
                strokeWidth={8.96629}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>
          )}

          {frame === 1 && (
            <motion.g
              key="stop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE}
            >
              <ellipse cx={65.5001} cy={73.536} rx={53.975} ry={53.975} fill="#992B2D" />
              <path
                d={STOP_GLASS_D}
                fill={`url(#${uid}_stop0)`}
                fillOpacity={0.45}
                filter={`url(#${uid}_fStop)`}
              />
              <path
                d={STOP_GLASS_D}
                fill={`url(#${uid}_stop0)`}
                fillOpacity={0.3}
                stroke={`url(#${uid}_stop1)`}
                strokeWidth={0.635}
              />
              <path
                d="M65.5001 81.1563C77.7747 81.1563 87.7251 71.2058 87.7251 58.9313C87.7251 46.6568 77.7747 36.7063 65.5001 36.7063C53.2256 36.7063 43.2751 46.6568 43.2751 58.9313C43.2751 71.2058 53.2256 81.1563 65.5001 81.1563Z"
                stroke="white"
                strokeWidth={7.62}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M50.0662 43.4976L80.9342 74.3656"
                stroke="white"
                strokeWidth={7.62}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>
          )}

          {frame === 2 && (
            <motion.g
              key="check"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE}
            >
              <path
                d="M19.2559 14.5478C19.2559 12.2152 20.8645 10.1907 23.1368 9.66365L63.6654 0.262787C64.4108 0.0898911 65.1858 0.0898908 65.9312 0.262787L106.46 9.66365C108.732 10.1907 110.341 12.2152 110.341 14.5478V57.252C110.341 69.4583 104.301 80.8738 94.2087 87.7403L66.4578 106.622C65.4564 107.304 64.1402 107.304 63.1387 106.622L35.3879 87.7403C25.296 80.8738 19.2559 69.4583 19.2559 57.252V14.5478Z"
                fill="#9A9761"
              />
              <path
                d={CHECK_GLASS_D}
                fill={`url(#${uid}_check0)`}
                fillOpacity={0.45}
                filter={`url(#${uid}_fCheck)`}
              />
              <path
                d={CHECK_GLASS_D}
                fill={`url(#${uid}_check0)`}
                fillOpacity={0.3}
                stroke={`url(#${uid}_check1)`}
                strokeWidth={0.806061}
              />
              <path
                d="M49.0803 59.8898L59.7464 70.137L83.0783 47.7212"
                stroke="white"
                strokeWidth={6.44848}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>
          )}
        </AnimatePresence>
      </g>
    </svg>
  );
}
