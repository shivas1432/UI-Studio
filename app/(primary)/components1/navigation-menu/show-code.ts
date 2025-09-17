export const title = "Navigation Menu";
export const routepoint = "navigation-menu";
export const description = "Modern Navigation Menu component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/navigation-menu.json";

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

export const navigationMenuProps = [
  // Add component props here
];

export const democode = `import NavigationMenu from '@/Components1/navigation-menu';

export function NavigationMenuExample() {
  return (
    <NavigationMenu />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const NavigationMenu = () => {
  return (
    <div className="p-4">
      <p>Navigation Menu component placeholder</p>
    </div>
  );
};

export default NavigationMenu;
`;