import React from "react";
import ThreeDCarouselPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Carousel | UIStudio",
  description: "UIStudio's 3D Carousel component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "3D Carousel Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning 3D Carousel with UIStudio's React component.",
    url: "https://UIStudio.in/components1/3d-carousel",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Carousel Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's 3D Carousel component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ThreeDCarouselPreview />;
};

export default Page;