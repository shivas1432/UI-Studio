import React from "react";
import type { Metadata } from "next";
import Fraudcard from "./_components/preview";

export const metadata: Metadata = {
  title: "Fraud Detection | UIStudio",
  description:
    "UIStudio's Fraud Detection Card component allows developers to display fraud alerts, risk assessments, and suspicious activity indicators with clean and animated UI using React, Tailwind CSS, and Framer Motion. Ideal for fintech dashboards, admin panels, and security systems. Fully customizable, accessible, and easy to integrate into any React application.",
  keywords: [
    "Fraud Detection UI Component",
    "React Fraud Alert Card",
    "Risk Analysis UI",
    "Tailwind CSS Dashboard Cards",
    "UIStudio Components",
    "Suspicious Activity UI",
    "Fraud Detection Dashboard",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Dashboard Cards",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Fintech UI Components",
    "Developer Tools",
    "Admin Panel UI Components",
    "Fraud Alert Visualization",
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
      "Fraud Detection Card Component for React — Visual Risk Alerts UI | UIStudio",
    description:
      "Design clean and interactive fraud detection cards with UIStudio's React component. Perfect for fintech apps and dashboards. Smooth animations and accessible design using Tailwind CSS & Framer Motion.",
    url: "https://UIStudio.in/components/fraud-detection-card",
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
      "Fraud Detection Card Component for React — Visual Risk Alerts UI | UIStudio",
    description:
      "UIStudio's Fraud Detection Card component helps developers build interactive fraud alerts and risk analysis UI in React apps with TailwindCSS & Framer Motion.",
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
  return <Fraudcard />;
};

export default Page;
