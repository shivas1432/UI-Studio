import React from "react";
import AnimatedOceanWavesPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Ocean Waves | UIStudio",
  description: "UIStudio's Animated Ocean Waves component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Animated Ocean Waves Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Animated Ocean Waves with UIStudio's React component.",
    url: "https://UIStudio.in/components1/animated-ocean-waves",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated Ocean Waves Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Animated Ocean Waves component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <AnimatedOceanWavesPreview />;
};

export default Page;