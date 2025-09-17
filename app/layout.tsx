import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import Provider from "@/provider/provider";
// import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UIStudio",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  keywords: [
    "UIStudio",
    "UI Library",
    "Component Library",
    "React Components",
    "Next.js",
    "Tailwind CSS",
    "Open Source",
    "Frontend",
    "Design System",
    "shivashanker",
    "UIStudio by Aman",
    "Copy and Paste Components",
    "Developer Tools",
    "Frontend Engineer",
    "Beautiful UI",
    "React UI Kit",
    "Free React Components",
    "Open Source UI Kit",
    "Tailwind UI Components",
    "Headless UI",
    "Reusable React Components",
    "UI Templates",
    "Accessible React Components",
    "Copy-Paste UI",
    "Next.js Component Library",
    "Open Source Developer Tools",
    "Frontend Design System",
    "Minimal UI Kit",
    "Clean React UI",
  ],
  authors: [{ name: "shivashanker", url: "https://shivashanker.com/projects" }],
  creator: "shivashanker",
  publisher: "shivashanker",
  openGraph: {
    title: "UIStudio",
    description:
      "Beautifully designed components you can copy and paste into your apps. Open Source. Customizable. Accessible.",
    url: "https://UIStudio.in",
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
    title: "UIStudio",
    description:
      "Open source component library built with accessibility and customization in mind.",
    images: ["https://UIStudio.in/UIStudio-ogimage-v2.png"],
    site: "@shivashanker",
    creator: "@shivashanker",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          {children}
          <Toaster />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
