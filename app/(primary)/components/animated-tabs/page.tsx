import React from "react";
import type { Metadata } from "next";
import Animatedtabs from "./_components/preview";

export const metadata: Metadata = {
  title: "Animated Tabs | UIStudio",
  description:
    "UIStudio's Animated Tabs component allows developers to create interactive tabbed interfaces with smooth animations using React, Tailwind CSS, and Framer Motion. Perfect for dashboards, landing pages, and content navigation. Fully customizable, accessible, and designed to enhance user experience. Copy-paste and integrate easily into your React projects.",
  keywords: [
    "Animated Tabs Component",
    "React Tabs UI",
    "Framer Motion Tabs",
    "Tailwind CSS Tabs",
    "UIStudio Components",
    "UI Animation Library",
    "Interactive Tabs React",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Tabs Component",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Beautiful Navigation UI",
    "Developer Tools",
    "SaaS UI Components",
    "Tabbed Content React",
    "UIStudio by shivashanker",
    "Reusable React Components",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title:
      "Animated Tabs Component for React — Interactive & Smooth UI | UIStudio",
    description:
      "Design sleek tabbed interfaces with UIStudio's Animated Tabs component. Smooth animations, accessible design, and easy integration with Tailwind CSS & Framer Motion.",
    url: "https://UIStudio.in/components/animated-tabs",
    siteName: "UIStudio",
    images: [
      {
        url: "https://UIStudio.in/UIStudio-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "UIStudio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Animated Tabs Component for React — Interactive & Smooth UI | UIStudio",
    description:
      "UIStudio's Animated Tabs component enables smooth, accessible, and customizable tabbed interfaces in React apps. Built with TailwindCSS & Framer Motion.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Animatedtabs />;
};

export default Page;
