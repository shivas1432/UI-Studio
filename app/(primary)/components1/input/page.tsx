import React from "react";
import InputPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input | UIStudio",
  description: "UIStudio's Input component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Input Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Input with UIStudio's React component.",
    url: "https://UIStudio.in/components1/input",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Input Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Input component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <InputPreview />;
};

export default Page;