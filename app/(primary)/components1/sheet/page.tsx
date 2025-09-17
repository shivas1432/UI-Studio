import React from "react";
import SheetPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sheet | UIStudio",
  description: "UIStudio's Sheet component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Sheet Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Sheet with UIStudio's React component.",
    url: "https://UIStudio.in/components1/sheet",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheet Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Sheet component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SheetPreview />;
};

export default Page;