export const title = "Stripes Background";
export const routepoint = "stripes-background";
export const description = "Modern Stripes Background component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/stripes-background.json";

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

export const stripesBackgroundProps = [
  // Add component props here
];

export const democode = `import StripesBackground from '@/Components1/stripes-background';

export function StripesBackgroundExample() {
  return (
    <StripesBackground />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const StripesBackground = () => {
  return (
    <div className="p-4">
      <p>Stripes Background component placeholder</p>
    </div>
  );
};

export default StripesBackground;
`;