import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import VaultLock from "@/app/(primary)/components/vault-lock/_components/vault-lock";

export const metadata: Metadata = {
  title: "Vault Lock Component Live Preview | UIStudio",
  description:
    "Experience UIStudio's Vault Lock component in this interactive live preview. Built with React, Tailwind CSS, and Framer Motion, this component visually represents secure access states, lock/unlock actions, and encryption mechanisms. Ideal for authentication flows, security dashboards, and SaaS apps.",
  keywords: [
    "Vault Lock Component Preview",
    "Secure Access UI",
    "React Security Component",
    "UIStudio Vault Lock",
    "Tailwind CSS Security UI",
    "Framer Motion Lock Animation",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Security Component Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "UIStudio by shivashanker",
    "Authentication UI Patterns",
    "Secure Access UI Component",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Vault Lock Component Live Preview | UIStudio",
    description:
      "Live demo of UIStudio's Vault Lock component. Showcase secure access states and lock animations with a modern, responsive UI built using React, Tailwind CSS, and Framer Motion.",
    url: "https://UIStudio.in/components/vault-lock/preview",
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
    title: "Vault Lock Component Live Preview | UIStudio",
    description:
      "See UIStudio's Vault Lock component in action with this interactive preview. Perfect for authentication flows and secure access UIs, crafted with React, Tailwind CSS, and Framer Motion.",
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
      <VaultLock />
    </LivePreviewComponent>
  );
};

export default Preview;
