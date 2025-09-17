import React from "react";
import SidebarPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sidebar | UIStudio",
  description: "UIStudio's Sidebar component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Sidebar Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Sidebar with UIStudio's React component.",
    url: "https://UIStudio.in/components1/sidebar",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidebar Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Sidebar component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SidebarPreview />;
};

export default Page;