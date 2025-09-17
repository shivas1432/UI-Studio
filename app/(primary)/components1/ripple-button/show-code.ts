export const title = "Ripple Button";
export const routepoint = "ripple-button";
export const description = "Modern Ripple Button component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/ripple-button.json";

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

export const rippleButtonProps = [
  // Add component props here
];

export const democode = `import RippleButton from '@/Components1/ripple-button';

export function RippleButtonExample() {
  return (
    <RippleButton />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const RippleButton = () => {
  return (
    <div className="p-4">
      <p>Ripple Button component placeholder</p>
    </div>
  );
};

export default RippleButton;
`;