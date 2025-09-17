import React from "react";
import MagicLoaderPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Loader | UIStudio",
  description: "UIStudio's Magic Loader component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Magic Loader Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Magic Loader with UIStudio's React component.",
    url: "https://UIStudio.in/components1/magic-loader",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Loader Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Magic Loader component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <MagicLoaderPreview />;
};

export default Page;