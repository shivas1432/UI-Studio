import React from "react";
import TeamCarouselPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Carousel | UIStudio",
  description: "UIStudio's Team Carousel component with modern design using React, Tailwind CSS, and Framer Motion.",
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Team Carousel Component for React - Modern UI/UX | UIStudio",
    description: "Build stunning Team Carousel with UIStudio's React component.",
    url: "https://UIStudio.in/components1/team-carousel",
    siteName: "UIStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Carousel Component for React - Modern UI/UX | UIStudio",
    description: "UIStudio's Team Carousel component enables modern, accessible components.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <TeamCarouselPreview />;
};

export default Page;