import React from "react";
import CanvasConfettiCursorPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canvas Confetti Cursor | UIStudio",
  description: "UIStudio's Canvas Confetti Cursor component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Canvas Confetti Cursor Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Canvas Confetti Cursor with UIStudio's React component.",
    url: "https://UIStudio.in/components1/canvas-confetti-cursor",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvas Confetti Cursor Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Canvas Confetti Cursor component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <CanvasConfettiCursorPreview />;
};

export default Page;