import React from "react";
import OrbitCardPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orbit Card | UIStudio",
  description: "UIStudio's Orbit Card component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Orbit Card Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Orbit Card with UIStudio's React component.",
    url: "https://UIStudio.in/components1/orbit-card",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit Card Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Orbit Card component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <OrbitCardPreview />;
};

export default Page;