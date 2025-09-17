import React from "react";
import TermsOfServicePage from "@/components/docs/termsofservice";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service | UIStudio",
  description:
    "Review UIStudio's Terms of Service to understand your rights, responsibilities, and the rules for using our open-source React component library built with Tailwind CSS and Framer Motion. Ensure proper usage and compliance while integrating UIStudio components into your projects.",
  keywords: [
    "UIStudio Terms of Service",
    "Terms of Service",
    "Usage Policy",
    "Open Source UI Components License",
    "UIStudio Documentation",
    "React Component Library Terms",
    "Tailwind CSS UI Components",
    "Developer Tools Usage Terms",
    "Frontend Design System Terms",
    "UIStudio by shivashanker",
    "Component Library Usage Rights",
    "UIStudio Legal Policy",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Terms of Service | UIStudio — Open Source UI Components Library",
    description:
      "Understand the rules, rights, and responsibilities for using UIStudio's open-source React component library. Read our Terms of Service for detailed guidelines.",
    url: "https://UIStudio.in/terms-of-service",
    siteName: "UIStudio",
    images: [
      {
        url: "https://UIStudio.in/UIStudio-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "UIStudio Terms of Service Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | UIStudio — Open Source UI Components Library",
    description:
      "Review UIStudio's Terms of Service to understand the guidelines and responsibilities when using our open-source React components.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "legal",
};

const TermsOfService = () => {
  return (
    <main>
      <Navbar />
      <TermsOfServicePage />
      <Footer />
    </main>
  );
};

export default TermsOfService;
