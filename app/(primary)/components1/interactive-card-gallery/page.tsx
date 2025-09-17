import React from "react";
import InteractiveCardGalleryPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Card Gallery | UIStudio",
  description: "UIStudio's Interactive Card Gallery component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Interactive Card Gallery Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Interactive Card Gallery with UIStudio's React component.",
    url: "https://UIStudio.in/components1/interactive-card-gallery",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Card Gallery Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Interactive Card Gallery component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <InteractiveCardGalleryPreview />;
};

export default Page;