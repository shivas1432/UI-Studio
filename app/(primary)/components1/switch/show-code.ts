export const title = "Switch";
export const routepoint = "switch";
export const description = "Modern Switch component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/switch.json";

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

export const switchProps = [
  // Add component props here
];

export const democode = `import Switch from '@/Components1/switch';

export function SwitchExample() {
  return (
    <Switch />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Switch = () => {
  return (
    <div className="p-4">
      <p>Switch component placeholder</p>
    </div>
  );
};

export default Switch;
`;