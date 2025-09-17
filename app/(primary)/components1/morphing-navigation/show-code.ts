export const title = "Morphing Navigation";
export const routepoint = "morphing-navigation";
export const description = "Modern Morphing Navigation component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/morphing-navigation.json";

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

export const morphingNavigationProps = [
  // Add component props here
];

export const democode = `import MorphingNavigation from '@/Components1/morphing-navigation';

export function MorphingNavigationExample() {
  return (
    <MorphingNavigation />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const MorphingNavigation = () => {
  return (
    <div className="p-4">
      <p>Morphing Navigation component placeholder</p>
    </div>
  );
};

export default MorphingNavigation;
`;