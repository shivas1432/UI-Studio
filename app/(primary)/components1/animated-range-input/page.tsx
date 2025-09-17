import React from "react";
import AnimatedRangeInputPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Range Input | UIStudio",
  description: "UIStudio's Animated Range Input component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Animated Range Input Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Animated Range Input with UIStudio's React component.",
    url: "https://UIStudio.in/components1/animated-range-input",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated Range Input Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Animated Range Input component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <AnimatedRangeInputPreview />;
};

export default Page;