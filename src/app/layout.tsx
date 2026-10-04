// /src/app/layout.tsx
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
  metadataBase: new URL("https://portfolio-eta-two-09uyvkilem.vercel.app"),

  title: {
    default: "Shreyash Sarode | Software Developer",
    template: "%s | Shreyash Sarode",
  },

  description:
    "Portfolio of Shreyash Sarode, a Software Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, and modern full-stack web development.",

  keywords: [
    "Shreyash Sarode",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Pune Software Developer",
  ],

  authors: [
    {
      name: "Shreyash Sarode",
    },
  ],

  creator: "Shreyash Sarode",

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Shreyash Sarode | Software Developer",
    description:
      "Portfolio of Shreyash Sarode, a Software Developer specializing in modern full-stack web development.",
    siteName: "Shreyash Sarode Portfolio",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Shreyash Sarode - Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shreyash Sarode | Software Developer",
    description:
      "Software Developer specializing in modern full-stack web development.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
