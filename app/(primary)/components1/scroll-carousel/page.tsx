import React from "react";
import ScrollCarouselPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scroll Carousel | UIStudio",
  description: "UIStudio's Scroll Carousel component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Scroll Carousel Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Scroll Carousel with UIStudio's React component.",
    url: "https://UIStudio.in/components1/scroll-carousel",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scroll Carousel Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Scroll Carousel component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ScrollCarouselPreview />;
};

export default Page;