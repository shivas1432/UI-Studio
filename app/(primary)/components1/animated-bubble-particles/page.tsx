import React from "react";
import AnimatedBubbleParticlesPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Bubble Particles | UIStudio",
  description: "UIStudio's Animated Bubble Particles component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Animated Bubble Particles Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Animated Bubble Particles with UIStudio's React component.",
    url: "https://UIStudio.in/components1/animated-bubble-particles",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated Bubble Particles Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Animated Bubble Particles component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <AnimatedBubbleParticlesPreview />;
};

export default Page;