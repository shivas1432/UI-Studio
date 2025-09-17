import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Component Preview | UIStudio",
  description:
    "Live preview of open-source UI components from UIStudio. Built with React and Tailwind CSS, these components are customizable, accessible, and production-ready.",
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
