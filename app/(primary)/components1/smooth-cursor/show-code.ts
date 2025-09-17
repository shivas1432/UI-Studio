export const title = "Smooth Cursor";
export const routepoint = "smooth-cursor";
export const description = "Modern Smooth Cursor component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/smooth-cursor.json";

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

export const smoothCursorProps = [
  // Add component props here
];

export const democode = `import SmoothCursor from '@/Components1/smooth-cursor';

export function SmoothCursorExample() {
  return (
    <SmoothCursor />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const SmoothCursor = () => {
  return (
    <div className="p-4">
      <p>Smooth Cursor component placeholder</p>
    </div>
  );
};

export default SmoothCursor;
`;