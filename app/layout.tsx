import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Ibnuprtma.vercel.app"),
  title: "Ibnuprtma Portfolio",
  description:
    "Software Engineer building scalable web applications, real-time systems, and intelligent automation.",
  keywords: [
    "Ibnu Pratama",
    "ibnuprtma",
    "Software Engineer",
    "Web Developer",
    "Full-stack",
    "Vue.js",
    "Laravel",
    "Node.js",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Ibnuprtma.", url: "https://Ibnuprtma.vercel.app" }],
  creator: "Ibnuprtma.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Ibnuprtma.vercel.app",
    siteName: "Ibnuprtma Portfolio",
    title: "Ibnuprtma Portfolio",
    description:
      "Software Engineer building scalable web applications, real-time systems, and intelligent automation.",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 800,
        alt: "Ibnuprtma. Portfolio Avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibnuprtma.vercel.app // Clean & Casual Neo-Paper Portfolio",
    description:
      "Full-stack web craftsperson blending sleek UI design with snappy Next.js performance.",
    images: ["/avatar.png"],
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="bg-dot-grid font-mono text-terminal-night antialiased min-h-screen selection:bg-caution-yellow selection:text-ink-black">
        {children}
      </body>
    </html>
  );
}
