export const title = "Code Hover Cards";
export const routepoint = "code-hover-cards";
export const description = "Modern Code Hover Cards component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/code-hover-cards.json";

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

export const codeHoverCardsProps = [
  // Add component props here
];

export const democode = `import CodeHoverCards from '@/Components1/code-hover-cards';

export function CodeHoverCardsExample() {
  return (
    <CodeHoverCards />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const CodeHoverCards = () => {
  return (
    <div className="p-4">
      <p>Code Hover Cards component placeholder</p>
    </div>
  );
};

export default CodeHoverCards;
`;