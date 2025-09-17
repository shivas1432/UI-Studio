import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import SecurityCard from "@/app/(primary)/components/security-card/_components/security-card";

export const metadata: Metadata = {
  title: "Security Card Live Preview | UIStudio",
  description:
    "Preview UIStudio's Security Card component in an interactive live demo. Built with React, Tailwind CSS, and Framer Motion, this component visually represents security features like encryption, authentication, and verification statuses. Ideal for SaaS dashboards and product security sections.",
  keywords: [
    "Security Card Preview",
    "React Security Components",
    "UIStudio Security Card",
    "Framer Motion Security UI",
    "Tailwind CSS Security UI",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Security Component",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "UIStudio by shivashanker",
    "Product Security UI",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Security Card Live Preview | UIStudio",
    description:
      "Live demo of UIStudio's Security Card component. Visually represent encryption, authentication, and security checks with smooth animations and clean UI.",
    url: "https://UIStudio.in/components/security-card/preview",
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
    title: "Security Card Live Preview | UIStudio",
    description:
      "See UIStudio's Security Card component in action with this live interactive preview. Built using React, Tailwind CSS, and Framer Motion.",
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
      <SecurityCard />
    </LivePreviewComponent>
  );
};

export default Preview;
