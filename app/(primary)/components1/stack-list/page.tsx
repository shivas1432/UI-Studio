import React from "react";
import StackListPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack List | UIStudio",
  description: "UIStudio's Stack List component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Stack List Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Stack List with UIStudio's React component.",
    url: "https://UIStudio.in/components1/stack-list",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack List Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Stack List component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <StackListPreview />;
};

export default Page;