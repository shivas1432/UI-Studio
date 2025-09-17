import React from "react";
import CalendarPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar | UIStudio",
  description: "UIStudio's Calendar component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Calendar Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Calendar with UIStudio's React component.",
    url: "https://UIStudio.in/components1/calendar",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendar Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Calendar component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <CalendarPreview />;
};

export default Page;