import React from "react";
import type { Metadata } from "next";
import { GiStrikingDiamonds } from "react-icons/gi";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import LivePreviewComponent from "@/components/layout/livepreview";
import SocialCard from "@/app/(primary)/components/social-card/_components/social-card";

export const metadata: Metadata = {
  title: "Social Card Live Preview | UIStudio",
  description:
    "Interact with UIStudio's Social Card component in this live preview. Built with React, Tailwind CSS, and Framer Motion, this component showcases personal profiles, creator bios, and social links with sleek animations. Ideal for portfolios, landing pages, and personal websites.",
  keywords: [
    "Social Card Preview",
    "Creator Profile UI",
    "React Social Component",
    "UIStudio Social Card",
    "Tailwind CSS Profile Card",
    "Framer Motion Animations",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Profile Card Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "UIStudio by shivashanker",
    "Personal Portfolio UI",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Social Card Live Preview | UIStudio",
    description:
      "Live interactive demo of UIStudio's Social Card component. Showcase creator profiles and social links with a sleek, animated UI built using React, Tailwind CSS, and Framer Motion.",
    url: "https://UIStudio.in/components/social-card/preview",
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
    title: "Social Card Live Preview | UIStudio",
    description:
      "See UIStudio's Social Card component in action with this live preview. Perfect for portfolios, creator bios, and personal websites.",
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
      <SocialCard
        image="/pfp.png"
        title="Social Card"
        name="creator.exe"
        pitch="Explore my latest projects and connect for collaboration opportunities"
        icon={<GiStrikingDiamonds />}
        buttons={[
          {
            label: "Twitter",
            icon: <FaXTwitter />,
            link: "https://x.com/shivashanker",
          },
          {
            label: "Github",
            icon: <FaGithub />,
            link: "https://github.com/shivashanker",
          },
        ]}
      />
    </LivePreviewComponent>
  );
};

export default Preview;
