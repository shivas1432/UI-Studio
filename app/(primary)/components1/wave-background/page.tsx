import React from "react";
import WaveBackgroundPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wave Background | UIStudio",
  description: "UIStudio's Wave Background component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Wave Background Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Wave Background with UIStudio's React component.",
    url: "https://UIStudio.in/components1/wave-background",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wave Background Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Wave Background component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <WaveBackgroundPreview />;
};

export default Page;