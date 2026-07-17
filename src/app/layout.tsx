import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { BackToTop } from "@/components/common/back-to-top";
import { ToastProvider } from "@/components/ui/toast";
import { personalInfo } from "@/data/socials";

const spaceGrotesk = { variable: "" };
const inter = { variable: "" };
const jetbrainsMono = { variable: "" };

const siteUrl = "https://rabiyazaheer.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} — AI/ML Engineer & MERN Stack Developer`,
    template: `%s — ${personalInfo.name}`,
  },
  description: personalInfo.objective,
  keywords: [
    "Rabiya Zaheer",
    "AI/ML Engineer",
    "MERN Stack Developer",
    "Machine Learning",
    "Computer Science Undergraduate",
    "Lahore Pakistan Developer",
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personalInfo.name} — AI/ML Engineer & MERN Stack Developer`,
    description: personalInfo.objective,
    siteName: `${personalInfo.name} — Portfolio`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: personalInfo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — AI/ML Engineer & MERN Stack Developer`,
    description: personalInfo.objective,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <Providers>
    <ThemeProvider>
      <ToastProvider>
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <BackToTop />
      </ToastProvider>
    </ThemeProvider>
  </Providers>
</body>
    </html>
  );
}
