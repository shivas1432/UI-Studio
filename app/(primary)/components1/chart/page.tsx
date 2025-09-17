import React from "react";
import ChartPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chart | UIStudio",
  description: "UIStudio's Chart component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Chart Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Chart with UIStudio's React component.",
    url: "https://UIStudio.in/components1/chart",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chart Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Chart component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ChartPreview />;
};

export default Page;