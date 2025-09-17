import React from "react";
import VideoTextPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Text | UIStudio",
  description: "UIStudio's Video Text component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Video Text Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Video Text with UIStudio's React component.",
    url: "https://UIStudio.in/components1/video-text",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Text Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Video Text component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <VideoTextPreview />;
};

export default Page;