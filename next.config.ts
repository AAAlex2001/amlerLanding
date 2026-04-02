import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Чтобы деплоить как чистую статику (Cloudflare Pages/GitHub Pages).
  // Next будет генерировать HTML без server runtime.
  output: "export",
  // На статике проще отключить оптимизацию картинок на стороне Next.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
