import TailwindInstallationPage from "@/components/docs/tailwindinstallationpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Install Tailwind CSS | UIStudio",
  description:
    "Set up Tailwind CSS in your UIStudio project with this detailed installation guide. Learn how to configure Tailwind, optimize it for React components, and start building responsive, modern UIs with ease.",
  keywords: [
    "Tailwind CSS Installation",
    "Setup Tailwind CSS UIStudio",
    "Tailwind CSS Next.js Guide",
    "Tailwind Configuration",
    "Responsive UI with Tailwind",
    "UIStudio Tailwind Setup",
    "Frontend Design System",
    "UIStudio Documentation",
    "React Tailwind Integration",
    "UI Library Tailwind CSS",
    "Developer Tools",
    "UIStudio by shivashanker",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Next.js Tailwind Setup",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "Install Tailwind CSS for UIStudio — Full Setup Guide | UIStudio Docs",
    description:
      "Follow this step-by-step guide to install and configure Tailwind CSS for your UIStudio project. Build beautiful, responsive UIs with React and Tailwind.",
    url: "https://UIStudio.in/docs/tailwind-installation",
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
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Install Tailwind CSS for UIStudio — Full Setup Guide | UIStudio Docs",
    description:
      "Learn how to install Tailwind CSS for UIStudio with this easy-to-follow guide. Configure Tailwind with React to start building modern, responsive UIs.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};
const TailwindInstallation = () => {
  return <TailwindInstallationPage />;
};

export default TailwindInstallation;
