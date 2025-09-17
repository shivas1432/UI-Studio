import React from "react";
import TextareaPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textarea | UIStudio",
  description: "UIStudio's Textarea component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Textarea Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Textarea with UIStudio's React component.",
    url: "https://UIStudio.in/components1/textarea",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Textarea Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Textarea component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TextareaPreview />;
};

export default Page;