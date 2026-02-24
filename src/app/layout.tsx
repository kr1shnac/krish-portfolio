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
  title: "Krishna C",
  description: "Portfolio of Krishna C - Full Stack Developer & AI Engineer",
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
      <body className={`${inter.variable} antialiased selection:bg-blue-500/30`}>
        <div className="bg-grid-pattern" />
        <div className="glow-left" />
        <div className="glow-right" />

        <Navbar />

        <main className="mx-auto max-w-3xl px-6 pt-32 pb-4">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
