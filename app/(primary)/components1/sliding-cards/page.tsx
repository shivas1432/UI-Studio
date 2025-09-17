import React from "react";
import SlidingCardsPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sliding Cards | UIStudio",
  description: "UIStudio's Sliding Cards component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Sliding Cards Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Sliding Cards with UIStudio's React component.",
    url: "https://UIStudio.in/components1/sliding-cards",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sliding Cards Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Sliding Cards component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SlidingCardsPreview />;
};

export default Page;