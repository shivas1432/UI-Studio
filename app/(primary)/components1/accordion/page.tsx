import React from "react";
import AccordionPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accordion | UIStudio",
  description: "UIStudio's Accordion component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Accordion Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Accordion with UIStudio's React component.",
    url: "https://UIStudio.in/components1/accordion",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accordion Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Accordion component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <AccordionPreview />;
};

export default Page;