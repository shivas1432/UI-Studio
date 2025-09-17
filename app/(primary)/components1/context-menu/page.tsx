import React from "react";
import ContextMenuPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Context Menu | UIStudio",
  description: "UIStudio's Context Menu component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Context Menu Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Context Menu with UIStudio's React component.",
    url: "https://UIStudio.in/components1/context-menu",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Context Menu Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Context Menu component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ContextMenuPreview />;
};

export default Page;