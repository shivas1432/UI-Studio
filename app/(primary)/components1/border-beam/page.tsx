import React from "react";
import BorderBeamPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Border Beam | UIStudio",
  description: "UIStudio's Border Beam component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Border Beam Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Border Beam with UIStudio's React component.",
    url: "https://UIStudio.in/components1/border-beam",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Border Beam Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Border Beam component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <BorderBeamPreview />;
};

export default Page;