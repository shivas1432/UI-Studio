export const title = "Animated Range Input";
export const routepoint = "animated-range-input";
export const description = "Modern Animated Range Input component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/animated-range-input.json";

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

export const animatedRangeInputProps = [
  // Add component props here
];

export const democode = `import AnimatedRangeInput from '@/Components1/animated-range-input';

export function AnimatedRangeInputExample() {
  return (
    <AnimatedRangeInput />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const AnimatedRangeInput = () => {
  return (
    <div className="p-4">
      <p>Animated Range Input component placeholder</p>
    </div>
  );
};

export default AnimatedRangeInput;
`;