export const title = "Scroll List";
export const routepoint = "scroll-list";
export const description = "Modern Scroll List component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/scroll-list.json";

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

export const scrollListProps = [
  // Add component props here
];

export const democode = `import ScrollList from '@/Components1/scroll-list';

export function ScrollListExample() {
  return (
    <ScrollList />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ScrollList = () => {
  return (
    <div className="p-4">
      <p>Scroll List component placeholder</p>
    </div>
  );
};

export default ScrollList;
`;