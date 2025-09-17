import React from "react";
import RadioGroupPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Group | UIStudio",
  description: "UIStudio's Radio Group component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Radio Group Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Radio Group with UIStudio's React component.",
    url: "https://UIStudio.in/components1/radio-group",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Group Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Radio Group component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <RadioGroupPreview />;
};

export default Page;