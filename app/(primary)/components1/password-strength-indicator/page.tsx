import React from "react";
import PasswordStrengthIndicatorPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Strength Indicator | UIStudio",
  description: "UIStudio's Password Strength Indicator component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Password Strength Indicator Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Password Strength Indicator with UIStudio's React component.",
    url: "https://UIStudio.in/components1/password-strength-indicator",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Password Strength Indicator Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Password Strength Indicator component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <PasswordStrengthIndicatorPreview />;
};

export default Page;