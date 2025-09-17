import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | UIStudio",
  description:
    "Explore the official UIStudio documentation to learn how to install, customize, and build modern, accessible React components using Tailwind CSS and Framer Motion. Get started with setup guides, usage instructions, and best practices for frontend developers.",
  keywords: [
    "UIStudio Documentation",
    "React Component Library Guide",
    "Tailwind CSS UI Library",
    "Open Source UI Components",
    "UIStudio Docs",
    "Frontend Design System",
    "Reusable React Components",
    "Framer Motion UI Components",
    "Accessible UI Components",
    "UIStudio by shivashanker",
    "Developer Tools",
    "Next.js UI Library",
    "Copy Paste UI Components",
    "Modern UI Kit Documentation",
    "Frontend Developer Resources",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "UIStudio Documentation — React Component Library Guide | UIStudio",
    description:
      "Browse UIStudio's official documentation to integrate open-source React components with Tailwind CSS and Framer Motion. Learn setup, usage, and best practices.",
    url: "https://UIStudio.in/docs",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UIStudio Documentation — React Component Library Guide | UIStudio",
    description:
      "Official UIStudio documentation for integrating React UI components with Tailwind CSS. Find installation guides, usage patterns, and developer resources.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function DocsPage() {
  redirect("/docs/introduction");
}
