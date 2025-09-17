import React from "react";
import DialogPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialog | UIStudio",
  description: "UIStudio's Dialog component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Dialog Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Dialog with UIStudio's React component.",
    url: "https://UIStudio.in/components1/dialog",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dialog Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Dialog component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <DialogPreview />;
};

export default Page;