import React from "react";
import type { Metadata } from "next";
import Textrenderingeffect from "./_components/preview";

export const metadata: Metadata = {
  title: "Text Reveal| UIStudio",
  description:
    "UIStudio's Text Rendering Effect component enables developers to create stunning animated text effects such as typewriter, gradient reveals, and smooth transitions using React, Tailwind CSS, and Framer Motion. Perfect for landing pages, hero sections, and interactive content blocks. Fully customizable, accessible, and easy to integrate into modern web apps.",
  keywords: [
    "Text Rendering Effect Component",
    "React Animated Text UI",
    "Typewriter Effect React",
    "Gradient Text Animation",
    "Tailwind CSS Text Effects",
    "UIStudio Components",
    "Interactive Text Animation",
    "Hero Section Text Effects",
    "Frontend Design System",
    "Accessible Text Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Landing Page Text Effects",
    "Developer Tools",
    "SaaS UI Components",
    "Animated Text Reveal React",
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
      "Text Rendering Effect Component for React — Animated & Interactive Text UI | UIStudio",
    description:
      "Design interactive text animations like typewriter and gradient reveals with UIStudio's React component. Smooth, accessible, and customizable using Tailwind CSS & Framer Motion.",
    url: "https://UIStudio.in/components/text-rendering-effect",
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
      "Text Rendering Effect Component for React — Animated & Interactive Text UI | UIStudio",
    description:
      "UIStudio's Text Rendering Effect component helps developers build beautiful animated text elements in React apps using TailwindCSS & Framer Motion.",
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
  return <Textrenderingeffect />;
};

export default Page;
