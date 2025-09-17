export const title = "Scroll Stack";
export const routepoint = "scroll-stack";
export const description = "Modern Scroll Stack component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/scroll-stack.json";

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

export const scrollStackProps = [
  // Add component props here
];

export const democode = `import ScrollStack from '@/Components1/scroll-stack';

export function ScrollStackExample() {
  return (
    <ScrollStack />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ScrollStack = () => {
  return (
    <div className="p-4">
      <p>Scroll Stack component placeholder</p>
    </div>
  );
};

export default ScrollStack;
`;