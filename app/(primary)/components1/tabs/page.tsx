import React from "react";
import TabsPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabs | UIStudio",
  description: "UIStudio's Tabs component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Tabs Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Tabs with UIStudio's React component.",
    url: "https://UIStudio.in/components1/tabs",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tabs Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Tabs component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TabsPreview />;
};

export default Page;