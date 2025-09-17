import React from "react";
import FormPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form | UIStudio",
  description: "UIStudio's Form component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Form Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Form with UIStudio's React component.",
    url: "https://UIStudio.in/components1/form",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Form Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Form component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <FormPreview />;
};

export default Page;