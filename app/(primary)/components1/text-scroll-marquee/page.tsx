import React from "react";
import TextScrollMarqueePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Scroll Marquee | UIStudio",
  description: "UIStudio's Text Scroll Marquee component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Text Scroll Marquee Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Text Scroll Marquee with UIStudio's React component.",
    url: "https://UIStudio.in/components1/text-scroll-marquee",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Scroll Marquee Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Text Scroll Marquee component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TextScrollMarqueePreview />;
};

export default Page;