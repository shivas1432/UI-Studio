export const title = "Tabs";
export const routepoint = "tabs";
export const description = "Modern Tabs component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/tabs.json";

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

export const tabsProps = [
  // Add component props here
];

export const democode = `import Tabs from '@/Components1/tabs';

export function TabsExample() {
  return (
    <Tabs />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Tabs = () => {
  return (
    <div className="p-4">
      <p>Tabs component placeholder</p>
    </div>
  );
};

export default Tabs;
`;