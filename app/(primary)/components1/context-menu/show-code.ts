export const title = "Context Menu";
export const routepoint = "context-menu";
export const description = "Modern Context Menu component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/context-menu.json";

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

export const contextMenuProps = [
  // Add component props here
];

export const democode = `import ContextMenu from '@/Components1/context-menu';

export function ContextMenuExample() {
  return (
    <ContextMenu />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ContextMenu = () => {
  return (
    <div className="p-4">
      <p>Context Menu component placeholder</p>
    </div>
  );
};

export default ContextMenu;
`;