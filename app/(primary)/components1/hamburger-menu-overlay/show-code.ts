export const title = "Hamburger Menu Overlay";
export const routepoint = "hamburger-menu-overlay";
export const description = "Modern Hamburger Menu Overlay component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/hamburger-menu-overlay.json";

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

export const hamburgerMenuOverlayProps = [
  // Add component props here
];

export const democode = `import HamburgerMenuOverlay from '@/Components1/hamburger-menu-overlay';

export function HamburgerMenuOverlayExample() {
  return (
    <HamburgerMenuOverlay />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const HamburgerMenuOverlay = () => {
  return (
    <div className="p-4">
      <p>Hamburger Menu Overlay component placeholder</p>
    </div>
  );
};

export default HamburgerMenuOverlay;
`;