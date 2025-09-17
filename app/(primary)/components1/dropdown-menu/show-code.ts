export const title = "Dropdown Menu";
export const routepoint = "dropdown-menu";
export const description = "Modern Dropdown Menu component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/dropdown-menu.json";

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

export const dropdownMenuProps = [
  // Add component props here
];

export const democode = `import DropdownMenu from '@/Components1/dropdown-menu';

export function DropdownMenuExample() {
  return (
    <DropdownMenu />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const DropdownMenu = () => {
  return (
    <div className="p-4">
      <p>Dropdown Menu component placeholder</p>
    </div>
  );
};

export default DropdownMenu;
`;