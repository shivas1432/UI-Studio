import React from "react";
import StripesBackgroundPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stripes Background | UIStudio",
  description: "UIStudio's Stripes Background component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Stripes Background Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Stripes Background with UIStudio's React component.",
    url: "https://UIStudio.in/components1/stripes-background",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stripes Background Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Stripes Background component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <StripesBackgroundPreview />;
};

export default Page;