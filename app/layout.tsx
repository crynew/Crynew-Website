import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./css/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brunno's Portfolio",
  description: "Hello, my name is Bruno and I'm a full-stack developer",
  icons: {
    icon: "/favicon.gif",
  },
  openGraph: {
    title: "Brunno's Portfolio",
    description: "Hello, my name is Bruno and I'm a full-stack developer",
    images: {
      url: "/favicon.gif",
      width: 800,
      height: 600,
    },
    siteName: "Brunno's Portfolio",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunno's Portfolio",
    description: "Hello, my name is Bruno and I'm a full-stack developer",
    images: {
      url: "/favicon.gif",
      width: 800,
      height: 600,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
