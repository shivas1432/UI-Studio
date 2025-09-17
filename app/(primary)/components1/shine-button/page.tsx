import React from "react";
import ShineButtonPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shine Button | UIStudio",
  description: "UIStudio's Shine Button component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Shine Button Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Shine Button with UIStudio's React component.",
    url: "https://UIStudio.in/components1/shine-button",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shine Button Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Shine Button component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ShineButtonPreview />;
};

export default Page;