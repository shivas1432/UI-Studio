import React from "react";
import DrawerPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drawer | UIStudio",
  description: "UIStudio's Drawer component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Drawer Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Drawer with UIStudio's React component.",
    url: "https://UIStudio.in/components1/drawer",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drawer Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Drawer component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <DrawerPreview />;
};

export default Page;