import React from "react";
import MenubarPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menubar | UIStudio",
  description: "UIStudio's Menubar component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Menubar Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Menubar with UIStudio's React component.",
    url: "https://UIStudio.in/components1/menubar",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menubar Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Menubar component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <MenubarPreview />;
};

export default Page;