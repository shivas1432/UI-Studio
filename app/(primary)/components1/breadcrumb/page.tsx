import React from "react";
import BreadcrumbPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breadcrumb | UIStudio",
  description: "UIStudio's Breadcrumb component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Breadcrumb Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Breadcrumb with UIStudio's React component.",
    url: "https://UIStudio.in/components1/breadcrumb",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breadcrumb Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Breadcrumb component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <BreadcrumbPreview />;
};

export default Page;