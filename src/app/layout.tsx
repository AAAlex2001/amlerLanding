import type { Metadata } from "next";
import { Header } from "@/widgets/header";
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
