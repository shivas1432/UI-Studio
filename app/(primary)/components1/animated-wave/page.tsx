import React from "react";
import AnimatedWavePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Wave | UIStudio",
  description: "UIStudio's Animated Wave component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Animated Wave Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Animated Wave with UIStudio's React component.",
    url: "https://UIStudio.in/components1/animated-wave",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated Wave Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Animated Wave component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <AnimatedWavePreview />;
};

export default Page;