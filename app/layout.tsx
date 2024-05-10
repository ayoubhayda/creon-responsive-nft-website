import type { Metadata } from "next";
import "./globals.css";
import { satoshi, monumentExtended } from "@/fonts";

export const metadata: Metadata = {title: "Creon"};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${monumentExtended.variable} font-sans bg-black text-white`}>{children}</body>
    </html>
  );
}
