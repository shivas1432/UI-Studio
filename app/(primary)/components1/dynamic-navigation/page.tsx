import React from "react";
import DynamicNavigationPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic Navigation | UIStudio",
  description: "UIStudio's Dynamic Navigation component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Dynamic Navigation Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Dynamic Navigation with UIStudio's React component.",
    url: "https://UIStudio.in/components1/dynamic-navigation",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Navigation Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Dynamic Navigation component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <DynamicNavigationPreview />;
};

export default Page;