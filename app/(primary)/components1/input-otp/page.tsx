import React from "react";
import InputOtpPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input Otp | UIStudio",
  description: "UIStudio's Input Otp component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Input Otp Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Input Otp with UIStudio's React component.",
    url: "https://UIStudio.in/components1/input-otp",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Input Otp Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Input Otp component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <InputOtpPreview />;
};

export default Page;