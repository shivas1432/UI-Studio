import React from "react";
import HoverCardPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hover Card | UIStudio",
  description: "UIStudio's Hover Card component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Hover Card Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Hover Card with UIStudio's React component.",
    url: "https://UIStudio.in/components1/hover-card",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hover Card Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Hover Card component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <HoverCardPreview />;
};

export default Page;