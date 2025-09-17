import React from "react";
import SeasonalHoverCardsPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasonal Hover Cards | UIStudio",
  description: "UIStudio's Seasonal Hover Cards component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Seasonal Hover Cards Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Seasonal Hover Cards with UIStudio's React component.",
    url: "https://UIStudio.in/components1/seasonal-hover-cards",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seasonal Hover Cards Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Seasonal Hover Cards component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SeasonalHoverCardsPreview />;
};

export default Page;