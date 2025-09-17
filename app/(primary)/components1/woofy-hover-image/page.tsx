import React from "react";
import WoofyHoverImagePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woofy Hover Image | UIStudio",
  description: "UIStudio's Woofy Hover Image component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Woofy Hover Image Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Woofy Hover Image with UIStudio's React component.",
    url: "https://UIStudio.in/components1/woofy-hover-image",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woofy Hover Image Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Woofy Hover Image component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <WoofyHoverImagePreview />;
};

export default Page;