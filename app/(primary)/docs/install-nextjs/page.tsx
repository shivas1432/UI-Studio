import NextjsInstallationPage from "@/components/docs/nextjsinstallationpage";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Install Next.js | UIStudio",
  description:
    "Learn how to seamlessly integrate UIStudio into your Next.js project. Follow this comprehensive installation guide to set up Tailwind CSS, import components, and start building beautiful UIs with React and Framer Motion.",
  keywords: [
    "UIStudio Installation",
    "Next.js Component Library",
    "Install UIStudio Next.js",
    "Tailwind CSS Setup Guide",
    "React UI Components",
    "Next.js UI Library",
    "Frontend Design System",
    "UIStudio Documentation",
    "UI Library for Next.js",
    "Component Installation Guide",
    "Framer Motion in Next.js",
    "UIStudio by shivashanker",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Next.js Developer Tools",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title:
      "Install UIStudio in Next.js — Step-by-Step Setup Guide | UIStudio Docs",
    description:
      "Integrate UIStudio into your Next.js projects with this simple installation guide. Setup Tailwind CSS and start building modern, animated UI components in minutes.",
    url: "https://UIStudio.in/docs/nextjs-installation",
    siteName: "UIStudio",
    images: [
      {
        url: "https://UIStudio.in/UIStudio-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "UIStudio Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Install UIStudio in Next.js — Step-by-Step Setup Guide | UIStudio Docs",
    description:
      "Follow this step-by-step guide to install UIStudio in your Next.js project. Learn how to setup Tailwind CSS and start using beautiful, reusable components instantly.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const NextjsInstallation = () => {
  return <NextjsInstallationPage />;
};

export default NextjsInstallation;
