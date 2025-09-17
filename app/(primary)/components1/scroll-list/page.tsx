import React from "react";
import ScrollListPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scroll List | UIStudio",
  description: "UIStudio's Scroll List component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Scroll List Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Scroll List with UIStudio's React component.",
    url: "https://UIStudio.in/components1/scroll-list",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scroll List Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Scroll List component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ScrollListPreview />;
};

export default Page;