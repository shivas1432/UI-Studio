import React from "react";
import ImageTrailEffectPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Trail Effect | UIStudio",
  description: "UIStudio's Image Trail Effect component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Image Trail Effect Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Image Trail Effect with UIStudio's React component.",
    url: "https://UIStudio.in/components1/image-trail-effect",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Trail Effect Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Image Trail Effect component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ImageTrailEffectPreview />;
};

export default Page;