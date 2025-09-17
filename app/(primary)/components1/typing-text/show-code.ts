export const title = "Typing Text";
export const routepoint = "typing-text";
export const description = "Modern Typing Text component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/typing-text.json";

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

export const typingTextProps = [
  // Add component props here
];

export const democode = `import TypingText from '@/Components1/typing-text';

export function TypingTextExample() {
  return (
    <TypingText />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const TypingText = () => {
  return (
    <div className="p-4">
      <p>Typing Text component placeholder</p>
    </div>
  );
};

export default TypingText;
`;