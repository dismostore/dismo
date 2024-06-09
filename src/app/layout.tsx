import { cn } from "@/src/lib/utils";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dismo.co.uk"),
  title: "DISMO - Saving our planet, one phone at a time",
  description: "Here at Dismo Loreum ipsum",
  keywords:
    "environment, sustainability, phone recycling, eco-friendly technology",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-gb">
      <head>
        <meta name="author" content="DISMO" />
        <meta
          name="copyright"
          content="© 2024 Distro Mobiles Ltd T/A DISMO. All rights reserved."
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={cn("relative h-full", quicksand.className)}>
        <main className="relative flex flex-col min-h-screen subpixel-antialiased">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
