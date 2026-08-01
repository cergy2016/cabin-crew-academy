import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Cairo } from "next/font/google";
import ThemeSync from "@/components/ThemeSync";
import LanguageSync from "@/components/LanguageSync";
import "./globals.css";

// Runs before hydration to avoid a flash of the wrong theme.
const themeInitScript = `
(function () {
  try {
    var stored = JSON.parse(localStorage.getItem('cabin-crew-store') || 'null');
    var isDark = stored && stored.state && typeof stored.state.darkMode === 'boolean'
      ? stored.state.darkMode
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.add(isDark ? 'dark' : 'light');
  } catch (e) {}
})();
`;

// Runs before hydration to avoid a flash of the wrong text direction.
const languageInitScript = `
(function () {
  try {
    var stored = JSON.parse(localStorage.getItem('cabin-crew-store') || 'null');
    var lang = stored && stored.state && typeof stored.state.language === 'string'
      ? stored.state.language
      : 'en';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  } catch (e) {}
})();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${cairo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: languageInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeSync />
        <LanguageSync />
        {children}
      </body>
    </html>
  );
}
