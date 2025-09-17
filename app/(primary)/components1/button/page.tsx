import React from "react";
import ButtonPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Button | UIStudio",
  description: "UIStudio's Button component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Button Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Button with UIStudio's React component.",
    url: "https://UIStudio.in/components1/button",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Button Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Button component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ButtonPreview />;
};

export default Page;