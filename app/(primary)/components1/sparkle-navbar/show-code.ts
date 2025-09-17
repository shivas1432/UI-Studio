export const title = "Sparkle Navbar";
export const routepoint = "sparkle-navbar";
export const description = "Modern Sparkle Navbar component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/sparkle-navbar.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

const packagescript = "react clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const sparkleNavbarProps = [
  // Add component props here
];

export const democode = `import SparkleNavbar from '@/Components1/sparkle-navbar';

export function SparkleNavbarExample() {
  return (
    <SparkleNavbar />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const SparkleNavbar = () => {
  return (
    <div className="p-4">
      <p>Sparkle Navbar component placeholder</p>
    </div>
  );
};

export default SparkleNavbar;
`;