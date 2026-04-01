"use client";

import { useId, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHowItWorksCardInteraction } from "./HowItWorksCardInteractionContext";

/** Сколько держим «монетка за кошельком» (после анимации входа) */
const BEHIND_MS = 750;
/** Сколько монета сверху до следующего ухода */
const VISIBLE_MS = 2000;

const easeSmooth: [number, number, number, number] = [0.45, 0, 0.55, 1];

const transition = {
  duration: 0.62,
  ease: easeSmooth,
};

export function HowItWorksStep1Illustration({
  className,
}: {
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const interactive = useHowItWorksCardInteraction();
  const [behind, setBehind] = useState(false);

  useEffect(() => {
    if (!interactive) {
      setBehind(false);
      return;
    }

    let cancelled = false;
    const pending: number[] = [];

    const clearAll = () => {
      pending.forEach((t) => window.clearTimeout(t));
      pending.length = 0;
    };

    const goBehind = () => {
      if (cancelled) return;
      setBehind(true);
      pending.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setBehind(false);
          pending.push(
            window.setTimeout(() => {
              if (cancelled) return;
              goBehind();
            }, VISIBLE_MS),
          );
        }, BEHIND_MS),
      );
    };

    setBehind(false);
    pending.push(window.setTimeout(goBehind, 0));

    return () => {
      cancelled = true;
      clearAll();
    };
  }, [interactive]);

  const coinHidden = interactive && behind;

  return (
    <svg
      className={className}
      width={134}
      height={138}
      viewBox="0 0 134 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient
          id={`${uid}_g0`}
          x1={64}
          y1={43}
          x2={64}
          y2={133}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B1AF8C" />
          <stop offset={1} stopColor="#9A9761" />
        </linearGradient>
        <linearGradient
          id={`${uid}_g1`}
          x1={64}
          y1={43}
          x2={64}
          y2={133}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient
          id={`${uid}_g2`}
          x1={131}
          y1={85}
          x2={85}
          y2={85}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient
          id={`${uid}_g3`}
          x1={108}
          y1={68}
          x2={108}
          y2={108}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>

        <linearGradient
          id={`${uid}_g0h`}
          x1={62.39}
          y1={41.28}
          x2={67.63}
          y2={131.13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B1AF8C" />
          <stop offset={1} stopColor="#9A9761" />
        </linearGradient>
        <linearGradient
          id={`${uid}_g1h`}
          x1={62.39}
          y1={41.28}
          x2={67.63}
          y2={131.13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient
          id={`${uid}_g2h`}
          x1={131.72}
          y1={79.31}
          x2={85.8}
          y2={81.99}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient
          id={`${uid}_g3h`}
          x1={107.77}
          y1={63.68}
          x2={110.1}
          y2={103.61}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.05} />
        </linearGradient>
      </defs>

      {/* Монетка: плавный перенос вниз + поворот (как во втором кадре макета) */}
      <motion.g
        initial={false}
        animate={{
          x: coinHidden ? 1 : 0,
          y: coinHidden ? 43 : 0,
          rotate: coinHidden ? 30 : 0,
        }}
        transition={transition}
        style={{ transformOrigin: "63px 40px" }}
      >
        <circle cx={63} cy={40} r={40} fill="#9A9761" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.9652 35.9126C75.6053 38.397 74.3076 39.9001 72.0716 40.4218C73.5384 41.1805 74.5346 42.155 75.0603 43.3455C75.586 44.5361 75.5333 46.0359 74.9021 47.8452C74.5748 48.7682 74.1523 49.5476 73.6346 50.1831C73.1169 50.8186 72.5406 51.3053 71.9056 51.6431C71.2705 51.981 70.5279 52.2109 69.6776 52.333C68.8274 52.4549 67.961 52.4847 67.0787 52.4219C66.1962 52.3593 65.2021 52.2196 64.0962 52.0026L62.8359 57.0995L59.7578 56.3383L60.9984 51.3215C59.9324 51.0578 59.1213 50.8501 58.5648 50.6984L57.3194 55.7352L54.2413 54.9742L55.5016 49.8773C55.2619 49.8179 54.9029 49.7257 54.4247 49.6003C53.9468 49.4751 53.5812 49.3812 53.328 49.3185L49.3304 48.33L50.8545 44.8256L53.0732 45.3742C53.7395 45.5389 54.2099 45.2947 54.4845 44.6414L56.4716 36.6064L56.7913 36.6856C56.7146 36.6525 56.6097 36.6194 56.4764 36.5866L57.895 30.8502C57.9459 29.9011 57.4649 29.3015 56.4523 29.051L54.2336 28.5024L55.0443 25.2244L59.2766 26.2923C60.1294 26.5032 60.7774 26.6563 61.2203 26.7518L62.4659 21.7148L65.544 22.476L64.3231 27.4129C65.4224 27.6566 66.2385 27.8443 66.7716 27.9761L67.9825 23.0791L71.0605 23.8403L69.815 28.8771C70.8446 29.2307 71.7403 29.6113 72.5021 30.0188C73.2637 30.4264 73.9426 30.9124 74.5382 31.4768C75.1338 32.0413 75.555 32.6968 75.8016 33.4436C76.0483 34.1903 76.1027 35.0133 75.9652 35.9126ZM68.9742 45.743C69.0927 45.2634 69.0983 44.8123 68.9907 44.3896C68.883 43.9672 68.7123 43.5997 68.4785 43.2875C68.2446 42.9751 67.9118 42.6771 67.48 42.3936C67.0481 42.1101 66.6422 41.8789 66.2623 41.7C65.8823 41.5213 65.404 41.3394 64.8277 41.1544C64.2512 40.9694 63.7964 40.8357 63.4633 40.7534C63.1301 40.671 62.6988 40.5714 62.1692 40.4546C61.6395 40.3378 61.3214 40.2661 61.2149 40.2398L59.5442 46.9956C59.6507 47.0219 59.8965 47.0863 60.2812 47.1885C60.666 47.2907 60.985 47.3731 61.2382 47.4357C61.4914 47.4983 61.847 47.5757 62.3049 47.6676C62.763 47.7597 63.1593 47.8295 63.494 47.8769C63.8287 47.9242 64.2225 47.9616 64.6753 47.9887C65.1281 48.0159 65.521 48.014 65.8538 47.9832C66.1866 47.9524 66.5376 47.8908 66.9069 47.7983C67.2762 47.7058 67.5889 47.571 67.8447 47.3938C68.1006 47.2168 68.3298 46.9906 68.5321 46.7154C68.7346 46.4403 68.8818 46.1162 68.9742 45.743ZM69.947 34.647C70.0296 35.028 70.0165 35.4383 69.9078 35.8781C69.8155 36.2511 69.6715 36.5761 69.4758 36.8529C69.28 37.1297 69.0368 37.3417 68.7459 37.489C68.4549 37.6363 68.164 37.7552 67.8729 37.8457C67.5818 37.9364 67.2282 37.9798 66.812 37.9758C66.3958 37.972 66.0347 37.9604 65.7283 37.9411C65.422 37.9219 65.0464 37.868 64.6018 37.7793C64.1571 37.6905 63.8207 37.6214 63.5925 37.5721C63.3643 37.5228 63.0545 37.4461 62.6631 37.3422C62.2717 37.2384 62.0427 37.1782 61.9761 37.1617L63.4934 31.0256C63.5867 31.0486 63.8507 31.1104 64.2854 31.2107C64.7202 31.3113 65.0816 31.3936 65.3697 31.4578C65.6578 31.5219 66.0401 31.6341 66.5166 31.7944C66.993 31.9546 67.3896 32.1092 67.7063 32.2583C68.0229 32.4073 68.3621 32.6077 68.724 32.8599C69.0859 33.112 69.3595 33.3777 69.5451 33.6567C69.7305 33.936 69.8645 34.2661 69.947 34.647Z"
          fill="white"
        />
      </motion.g>

      {/* Кошелёк прямой — плавное появление/исчезновение */}
      <motion.g
        initial={false}
        animate={{ opacity: coinHidden ? 0 : 1 }}
        transition={transition}
        style={{ pointerEvents: "none" }}
      >
        <path
          d="M20 43.5H108C116.56 43.5 123.5 50.4396 123.5 59V117C123.5 125.56 116.56 132.5 108 132.5H20C11.4396 132.5 4.5 125.56 4.5 117V59L4.50488 58.5996C4.71725 50.2242 11.5735 43.5 20 43.5Z"
          fill={`url(#${uid}_g0)`}
          fillOpacity={0.3}
          stroke={`url(#${uid}_g1)`}
        />
        <path
          d="M97 68.5H119C125.351 68.5 130.5 73.6487 130.5 80V96C130.5 102.351 125.351 107.5 119 107.5H97C90.6487 107.5 85.5 102.351 85.5 96V80C85.5 73.6487 90.6487 68.5 97 68.5Z"
          fill={`url(#${uid}_g2)`}
          stroke={`url(#${uid}_g3)`}
        />
        <circle cx={103} cy={88} r={8} fill="white" />
      </motion.g>

      {/* Кошелёк наклонённый — синхронный кроссфейд */}
      <motion.g
        initial={false}
        animate={{ opacity: coinHidden ? 1 : 0 }}
        transition={transition}
        style={{ pointerEvents: "none" }}
      >
        <path
          d="M18.4903 44.3403L106.341 39.2179C114.887 38.7196 122.219 45.2435 122.717 53.7894L126.093 111.691C126.591 120.237 120.068 127.569 111.522 128.067L23.6708 133.189C15.1249 133.688 7.79318 127.164 7.29489 118.618L3.91878 60.7162L3.90034 60.3162C3.62483 51.9427 10.078 44.8308 18.4903 44.3403Z"
          fill={`url(#${uid}_g0h)`}
          fillOpacity={0.3}
          stroke={`url(#${uid}_g1h)`}
        />
        <path
          d="M96.8149 64.8158L118.778 63.5352C125.118 63.1655 130.558 68.0058 130.928 74.3463L131.859 90.3192C132.229 96.6597 127.388 102.099 121.048 102.469L99.0851 103.75C92.7446 104.119 87.3049 99.2791 86.9352 92.9386L86.0038 76.9657C85.6341 70.6252 90.4744 65.1855 96.8149 64.8158Z"
          fill={`url(#${uid}_g2h)`}
          stroke={`url(#${uid}_g3h)`}
        />
        <motion.g
          initial={false}
          animate={{ rotate: coinHidden ? -3.337 : 0 }}
          transition={transition}
          style={{ transformOrigin: "103.94px 83.9339px" }}
        >
          <circle cx={103.94} cy={83.9339} r={8} fill="white" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
