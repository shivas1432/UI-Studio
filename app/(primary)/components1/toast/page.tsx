import React from "react";
import ToastPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toast | UIStudio",
  description: "UIStudio's Toast component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Toast Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Toast with UIStudio's React component.",
    url: "https://UIStudio.in/components1/toast",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toast Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Toast component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ToastPreview />;
};

export default Page;