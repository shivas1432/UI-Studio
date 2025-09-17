export const title = "Typewriter Input";
export const routepoint = "typewriter-input";
export const description = "Modern Typewriter Input component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/typewriter-input.json";

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

export const typewriterInputProps = [
  // Add component props here
];

export const democode = `import TypewriterInput from '@/Components1/typewriter-input';

export function TypewriterInputExample() {
  return (
    <TypewriterInput />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const TypewriterInput = () => {
  return (
    <div className="p-4">
      <p>Typewriter Input component placeholder</p>
    </div>
  );
};

export default TypewriterInput;
`;