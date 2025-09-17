import React from "react";
import CollapsiblePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collapsible | UIStudio",
  description: "UIStudio's Collapsible component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Collapsible Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Collapsible with UIStudio's React component.",
    url: "https://UIStudio.in/components1/collapsible",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collapsible Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Collapsible component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <CollapsiblePreview />;
};

export default Page;