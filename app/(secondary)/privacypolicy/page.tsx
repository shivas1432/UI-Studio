import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PrivacyPolicyPage from "@/components/docs/privacypolicy";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | UIStudio",
  description:
    "Read UIStudio's Privacy Policy to understand how we collect, use, and protect your personal information when you use our open-source React components library built with Tailwind CSS and Framer Motion. Transparency, data protection, and user privacy are our priorities.",
  keywords: [
    "UIStudio Privacy Policy",
    "Privacy Policy",
    "Data Protection",
    "User Privacy",
    "UIStudio Data Usage",
    "Open Source UI Library Policy",
    "React Components Privacy",
    "Tailwind CSS UI Components",
    "UIStudio Documentation",
    "UIStudio by shivashanker",
    "Developer Tools Policy",
    "Frontend Design System Policy",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Privacy Policy | UIStudio — Open Source UI Components Library",
    description:
      "Learn how UIStudio collects, uses, and protects your data. Read our Privacy Policy to stay informed about data privacy when using UIStudio's React component library.",
    url: "https://UIStudio.in/privacy-policy",
    siteName: "UIStudio",
    images: [
      {
        url: "https://UIStudio.in/UIStudio-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "UIStudio Privacy Policy Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | UIStudio — Open Source UI Components Library",
    description:
      "Understand how UIStudio handles your data. Read our Privacy Policy for transparency on data collection, usage, and privacy practices.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "legal",
};

const PrivacyPolicy = () => {
  return (
    <main>
      <Navbar />
      <PrivacyPolicyPage />
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
