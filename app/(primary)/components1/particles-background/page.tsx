import React from "react";
import ParticlesBackgroundPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Particles Background | UIStudio",
  description: "UIStudio's Particles Background component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Particles Background Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Particles Background with UIStudio's React component.",
    url: "https://UIStudio.in/components1/particles-background",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Particles Background Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Particles Background component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ParticlesBackgroundPreview />;
};

export default Page;