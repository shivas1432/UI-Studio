export const title = "Magic Loader";
export const routepoint = "magic-loader";
export const description = "Modern Magic Loader component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/magic-loader.json";

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

export const magicLoaderProps = [
  // Add component props here
];

export const democode = `import MagicLoader from '@/Components1/magic-loader';

export function MagicLoaderExample() {
  return (
    <MagicLoader />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const MagicLoader = () => {
  return (
    <div className="p-4">
      <p>Magic Loader component placeholder</p>
    </div>
  );
};

export default MagicLoader;
`;