import React from "react";
import type { Metadata } from "next";
import Socialcard from "./_components/preview";

export const metadata: Metadata = {
  title: "Social Card | UIStudio",
  description:
    "UIStudio's Social Card component helps developers build elegant profile cards, social sharing blocks, and content preview cards using React, Tailwind CSS, and Framer Motion. Perfect for landing pages, blogs, SaaS dashboards, and social media integrations. Fully customizable, accessible, and easy to copy-paste into your projects.",
  keywords: [
    "Social Card Component",
    "React Profile Card UI",
    "Tailwind CSS Social Cards",
    "UIStudio Components",
    "Content Preview Cards React",
    "Social Media Sharing UI",
    "Profile Link Cards",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Social Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Landing Page Social Cards",
    "Developer Tools",
    "SaaS UI Components",
    "Social Link Preview React",
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
      "Social Card Component for React — Profile & Content Preview UI | UIStudio",
    description:
      "Design beautiful social profile and content preview cards with UIStudio's React component. Smooth animations, accessible design, and Tailwind CSS & Framer Motion integration.",
    url: "https://UIStudio.in/components/social-card",
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
      "Social Card Component for React — Profile & Content Preview UI | UIStudio",
    description:
      "UIStudio's Social Card component enables developers to build smooth, customizable profile and sharing cards in React apps using TailwindCSS & Framer Motion.",
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
  return <Socialcard />;
};

export default Page;
