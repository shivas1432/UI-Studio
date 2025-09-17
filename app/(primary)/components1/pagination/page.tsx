import React from "react";
import PaginationPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagination | UIStudio",
  description: "UIStudio's Pagination component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Pagination Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Pagination with UIStudio's React component.",
    url: "https://UIStudio.in/components1/pagination",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pagination Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Pagination component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <PaginationPreview />;
};

export default Page;