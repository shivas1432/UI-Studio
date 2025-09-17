import React from "react";
import InteractiveGradientCardPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Gradient Card | UIStudio",
  description: "UIStudio's Interactive Gradient Card component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Interactive Gradient Card Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Interactive Gradient Card with UIStudio's React component.",
    url: "https://UIStudio.in/components1/interactive-gradient-card",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Gradient Card Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Interactive Gradient Card component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <InteractiveGradientCardPreview />;
};

export default Page;