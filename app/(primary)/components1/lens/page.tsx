import React from "react";
import LensPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lens | UIStudio",
  description: "UIStudio's Lens component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Lens Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Lens with UIStudio's React component.",
    url: "https://UIStudio.in/components1/lens",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lens Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Lens component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <LensPreview />;
};

export default Page;