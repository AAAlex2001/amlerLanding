import type { NextConfig } from "next";

const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Чтобы деплоить как чистую статику (Cloudflare Pages/GitHub Pages).
  // Next будет генерировать HTML без server runtime.
  output: "export",

  // Важно для GitHub Pages project site:
  // например, https://username.github.io/<repo>/
  // Тогда ассеты должны начинаться с /<repo>.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,

  // На статике проще отключить оптимизацию картинок на стороне Next.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
