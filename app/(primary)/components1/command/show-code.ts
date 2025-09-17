export const title = "Command";
export const routepoint = "command";
export const description = "Modern Command component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/command.json";

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

export const commandProps = [
  // Add component props here
];

export const democode = `import Command from '@/Components1/command';

export function CommandExample() {
  return (
    <Command />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Command = () => {
  return (
    <div className="p-4">
      <p>Command component placeholder</p>
    </div>
  );
};

export default Command;
`;