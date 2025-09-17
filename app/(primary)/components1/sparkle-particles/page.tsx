import React from "react";
import SparkleParticlesPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparkle Particles | UIStudio",
  description: "UIStudio's Sparkle Particles component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Sparkle Particles Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Sparkle Particles with UIStudio's React component.",
    url: "https://UIStudio.in/components1/sparkle-particles",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparkle Particles Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Sparkle Particles component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SparkleParticlesPreview />;
};

export default Page;