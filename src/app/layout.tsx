import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnac.dev"),
  title: {
    default: "Krishna C | AI & ML Engineer",
    template: "%s | Krishna C",
  },
  description:
    "Portfolio of Krishna C — AI & ML Engineering student building full-stack applications, agentic AI systems, and real-world platforms.",
  keywords: [
    "Krishna C",
    "AI Engineer",
    "ML Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Agentic AI",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Krishna C", url: "https://krishnac.dev" }],
  creator: "Krishna C",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnac.dev",
    title: "Krishna C | AI & ML Engineer",
    description:
      "Portfolio of Krishna C — AI & ML Engineering student building full-stack applications, agentic AI systems, and real-world platforms.",
    siteName: "Krishna C",
    images: [
      {
        url: "https://github.com/kr1shnac.png",
        width: 800,
        height: 800,
        alt: "Krishna C",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna C | AI & ML Engineer",
    description:
      "Portfolio of Krishna C — AI & ML Engineering student building full-stack applications, agentic AI systems, and real-world platforms.",
    creator: "@krishnacgowda10",
    images: ["https://github.com/kr1shnac.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "https://github.com/kr1shnac.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-black relative overflow-x-hidden`}>
        {/* Background effects */}
        <div className="fixed inset-0 pointer-events-none z-[-2]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          <div className="glow-left" />
          <div className="glow-right" />
        </div>

        {/* Content */}
        <Navbar />
        <main className="flex flex-col min-h-screen bg-transparent max-w-2xl mx-auto px-6 pt-12 pb-16 sm:pt-20 sm:pb-20 relative z-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
