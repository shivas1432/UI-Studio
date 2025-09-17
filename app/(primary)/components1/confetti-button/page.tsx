import React from "react";
import ConfettiButtonPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confetti Button | UIStudio",
  description: "UIStudio's Confetti Button component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Confetti Button Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Confetti Button with UIStudio's React component.",
    url: "https://UIStudio.in/components1/confetti-button",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confetti Button Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Confetti Button component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ConfettiButtonPreview />;
};

export default Page;