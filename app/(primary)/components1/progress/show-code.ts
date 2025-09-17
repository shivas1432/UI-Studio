export const title = "Progress";
export const routepoint = "progress";
export const description = "Modern Progress component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/progress.json";

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

export const progressProps = [
  // Add component props here
];

export const democode = `import Progress from '@/Components1/progress';

export function ProgressExample() {
  return (
    <Progress />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Progress = () => {
  return (
    <div className="p-4">
      <p>Progress component placeholder</p>
    </div>
  );
};

export default Progress;
`;