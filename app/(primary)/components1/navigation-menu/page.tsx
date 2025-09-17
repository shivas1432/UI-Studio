import React from "react";
import NavigationMenuPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navigation Menu | UIStudio",
  description: "UIStudio's Navigation Menu component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Navigation Menu Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Navigation Menu with UIStudio's React component.",
    url: "https://UIStudio.in/components1/navigation-menu",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navigation Menu Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Navigation Menu component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <NavigationMenuPreview />;
};

export default Page;