export const title = "Shine Button";
export const routepoint = "shine-button";
export const description = "Modern Shine Button component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/shine-button.json";

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

export const shineButtonProps = [
  // Add component props here
];

export const democode = `import ShineButton from '@/Components1/shine-button';

export function ShineButtonExample() {
  return (
    <ShineButton />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ShineButton = () => {
  return (
    <div className="p-4">
      <p>Shine Button component placeholder</p>
    </div>
  );
};

export default ShineButton;
`;