import React from "react";
import RippleLoaderPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ripple Loader | UIStudio",
  description: "UIStudio's Ripple Loader component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Ripple Loader Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Ripple Loader with UIStudio's React component.",
    url: "https://UIStudio.in/components1/ripple-loader",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Loader Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Ripple Loader component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <RippleLoaderPreview />;
};

export default Page;