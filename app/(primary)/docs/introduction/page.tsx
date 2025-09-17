import IntroductionPage from "@/components/docs/introductionpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Introduction | UIStudio",
  description:
    "UIStudio, a beautifully crafted open-source React component library powered by Tailwind CSS and Framer Motion. Learn the core principles, philosophy, and how UIStudio helps developers build modern, accessible, and customizable UI components with ease.",
  keywords: [
    "UIStudio Introduction",
    "React Component Library",
    "Tailwind CSS UI Kit",
    "Open Source UI Components",
    "UIStudio Documentation",
    "Frontend Design System",
    "Framer Motion Components",
    "Reusable React Components",
    "Accessible UI Components",
    "UIStudio by shivashanker",
    "Developer Tools",
    "UI Library for React & Next.js",
    "Copy Paste UI Components",
    "Modern UI Kit",
    "Frontend Engineer Resources",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title:
      "Introduction to UIStudio — Open Source React Component Library | UIStudio Docs",
    description:
      "Get an overview of UIStudio, an open-source React component library designed with Tailwind CSS and Framer Motion. Learn its core principles and how to integrate it into your frontend projects.",
    url: "https://UIStudio.in/docs/introduction",
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
      "Introduction to UIStudio — Open Source React Component Library | UIStudio Docs",
    description:
      "Start building with UIStudio, an open-source React UI library built with Tailwind CSS & Framer Motion. Learn the core principles and how to use it in your projects.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function Introduction() {
  return <IntroductionPage />;
}
