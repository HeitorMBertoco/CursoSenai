import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SetNav from "@/components/SetNav";
import { MEGA_EVOLUTION_SETS } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mega Evolution | TCGdex",
  description: "Cartas da série Mega Evolution via TCGdex API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SetNav sets={MEGA_EVOLUTION_SETS} />
        {children}
      </body>
    </html>
  );
}
