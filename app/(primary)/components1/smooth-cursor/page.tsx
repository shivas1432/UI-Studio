import React from "react";
import SmoothCursorPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smooth Cursor | UIStudio",
  description: "UIStudio's Smooth Cursor component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Smooth Cursor Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Smooth Cursor with UIStudio's React component.",
    url: "https://UIStudio.in/components1/smooth-cursor",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smooth Cursor Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Smooth Cursor component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SmoothCursorPreview />;
};

export default Page;