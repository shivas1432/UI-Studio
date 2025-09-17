export const title = "Ripple Loader";
export const routepoint = "ripple-loader";
export const description = "Modern Ripple Loader component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/ripple-loader.json";

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

export const rippleLoaderProps = [
  // Add component props here
];

export const democode = `import RippleLoader from '@/Components1/ripple-loader';

export function RippleLoaderExample() {
  return (
    <RippleLoader />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const RippleLoader = () => {
  return (
    <div className="p-4">
      <p>Ripple Loader component placeholder</p>
    </div>
  );
};

export default RippleLoader;
`;