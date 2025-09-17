import React from "react";
import TypewriterInputPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typewriter Input | UIStudio",
  description: "UIStudio's Typewriter Input component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Typewriter Input Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Typewriter Input with UIStudio's React component.",
    url: "https://UIStudio.in/components1/typewriter-input",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Typewriter Input Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Typewriter Input component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TypewriterInputPreview />;
};

export default Page;