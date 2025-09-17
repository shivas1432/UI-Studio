import React from "react";
import TopLoaderPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Loader | UIStudio",
  description: "UIStudio's Top Loader component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Top Loader Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Top Loader with UIStudio's React component.",
    url: "https://UIStudio.in/components1/top-loader",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Loader Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Top Loader component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TopLoaderPreview />;
};

export default Page;