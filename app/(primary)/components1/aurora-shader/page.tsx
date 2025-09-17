import React from "react";
import AuroraShaderPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora Shader | UIStudio",
  description: "UIStudio's Aurora Shader component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Aurora Shader Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Aurora Shader with UIStudio's React component.",
    url: "https://UIStudio.in/components1/aurora-shader",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Shader Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Aurora Shader component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <AuroraShaderPreview />;
};

export default Page;