import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import BotDetection from "@/app/(primary)/components/bot-detection/_components/bot-detection";

export const metadata: Metadata = {
  title: "Bot Detection Card Live Preview | UIStudio",
  description:
    "Preview UIStudio's Bot Detection Card component in an interactive live demo. Designed with React, Tailwind CSS, and Framer Motion, this component visually indicates security checks, bot detection statuses, and enhances user trust. Easily copy and integrate into your SaaS apps.",
  keywords: [
    "Bot Detection Card Preview",
    "Security Component Demo",
    "React Bot Detection UI",
    "UIStudio Security Components",
    "Framer Motion Animation",
    "Tailwind CSS Security UI",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Security Card Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "UIStudio by shivashanker",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Bot Detection Card Live Preview | UIStudio",
    description:
      "Interactive live demo of UIStudio's Bot Detection Card component. Built with React, Tailwind CSS, and Framer Motion to enhance user security and UI feedback.",
    url: "https://UIStudio.in/components/bot-detection/preview",
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
    title: "Bot Detection Card Live Preview | UIStudio",
    description:
      "See UIStudio's Bot Detection Card component in action with this live interactive preview. Smooth animations and responsive design included.",
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
      <BotDetection />
    </LivePreviewComponent>
  );
};

export default Preview;
