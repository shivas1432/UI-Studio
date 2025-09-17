import React from "react";
import GlowingCardsPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glowing Cards | UIStudio",
  description: "UIStudio's Glowing Cards component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Glowing Cards Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Glowing Cards with UIStudio's React component.",
    url: "https://UIStudio.in/components1/glowing-cards",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glowing Cards Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Glowing Cards component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <GlowingCardsPreview />;
};

export default Page;