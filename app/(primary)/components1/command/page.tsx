import React from "react";
import CommandPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Command | UIStudio",
  description: "UIStudio's Command component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Command Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Command with UIStudio's React component.",
    url: "https://UIStudio.in/components1/command",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Command Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Command component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <CommandPreview />;
};

export default Page;