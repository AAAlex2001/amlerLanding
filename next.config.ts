import type { NextConfig } from "next";

/** Для GitHub Pages: NEXT_BASE_PATH=/amlerLanding (имя репозитория) */
const basePath = process.env.NEXT_BASE_PATH?.trim() ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
