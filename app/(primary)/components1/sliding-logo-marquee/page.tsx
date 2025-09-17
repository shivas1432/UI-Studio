import React from "react";
import SlidingLogoMarqueePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sliding Logo Marquee | UIStudio",
  description: "UIStudio's Sliding Logo Marquee component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Sliding Logo Marquee Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Sliding Logo Marquee with UIStudio's React component.",
    url: "https://UIStudio.in/components1/sliding-logo-marquee",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sliding Logo Marquee Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Sliding Logo Marquee component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SlidingLogoMarqueePreview />;
};

export default Page;