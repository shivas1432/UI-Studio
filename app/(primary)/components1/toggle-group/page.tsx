import React from "react";
import ToggleGroupPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toggle Group | UIStudio",
  description: "UIStudio's Toggle Group component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Toggle Group Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Toggle Group with UIStudio's React component.",
    url: "https://UIStudio.in/components1/toggle-group",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toggle Group Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Toggle Group component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ToggleGroupPreview />;
};

export default Page;