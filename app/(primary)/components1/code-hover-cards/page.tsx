import React from "react";
import CodeHoverCardsPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Hover Cards | UIStudio",
  description: "UIStudio's Code Hover Cards component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Code Hover Cards Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Code Hover Cards with UIStudio's React component.",
    url: "https://UIStudio.in/components1/code-hover-cards",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Hover Cards Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Code Hover Cards component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <CodeHoverCardsPreview />;
};

export default Page;