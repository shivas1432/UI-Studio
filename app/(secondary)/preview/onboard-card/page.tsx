import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import OnboardCard from "@/app/(primary)/components/onboard-card/_components/onboardcard";

export const metadata: Metadata = {
  title: "Onboarding Card Live Preview | UIStudio",
  description:
    "Explore UIStudio's Onboarding Card component in this interactive live preview. Built with React, Tailwind CSS, and Framer Motion, this component streamlines user onboarding flows with engaging animations and clean UI. Perfect for SaaS apps, dashboards, and product tours.",
  keywords: [
    "Onboarding Card Preview",
    "User Onboarding Component",
    "React Onboarding UI",
    "UIStudio Onboarding Card",
    "Framer Motion Animations",
    "Tailwind CSS Onboarding",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Onboarding Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "UIStudio by shivashanker",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Onboarding Card Live Preview | UIStudio",
    description:
      "Live interactive demo of UIStudio's Onboarding Card component. Simplify user onboarding with smooth animations and responsive design built with React, Tailwind CSS, and Framer Motion.",
    url: "https://UIStudio.in/components/onboard-card/preview",
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
    title: "Onboarding Card Live Preview | UIStudio",
    description:
      "Experience UIStudio's Onboarding Card component in this live preview. Ideal for modern SaaS apps and user onboarding flows, crafted with React, Tailwind CSS, and Framer Motion.",
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
      <OnboardCard />
    </LivePreviewComponent>
  );
};

export default Preview;
