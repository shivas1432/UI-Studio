export const title = "Scroll Timeline";
export const routepoint = "scroll-timeline";
export const description = "Modern Scroll Timeline component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/scroll-timeline.json";

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

export const scrollTimelineProps = [
  // Add component props here
];

export const democode = `import ScrollTimeline from '@/Components1/scroll-timeline';

export function ScrollTimelineExample() {
  return (
    <ScrollTimeline />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ScrollTimeline = () => {
  return (
    <div className="p-4">
      <p>Scroll Timeline component placeholder</p>
    </div>
  );
};

export default ScrollTimeline;
`;