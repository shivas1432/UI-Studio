import React from "react";
import SparkleNavbarPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparkle Navbar | UIStudio",
  description: "UIStudio's Sparkle Navbar component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Sparkle Navbar Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Sparkle Navbar with UIStudio's React component.",
    url: "https://UIStudio.in/components1/sparkle-navbar",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparkle Navbar Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Sparkle Navbar component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <SparkleNavbarPreview />;
};

export default Page;