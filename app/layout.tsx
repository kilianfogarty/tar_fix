import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image"
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TarFix Web",
  description: "TarFix Website: Snap, Describe, and Report!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col">
        <header className="w-full p-4 text-white shadow flex items-center justify-between" style={{backgroundColor:"rgb(15, 26, 56)"}}>
          <div className="flex items-center gap-3">
            <Image
            src="/TarFixLogo.png"
            alt="TarFix Logo"
            height={80}
            width={80}
            />
          <Link href="/"><h1 className="text-xl font-bold">TarFix</h1></Link>
          </div>

          <nav className="text-xl font-thin flex gap-6">
            <Link href="/report">Report an Issue</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </header>

        <main className="p-4 flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
