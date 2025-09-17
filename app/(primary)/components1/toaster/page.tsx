import React from "react";
import ToasterPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toaster | UIStudio",
  description: "UIStudio's Toaster component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Toaster Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Toaster with UIStudio's React component.",
    url: "https://UIStudio.in/components1/toaster",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toaster Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Toaster component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ToasterPreview />;
};

export default Page;