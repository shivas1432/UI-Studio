import React from "react";
import ScrollTimelinePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scroll Timeline | UIStudio",
  description: "UIStudio's Scroll Timeline component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Scroll Timeline Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Scroll Timeline with UIStudio's React component.",
    url: "https://UIStudio.in/components1/scroll-timeline",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scroll Timeline Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Scroll Timeline component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ScrollTimelinePreview />;
};

export default Page;