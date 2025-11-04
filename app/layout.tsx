import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "PulseMinds AI | Viral AI Companion Platform",
  description:
    "PulseMinds is a multi-persona AI companion platform with emotion-aware chats, gamified growth loops, and ad + premium monetization."
};

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
