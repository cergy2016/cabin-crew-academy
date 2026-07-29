import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Cabin Crew Academy - Master Aviation English",
  description: "The world's best platform to master aviation English with 24 complete ICAO lessons, prepare for cabin crew interviews, and get hired by top airlines like Emirates, Qatar Airways, Etihad, and more.",
  keywords: "cabin crew training, aviation English, ICAO English, airline interview preparation",
  authors: [{ name: "Cabin Crew Academy" }],
  openGraph: {
    title: "Cabin Crew Academy",
    description: "Master aviation English and prepare for your dream airline career",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
