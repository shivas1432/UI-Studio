export const title = "Resizable";
export const routepoint = "resizable";
export const description = "Modern Resizable component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/resizable.json";

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

export const resizableProps = [
  // Add component props here
];

export const democode = `import Resizable from '@/Components1/resizable';

export function ResizableExample() {
  return (
    <Resizable />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Resizable = () => {
  return (
    <div className="p-4">
      <p>Resizable component placeholder</p>
    </div>
  );
};

export default Resizable;
`;