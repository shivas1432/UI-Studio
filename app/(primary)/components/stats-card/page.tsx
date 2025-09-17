import React from "react";
import type { Metadata } from "next";
import Statscard from "./_components/preview";

export const metadata: Metadata = {
  title: "Stats Card | UIStudio",
  description:
    "UIStudio's Stats Card component enables developers to showcase key metrics, KPIs, and analytics data in a clean, animated card layout using React, Tailwind CSS, and Framer Motion. Ideal for dashboards, admin panels, SaaS products, and landing pages. Fully customizable, accessible, and designed to elevate your data visualization UI.",
  keywords: [
    "Stats Card Component",
    "React Analytics UI",
    "KPI Dashboard Cards",
    "Tailwind CSS Stats Card",
    "UIStudio Components",
    "Data Visualization UI",
    "Performance Metrics UI",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Stats Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "SaaS Dashboard Components",
    "Developer Tools",
    "Admin Panel Metrics UI",
    "Analytics Card React",
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
      "Stats Card Component for React — Beautiful KPI & Analytics UI | UIStudio",
    description:
      "Design sleek analytics and stats cards with UIStudio's React component. Smooth animations, accessible design, and seamless integration with Tailwind CSS & Framer Motion.",
    url: "https://UIStudio.in/components/stats-card",
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
      "Stats Card Component for React — Beautiful KPI & Analytics UI | UIStudio",
    description:
      "UIStudio's Stats Card component helps developers display key performance metrics and analytics in React apps using TailwindCSS & Framer Motion.",
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
  return <Statscard />;
};

export default Page;
