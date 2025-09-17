import React from "react";
import ImageSlidingMarqueePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Sliding Marquee | UIStudio",
  description: "UIStudio's Image Sliding Marquee component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Image Sliding Marquee Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Image Sliding Marquee with UIStudio's React component.",
    url: "https://UIStudio.in/components1/image-sliding-marquee",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Sliding Marquee Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Image Sliding Marquee component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ImageSlidingMarqueePreview />;
};

export default Page;