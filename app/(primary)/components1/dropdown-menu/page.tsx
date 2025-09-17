import React from "react";
import DropdownMenuPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dropdown Menu | UIStudio",
  description: "UIStudio's Dropdown Menu component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Dropdown Menu Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Dropdown Menu with UIStudio's React component.",
    url: "https://UIStudio.in/components1/dropdown-menu",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dropdown Menu Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Dropdown Menu component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <DropdownMenuPreview />;
};

export default Page;