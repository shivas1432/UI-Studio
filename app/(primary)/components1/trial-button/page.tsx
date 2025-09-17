import React from "react";
import TrialButtonPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trial Button | UIStudio",
  description: "UIStudio's Trial Button component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Trial Button Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Trial Button with UIStudio's React component.",
    url: "https://UIStudio.in/components1/trial-button",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trial Button Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Trial Button component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TrialButtonPreview />;
};

export default Page;