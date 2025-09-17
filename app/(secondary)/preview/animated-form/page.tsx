import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import AnimatedForm from "@/app/(primary)/components/animated-form/_components/animated-form";

export const metadata: Metadata = {
  title: "Animated Form Live Preview | UIStudio",
  description:
    "Experience the Animated Form component from UIStudio in a live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this form delivers smooth animations and a seamless user experience. Easily copy and paste into your projects.",
  keywords: [
    "Animated Form Preview",
    "Live UI Component Demo",
    "React Form Animation",
    "UIStudio Animated Form",
    "Framer Motion Forms",
    "Tailwind CSS Form Component",
    "UIStudio Component Preview",
    "React UI Playground",
    "Interactive Component Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "UIStudio by shivashanker",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Animated Form Live Preview | UIStudio",
    description:
      "See UIStudio's Animated Form component in action with this live interactive demo. Built with React, Tailwind CSS & Framer Motion for smooth animations and responsive design.",
    url: "https://UIStudio.in/components/animated-form/preview",
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
    title: "Animated Form Live Preview | UIStudio",
    description:
      "Interactive live demo of UIStudio's Animated Form component built with React, Tailwind CSS, and Framer Motion.",
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
      <AnimatedForm />
    </LivePreviewComponent>
  );
};

export default Preview;
