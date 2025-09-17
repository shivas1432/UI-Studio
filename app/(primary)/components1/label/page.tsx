import React from "react";
import LabelPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Label | UIStudio",
  description: "UIStudio's Label component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Label Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Label with UIStudio's React component.",
    url: "https://UIStudio.in/components1/label",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Label Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Label component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <LabelPreview />;
};

export default Page;