import React from "react";
import TrustedUsersPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted Users | UIStudio",
  description: "UIStudio's Trusted Users component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Trusted Users Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Trusted Users with UIStudio's React component.",
    url: "https://UIStudio.in/components1/trusted-users",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Users Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Trusted Users component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TrustedUsersPreview />;
};

export default Page;