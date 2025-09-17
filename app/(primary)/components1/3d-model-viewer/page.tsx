import React from "react";
import ThreeDModel ViewerPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Model Viewer | UIStudio",
  description: "UIStudio's 3D Model Viewer component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "3D Model Viewer Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning 3D Model Viewer with UIStudio's React component.",
    url: "https://UIStudio.in/components1/3d-model-viewer",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Model Viewer Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's 3D Model Viewer component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ThreeDModel ViewerPreview />;
};

export default Page;