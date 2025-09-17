import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import TextShimmer from "@/app/(primary)/components/text-shimmer/_components/text-shimmer";

export const metadata: Metadata = {
  title: "Text Shimmer Effect Live Preview | UIStudio",
  description:
    "Try out UIStudio's Text Shimmer component in this live preview. Built with React, Tailwind CSS, and Framer Motion, this shimmering text animation is perfect for loading states, placeholders, and modern UI skeleton loaders.",
  keywords: [
    "Text Shimmer Effect Preview",
    "Shimmer Loading Animation",
    "React Text Effects",
    "UIStudio Text Shimmer",
    "Tailwind CSS Loading UI",
    "Framer Motion Shimmer Effect",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Loading Animation Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "UIStudio by shivashanker",
    "Skeleton Loader Animation",
    "Modern UI Loading Effects",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Text Shimmer Effect Live Preview | UIStudio",
    description:
      "Live demo of UIStudio's Text Shimmer component. Add modern shimmer animations to loading states and placeholders using React, Tailwind CSS, and Framer Motion.",
    url: "https://UIStudio.in/components/text-shimmer/preview",
    siteName: "UIStudio",
    images: [
      {
        url: "https://UIStudio.in/UIStudio-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "UIStudio Component Preview Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Shimmer Effect Live Preview | UIStudio",
    description:
      "Experience UIStudio's Text Shimmer component in this interactive preview. Perfect for loading states and skeleton UI, crafted with React, Tailwind CSS, and Framer Motion.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Preview = () => {
  return (
    <LivePreviewComponent>
      <TextShimmer className="text-sm" duration={1}>
        Loading...
      </TextShimmer>
    </LivePreviewComponent>
  );
};

export default Preview;
