import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amler — лендинг",
  description: "Лендинг",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
