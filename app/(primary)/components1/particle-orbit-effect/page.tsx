import React from "react";
import ParticleOrbitEffectPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Particle Orbit Effect | UIStudio",
  description: "UIStudio's Particle Orbit Effect component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Particle Orbit Effect Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Particle Orbit Effect with UIStudio's React component.",
    url: "https://UIStudio.in/components1/particle-orbit-effect",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Particle Orbit Effect Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Particle Orbit Effect component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ParticleOrbitEffectPreview />;
};

export default Page;