import React from "react";
import TopStickyBarPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Sticky Bar | UIStudio",
  description: "UIStudio's Top Sticky Bar component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Top Sticky Bar Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Top Sticky Bar with UIStudio's React component.",
    url: "https://UIStudio.in/components1/top-sticky-bar",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Sticky Bar Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Top Sticky Bar component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TopStickyBarPreview />;
};

export default Page;