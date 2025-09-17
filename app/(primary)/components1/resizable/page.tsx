import React from "react";
import ResizablePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resizable | UIStudio",
  description: "UIStudio's Resizable component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Resizable Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Resizable with UIStudio's React component.",
    url: "https://UIStudio.in/components1/resizable",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resizable Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Resizable component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ResizablePreview />;
};

export default Page;