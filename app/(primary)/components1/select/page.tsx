import React from "react";
import SelectPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select | UIStudio",
  description: "UIStudio's Select component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Select Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Select with UIStudio's React component.",
    url: "https://UIStudio.in/components1/select",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Select Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Select component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SelectPreview />;
};

export default Page;