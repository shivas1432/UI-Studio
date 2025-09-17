import React from "react";
import type { Metadata } from "next";
import Onboardcard from "./_components/preview";

export const metadata: Metadata = {
  title: "Onboard Card | UIStudio",
  description:
    "UIStudio's Onboarding Card component helps developers create engaging user onboarding flows, welcome screens, and product tour steps with smooth animations using React, Tailwind CSS, and Framer Motion. Fully customizable, accessible, and perfect for SaaS dashboards, landing pages, and web applications.",
  keywords: [
    "Onboarding Card Component",
    "React Onboarding UI",
    "User Onboarding Flows",
    "Tailwind CSS Welcome Screens",
    "UIStudio Components",
    "Product Tour UI React",
    "Interactive Onboarding Cards",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Onboarding Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "User Welcome Cards",
    "Developer Tools",
    "SaaS Onboarding Components",
    "Product Walkthrough React",
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
      "Onboarding Card Component for React — User Welcome & Product Tours UI | UIStudio",
    description:
      "Design beautiful onboarding cards with UIStudio's React component. Smooth animations, accessible design, and seamless integration using Tailwind CSS & Framer Motion.",
    url: "https://UIStudio.in/components/onboarding-card",
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
      "Onboarding Card Component for React — User Welcome & Product Tours UI | UIStudio",
    description:
      "UIStudio's Onboarding Card component enables smooth, accessible, and customizable onboarding experiences in React apps with TailwindCSS & Framer Motion.",
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
  return <Onboardcard />;
};

export default Page;
