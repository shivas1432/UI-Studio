import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import TextReveal from "@/app/(primary)/components/text-reveal/_components/text-reveal";

export const metadata: Metadata = {
  title: "Text Reveal Effect Live Preview | UIStudio",
  description:
    "Experience UIStudio's Text Reveal component in this live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this effect animates text reveal with smooth staggered transitions. Ideal for landing pages, hero sections, and engaging UI animations.",
  keywords: [
    "Text Reveal Effect Preview",
    "Animated Text Component",
    "React Text Animation",
    "UIStudio Text Reveal",
    "Tailwind CSS Text Effects",
    "Framer Motion Text Animation",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Text Animation Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "UIStudio by shivashanker",
    "Hero Section Text Effects",
    "Landing Page Animations",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Text Reveal Effect Live Preview | UIStudio",
    description:
      "Live interactive demo of UIStudio's Text Reveal component. Create smooth, staggered text animations for landing pages and modern UIs using React, Tailwind CSS, and Framer Motion.",
    url: "https://UIStudio.in/components/text-reveal/preview",
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
    title: "Text Reveal Effect Live Preview | UIStudio",
    description:
      "Check out UIStudio's Text Reveal component in action. Ideal for modern landing pages and hero sections, crafted with React, Tailwind CSS, and Framer Motion.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const text = `UIStudio is a beautifully designed component library built with Tailwind CSS and Motion. It helps developers build modern, animated UIs faster, with consistent styling and production-ready components.
`;

const Preview = () => {
  return (
    <LivePreviewComponent>
      <TextReveal
        staggerDelay={0.2}
        text={text}
        className="mx-auto max-w-3xl text-lg font-semibold"
      />
    </LivePreviewComponent>
  );
};

export default Preview;
