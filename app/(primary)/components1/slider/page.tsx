import React from "react";
import SliderPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slider | UIStudio",
  description: "UIStudio's Slider component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Slider Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Slider with UIStudio's React component.",
    url: "https://UIStudio.in/components1/slider",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slider Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Slider component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SliderPreview />;
};

export default Page;