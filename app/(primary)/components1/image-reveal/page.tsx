import React from "react";
import ImageRevealPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Reveal | UIStudio",
  description: "UIStudio's Image Reveal component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Image Reveal Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Image Reveal with UIStudio's React component.",
    url: "https://UIStudio.in/components1/image-reveal",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Reveal Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Image Reveal component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ImageRevealPreview />;
};

export default Page;