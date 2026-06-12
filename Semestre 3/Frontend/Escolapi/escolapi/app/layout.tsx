import type { Metadata } from "next";
import { PT_Sans, PT_Mono } from "next/font/google";
import "./globals.css";

const geistSans = PT_Sans({
  variable: "--font-pt-sans",
  weight: ['400', '700'],
  subsets: ["latin"],
});

const geistMono = PT_Mono({
  variable: "--font-pt-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escola Senai",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="overflow-hidden min-h-full flex flex-col">{children}</body>
    </html>
  );
}
