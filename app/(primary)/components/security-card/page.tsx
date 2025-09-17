import React from "react";
import type { Metadata } from "next";
import Securitycard from "./_components/preview";

export const metadata: Metadata = {
  title: "Security Card | UIStudio",
  description:
    "UIStudio's Security Card component allows developers to display security statuses, protection indicators, and threat alerts with a sleek, animated UI using React, Tailwind CSS, and Framer Motion. Perfect for dashboards, fintech platforms, admin panels, and SaaS applications. Fully customizable, accessible, and easy to integrate into any project.",
  keywords: [
    "Security Card Component",
    "React Security Status UI",
    "Tailwind CSS Security Card",
    "UIStudio Components",
    "Threat Alert UI React",
    "Protection Level Indicators",
    "Admin Panel Security Components",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Security Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Security Dashboard UI",
    "Developer Tools",
    "SaaS Security Components",
    "Risk Alert Visualization",
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
      "Security Card Component for React — Visual Security Status & Alerts UI | UIStudio",
    description:
      "Design interactive security status cards with UIStudio's React component. Smooth animations, accessible design, and easy integration using Tailwind CSS & Framer Motion.",
    url: "https://UIStudio.in/components/security-card",
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
      "Security Card Component for React — Visual Security Status & Alerts UI | UIStudio",
    description:
      "UIStudio's Security Card component enables developers to build smooth, customizable security status visuals in React apps using TailwindCSS & Framer Motion.",
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
  return <Securitycard />;
};

export default Page;
