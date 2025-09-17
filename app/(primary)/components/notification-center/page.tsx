import React from "react";
import type { Metadata } from "next";
import Notificationcenter from "./_components/preview";

export const metadata: Metadata = {
  title: "Notification Center | UIStudio",
  description:
    "UIStudio's Notification Center component enables developers to build sleek and interactive notification panels with real-time alerts, updates, and announcements using React, Tailwind CSS, and Framer Motion. Perfect for SaaS dashboards, web apps, and admin panels. Fully customizable, accessible, and easy to integrate with any project.",
  keywords: [
    "Notification Center Component",
    "React Notifications UI",
    "Real-time Alerts React",
    "Tailwind CSS Notification Panel",
    "UIStudio Components",
    "Interactive Notification UI",
    "SaaS Dashboard Components",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Notifications Component",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Real-time Updates UI",
    "Developer Tools",
    "Admin Panel Notification UI",
    "User Alerts React",
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
      "Notification Center Component for React — Real-time Alerts & Updates UI | UIStudio",
    description:
      "Design interactive notification centers with UIStudio's React component. Real-time alerts, smooth animations, and accessible design using Tailwind CSS & Framer Motion.",
    url: "https://UIStudio.in/components/notification-center",
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
      "Notification Center Component for React — Real-time Alerts & Updates UI | UIStudio",
    description:
      "UIStudio's Notification Center component enables developers to create real-time, accessible, and customizable notification panels in React apps.",
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
  return <Notificationcenter />;
};

export default Page;
