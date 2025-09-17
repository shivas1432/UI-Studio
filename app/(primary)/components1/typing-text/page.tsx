import React from "react";
import TypingTextPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typing Text | UIStudio",
  description: "UIStudio's Typing Text component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Typing Text Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Typing Text with UIStudio's React component.",
    url: "https://UIStudio.in/components1/typing-text",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Typing Text Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Typing Text component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TypingTextPreview />;
};

export default Page;