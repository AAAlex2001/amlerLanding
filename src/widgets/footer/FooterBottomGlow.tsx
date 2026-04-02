import { useId } from "react";
import styles from "./FooterBottomGlow.module.scss";

export function FooterBottomGlow() {
  const uid = useId().replace(/:/g, "");
  const g = (n: number) => `fbg-${uid}-${n}`;

  return (
    <div className={styles.root} aria-hidden>
      <div className={styles.mobileBar} />
      <svg
        className={styles.desktopSvg}
        viewBox="-48 0 867 118"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={g(0)}
            x1="97"
            y1="118"
            x2="97"
            y2="53"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9A9761" stopOpacity="0.3" />
            <stop offset="1" stopColor="#9A9761" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={g(1)}
            x1="241"
            y1="118"
            x2="241"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9A9761" stopOpacity="0.3" />
            <stop offset="1" stopColor="#9A9761" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={g(2)}
            x1="385"
            y1="118"
            x2="385"
            y2="33"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9A9761" stopOpacity="0.3" />
            <stop offset="1" stopColor="#9A9761" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={g(3)}
            x1="531"
            y1="118"
            x2="531"
            y2="53"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9A9761" stopOpacity="0.3" />
            <stop offset="1" stopColor="#9A9761" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={g(4)}
            x1="531"
            y1="118"
            x2="531"
            y2="33"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9A9761" stopOpacity="0.3" />
            <stop offset="1" stopColor="#9A9761" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={g(5)}
            x1="819"
            y1="118"
            x2="819"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9A9761" stopOpacity="0.3" />
            <stop offset="1" stopColor="#9A9761" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M97 53H-48V118H97V53Z" fill={`url(#${g(0)})`} />
        <path d="M241 0H97V118H241V0Z" fill={`url(#${g(1)})`} />
        <path d="M385 33H241V118H385V33Z" fill={`url(#${g(2)})`} />
        <path d="M531 53H385V118H531V53Z" fill={`url(#${g(3)})`} />
        <path d="M531 33H675V118H531V33Z" fill={`url(#${g(4)})`} />
        <path d="M819 0H675V118H819V0Z" fill={`url(#${g(5)})`} />
      </svg>
    </div>
  );
}
