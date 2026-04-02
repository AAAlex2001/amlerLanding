"use client";

import { useId, useState, useEffect } from "react";
import { useHowItWorksCardInteraction } from "./HowItWorksCardInteractionContext";

const FRAME_MS = 1400;

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
        {/* Checkmark shield gradients */}
        <linearGradient id={`${uid}_shieldFill`} x1={65} y1={9.24} x2={65} y2={127} gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1AF8C" />
          <stop offset={1} stopColor="#9A9761" />
        </linearGradient>
        <linearGradient id={`${uid}_shieldStroke`} x1={65} y1={9.24} x2={65} y2={127} gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>

        {/* Warning triangle gradients */}
        <linearGradient id={`${uid}_triFill`} x1={65.5} y1={-4.51} x2={65.5} y2={110.56} gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC04D" stopOpacity={0.7} />
          <stop offset={1} stopColor="#FFC04D" stopOpacity={0.2} />
        </linearGradient>
        <linearGradient id={`${uid}_triStroke`} x1={65.5} y1={-4.51} x2={65.5} y2={110.56} gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>

        {/* Stop circle gradients */}
        <linearGradient id={`${uid}_circFill`} x1={65.5} y1={0.51} x2={65.5} y2={117.35} gradientUnits="userSpaceOnUse">
          <stop stopColor="#D35B5D" stopOpacity={0.7} />
          <stop offset={1} stopColor="white" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient id={`${uid}_circStroke`} x1={65.5} y1={0.51} x2={65.5} y2={117.35} gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>

        <clipPath id={`${uid}_clip`}>
          <rect width={130} height={130} fill="white" />
        </clipPath>

        {/* Blur clip paths */}
        <clipPath id={`${uid}_triBlur`} transform="translate(-0.166 3.895)">
          <path d="M57.9766 9.895C61.2443 3.974 69.7557 3.974 73.0234 9.895L121.334 97.438C124.494 103.165 120.352 110.182 113.811 110.182H17.1895C10.6484 110.182 6.50564 103.165 9.66602 97.438L57.9766 9.895Z" />
        </clipPath>
        <clipPath id={`${uid}_circBlur`} transform="translate(-1.397 5.171)">
          <path d="M65.5 0.829C97.589 0.829 123.602 26.842 123.602 58.931C123.602 91.02 97.589 117.034 65.5 117.034C33.411 117.034 7.397 91.02 7.397 58.931C7.397 26.842 33.411 0.829 65.5 0.829Z" />
        </clipPath>
        <clipPath id={`${uid}_shieldBlur`} transform="translate(-5.629 0.117)">
          <path d="M63.9982 9.88306C64.6573 9.73018 65.343 9.73018 66.0021 9.88306L110.94 20.3059C112.949 20.772 114.371 22.5627 114.371 24.6252V71.8088C114.371 85.0159 107.835 97.3667 96.9161 104.796L67.4943 124.816C65.9893 125.84 64.0109 125.84 62.506 124.816L33.0831 104.796C22.1642 97.3666 15.6292 85.0157 15.629 71.8088V24.6252C15.629 22.5627 17.0515 20.772 19.0607 20.3059L63.9982 9.88306Z" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${uid}_clip)`}>
        {/* Frame 0 — Warning triangle */}
        {frame === 0 && (
          <g>
            <path
              d="M58.6256 30.182C61.7476 24.5247 69.8788 24.5247 73.0008 30.182L117.234 110.336C120.253 115.807 116.295 122.511 110.046 122.511H21.5804C15.3312 122.511 11.3734 115.807 14.3928 110.336L58.6256 30.182Z"
              fill="#B98E3E"
            />
            <foreignObject x={0.166} y={-3.895} width={130} height={130}>
              <div
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  clipPath: `url(#${uid}_triBlur)`,
                  height: "100%",
                  width: "100%",
                }}
              />
            </foreignObject>
            <path
              d="M57.9766 9.895C61.2443 3.974 69.7557 3.974 73.0234 9.895L121.334 97.438C124.494 103.165 120.352 110.182 113.811 110.182H17.1895C10.6484 110.182 6.50564 103.165 9.66602 97.438L57.9766 9.895Z"
              fill={`url(#${uid}_triFill)`}
              fillOpacity={0.3}
              stroke={`url(#${uid}_triStroke)`}
              strokeWidth={0.747}
            />
            <path
              d="M65.4657 86.1422H66.2029V86.9142H65.4657V86.1422Z"
              stroke="white"
              strokeWidth={8.966}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M65.8331 42.562V73.442"
              stroke="white"
              strokeWidth={8.966}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}

        {/* Frame 1 — Stop circle */}
        {frame === 1 && (
          <g>
            <ellipse cx={65.5} cy={73.536} rx={53.975} ry={53.975} fill="#992B2D" />
            <foreignObject x={1.397} y={-5.171} width={130} height={130}>
              <div
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  clipPath: `url(#${uid}_circBlur)`,
                  height: "100%",
                  width: "100%",
                }}
              />
            </foreignObject>
            <path
              d="M65.5 0.829C97.589 0.829 123.602 26.842 123.602 58.931C123.602 91.02 97.589 117.034 65.5 117.034C33.411 117.034 7.397 91.02 7.397 58.931C7.397 26.842 33.411 0.829 65.5 0.829Z"
              fill={`url(#${uid}_circFill)`}
              fillOpacity={0.3}
              stroke={`url(#${uid}_circStroke)`}
              strokeWidth={0.635}
            />
            <path
              d="M65.5 81.156C77.775 81.156 87.725 71.206 87.725 58.931C87.725 46.657 77.775 36.706 65.5 36.706C53.226 36.706 43.275 46.657 43.275 58.931C43.275 71.206 53.226 81.156 65.5 81.156Z"
              stroke="white"
              strokeWidth={7.62}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50.066 43.498L80.934 74.366"
              stroke="white"
              strokeWidth={7.62}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}

        {/* Frame 2 — Checkmark shield (default) */}
        {frame === 2 && (
          <g>
            <path
              d="M19.2559 14.5478C19.2559 12.2152 20.8645 10.1907 23.1368 9.66365L63.6654 0.262787C64.4108 0.0898911 65.1858 0.0898908 65.9312 0.262787L106.46 9.66365C108.732 10.1907 110.341 12.2152 110.341 14.5478V57.252C110.341 69.4583 104.301 80.8738 94.2087 87.7403L66.4578 106.622C65.4564 107.304 64.1402 107.304 63.1387 106.622L35.3879 87.7403C25.296 80.8738 19.2559 69.4583 19.2559 57.252V14.5478Z"
              fill="#9A9761"
            />
            <foreignObject x={5.629} y={-0.117} width={110} height={130}>
              <div
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  clipPath: `url(#${uid}_shieldBlur)`,
                  height: "100%",
                  width: "100%",
                }}
              />
            </foreignObject>
            <path
              d="M63.9982 9.88306C64.6573 9.73018 65.343 9.73018 66.0021 9.88306L110.94 20.3059C112.949 20.772 114.371 22.5627 114.371 24.6252V71.8088C114.371 85.0159 107.835 97.3667 96.9161 104.796L67.4943 124.816C65.9893 125.84 64.0109 125.84 62.506 124.816L33.0831 104.796C22.1642 97.3666 15.6292 85.0157 15.629 71.8088V24.6252C15.629 22.5627 17.0515 20.772 19.0607 20.3059L63.9982 9.88306Z"
              fill={`url(#${uid}_shieldFill)`}
              fillOpacity={0.3}
              stroke={`url(#${uid}_shieldStroke)`}
              strokeWidth={0.806}
            />
            <path
              d="M49.0803 59.8898L59.7464 70.137L83.0783 47.7212"
              stroke="white"
              strokeWidth={6.449}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}
      </g>
    </svg>
  );
}
