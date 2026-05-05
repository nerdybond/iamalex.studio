import type { Metadata } from "next";
import { Merriweather, Merriweather_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import "./globals.css";

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const merriweatherSans = Merriweather_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "I Am Alex Studio",
  description: "Digital design and dev studio based in Melbourne, Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} ${merriweatherSans.className}`}>
        {children}
      </body>
      {/* <GoogleAnalytics gaId="G-KC47W7XZ2D" /> */}
    </html>
  );
}
