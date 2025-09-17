import React from "react";
import DragOrderListPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drag Order List | UIStudio",
  description: "UIStudio's Drag Order List component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Drag Order List Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Drag Order List with UIStudio's React component.",
    url: "https://UIStudio.in/components1/drag-order-list",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drag Order List Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Drag Order List component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <DragOrderListPreview />;
};

export default Page;