import React from "react";
import MorphingNavigationPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morphing Navigation | UIStudio",
  description: "UIStudio's Morphing Navigation component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Morphing Navigation Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Morphing Navigation with UIStudio's React component.",
    url: "https://UIStudio.in/components1/morphing-navigation",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morphing Navigation Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Morphing Navigation component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <MorphingNavigationPreview />;
};

export default Page;