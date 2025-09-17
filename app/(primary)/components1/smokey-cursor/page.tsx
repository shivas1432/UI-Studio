import React from "react";
import SmokeyCursorPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smokey Cursor | UIStudio",
  description: "UIStudio's Smokey Cursor component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Smokey Cursor Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Smokey Cursor with UIStudio's React component.",
    url: "https://UIStudio.in/components1/smokey-cursor",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smokey Cursor Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Smokey Cursor component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SmokeyCursorPreview />;
};

export default Page;