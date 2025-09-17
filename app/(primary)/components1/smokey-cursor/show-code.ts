export const title = "Smokey Cursor";
export const routepoint = "smokey-cursor";
export const description = "Modern Smokey Cursor component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/smokey-cursor.json";

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

export const smokeyCursorProps = [
  // Add component props here
];

export const democode = `import SmokeyCursor from '@/Components1/smokey-cursor';

export function SmokeyCursorExample() {
  return (
    <SmokeyCursor />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const SmokeyCursor = () => {
  return (
    <div className="p-4">
      <p>Smokey Cursor component placeholder</p>
    </div>
  );
};

export default SmokeyCursor;
`;