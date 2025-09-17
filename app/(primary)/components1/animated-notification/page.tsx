import React from "react";
import AnimatedNotificationPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Notification | UIStudio",
  description: "UIStudio's Animated Notification component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Animated Notification Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Animated Notification with UIStudio's React component.",
    url: "https://UIStudio.in/components1/animated-notification",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated Notification Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Animated Notification component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <AnimatedNotificationPreview />;
};

export default Page;