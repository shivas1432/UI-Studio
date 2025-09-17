import React from "react";
import SeparatorPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Separator | UIStudio",
  description: "UIStudio's Separator component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Separator Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Separator with UIStudio's React component.",
    url: "https://UIStudio.in/components1/separator",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Separator Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Separator component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SeparatorPreview />;
};

export default Page;