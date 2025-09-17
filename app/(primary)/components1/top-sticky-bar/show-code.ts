export const title = "Top Sticky Bar";
export const routepoint = "top-sticky-bar";
export const description = "Modern Top Sticky Bar component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/top-sticky-bar.json";

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

export const topStickyBarProps = [
  // Add component props here
];

export const democode = `import TopStickyBar from '@/Components1/top-sticky-bar';

export function TopStickyBarExample() {
  return (
    <TopStickyBar />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const TopStickyBar = () => {
  return (
    <div className="p-4">
      <p>Top Sticky Bar component placeholder</p>
    </div>
  );
};

export default TopStickyBar;
`;