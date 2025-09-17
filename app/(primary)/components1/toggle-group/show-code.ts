export const title = "Toggle Group";
export const routepoint = "toggle-group";
export const description = "Modern Toggle Group component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/toggle-group.json";

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

export const toggleGroupProps = [
  // Add component props here
];

export const democode = `import ToggleGroup from '@/Components1/toggle-group';

export function ToggleGroupExample() {
  return (
    <ToggleGroup />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ToggleGroup = () => {
  return (
    <div className="p-4">
      <p>Toggle Group component placeholder</p>
    </div>
  );
};

export default ToggleGroup;
`;