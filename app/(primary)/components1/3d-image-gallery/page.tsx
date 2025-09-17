import React from "react";
import ThreeDImageGalleryPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Image Gallery | UIStudio",
  description: "UIStudio's 3D Image Gallery component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "3D Image Gallery Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning 3D Image Gallery with UIStudio's React component.",
    url: "https://UIStudio.in/components1/3d-image-gallery",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Image Gallery Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's 3D Image Gallery component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ThreeDImageGalleryPreview />;
};

export default Page;