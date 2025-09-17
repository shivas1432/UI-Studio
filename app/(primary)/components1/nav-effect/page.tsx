import React from "react";
import NavEffectPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nav Effect | UIStudio",
  description: "UIStudio's Nav Effect component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Nav Effect Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Nav Effect with UIStudio's React component.",
    url: "https://UIStudio.in/components1/nav-effect",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nav Effect Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Nav Effect component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <NavEffectPreview />;
};

export default Page;