import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import StatsCard from "@/app/(primary)/components/stats-card/_components/statscard";

export const metadata: Metadata = {
  title: "Stats Card Live Preview | UIStudio",
  description:
    "Explore UIStudio's Stats Card component in this live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this component beautifully displays key metrics, analytics, and performance stats in a clean, responsive layout. Perfect for dashboards, SaaS apps, and admin panels.",
  keywords: [
    "Stats Card Preview",
    "Analytics UI Component",
    "React Dashboard Cards",
    "UIStudio Stats Card",
    "Tailwind CSS Analytics UI",
    "Framer Motion Metrics UI",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Stats Component Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "UIStudio by shivashanker",
    "SaaS Dashboard UI",
    "Performance Metrics Card",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Stats Card Live Preview | UIStudio",
    description:
      "Live demo of UIStudio's Stats Card component. Display key metrics and analytics with a clean, responsive UI built using React, Tailwind CSS, and Framer Motion.",
    url: "https://UIStudio.in/components/stats-card/preview",
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
    title: "Stats Card Live Preview | UIStudio",
    description:
      "Experience UIStudio's Stats Card component in this live interactive preview. Perfect for SaaS dashboards and analytics panels, crafted with React, Tailwind CSS, and Framer Motion.",
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
      <StatsCard />
    </LivePreviewComponent>
  );
};

export default Preview;
