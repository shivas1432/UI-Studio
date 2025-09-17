import React from "react";
import GlobePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Globe | UIStudio",
  description: "UIStudio's Globe component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Globe Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Globe with UIStudio's React component.",
    url: "https://UIStudio.in/components1/globe",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Globe Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Globe component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <GlobePreview />;
};

export default Page;