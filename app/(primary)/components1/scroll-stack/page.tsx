import React from "react";
import ScrollStackPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scroll Stack | UIStudio",
  description: "UIStudio's Scroll Stack component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Scroll Stack Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Scroll Stack with UIStudio's React component.",
    url: "https://UIStudio.in/components1/scroll-stack",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scroll Stack Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Scroll Stack component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ScrollStackPreview />;
};

export default Page;