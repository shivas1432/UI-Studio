export const title = "Scroll Area";
export const routepoint = "scroll-area";
export const description = "Modern Scroll Area component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/scroll-area.json";

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

export const scrollAreaProps = [
  // Add component props here
];

export const democode = `import ScrollArea from '@/Components1/scroll-area';

export function ScrollAreaExample() {
  return (
    <ScrollArea />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ScrollArea = () => {
  return (
    <div className="p-4">
      <p>Scroll Area component placeholder</p>
    </div>
  );
};

export default ScrollArea;
`;