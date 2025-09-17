import React from "react";
import InteractiveCardPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Card | UIStudio",
  description: "UIStudio's Interactive Card component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Interactive Card Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Interactive Card with UIStudio's React component.",
    url: "https://UIStudio.in/components1/interactive-card",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Card Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Interactive Card component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <InteractiveCardPreview />;
};

export default Page;