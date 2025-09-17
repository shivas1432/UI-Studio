export const title = "Shiny Text";
export const routepoint = "shiny-text";
export const description = "Modern Shiny Text component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/shiny-text.json";

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

export const shinyTextProps = [
  // Add component props here
];

export const democode = `import ShinyText from '@/Components1/shiny-text';

export function ShinyTextExample() {
  return (
    <ShinyText />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ShinyText = () => {
  return (
    <div className="p-4">
      <p>Shiny Text component placeholder</p>
    </div>
  );
};

export default ShinyText;
`;