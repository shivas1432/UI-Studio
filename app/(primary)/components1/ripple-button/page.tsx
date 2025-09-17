import React from "react";
import RippleButtonPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ripple Button | UIStudio",
  description: "UIStudio's Ripple Button component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Ripple Button Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Ripple Button with UIStudio's React component.",
    url: "https://UIStudio.in/components1/ripple-button",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Button Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Ripple Button component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <RippleButtonPreview />;
};

export default Page;