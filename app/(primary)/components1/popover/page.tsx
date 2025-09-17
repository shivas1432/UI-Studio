import React from "react";
import PopoverPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popover | UIStudio",
  description: "UIStudio's Popover component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Popover Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Popover with UIStudio's React component.",
    url: "https://UIStudio.in/components1/popover",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Popover Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Popover component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <PopoverPreview />;
};

export default Page;