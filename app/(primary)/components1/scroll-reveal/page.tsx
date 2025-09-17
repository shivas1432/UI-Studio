import React from "react";
import ScrollRevealPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scroll Reveal | UIStudio",
  description: "UIStudio's Scroll Reveal component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Scroll Reveal Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Scroll Reveal with UIStudio's React component.",
    url: "https://UIStudio.in/components1/scroll-reveal",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scroll Reveal Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Scroll Reveal component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ScrollRevealPreview />;
};

export default Page;