import React from "react";
import HamburgerMenuOverlayPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamburger Menu Overlay | UIStudio",
  description: "UIStudio's Hamburger Menu Overlay component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Hamburger Menu Overlay Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Hamburger Menu Overlay with UIStudio's React component.",
    url: "https://UIStudio.in/components1/hamburger-menu-overlay",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamburger Menu Overlay Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Hamburger Menu Overlay component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <HamburgerMenuOverlayPreview />;
};

export default Page;