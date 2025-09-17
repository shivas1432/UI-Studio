import React from "react";
import SkeletonPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skeleton | UIStudio",
  description: "UIStudio's Skeleton component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Skeleton Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Skeleton with UIStudio's React component.",
    url: "https://UIStudio.in/components1/skeleton",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skeleton Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Skeleton component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SkeletonPreview />;
};

export default Page;