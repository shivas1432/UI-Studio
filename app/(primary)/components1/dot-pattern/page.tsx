import React from "react";
import DotPatternPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dot Pattern | UIStudio",
  description: "UIStudio's Dot Pattern component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Dot Pattern Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Dot Pattern with UIStudio's React component.",
    url: "https://UIStudio.in/components1/dot-pattern",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dot Pattern Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Dot Pattern component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <DotPatternPreview />;
};

export default Page;