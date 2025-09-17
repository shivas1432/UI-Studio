import React from "react";
import TablePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table | UIStudio",
  description: "UIStudio's Table component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Table Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Table with UIStudio's React component.",
    url: "https://UIStudio.in/components1/table",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Table Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Table component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TablePreview />;
};

export default Page;