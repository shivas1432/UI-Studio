import React from "react";
import CarouselPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carousel | UIStudio",
  description: "UIStudio's Carousel component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Carousel Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Carousel with UIStudio's React component.",
    url: "https://UIStudio.in/components1/carousel",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carousel Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Carousel component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <CarouselPreview />;
};

export default Page;