export const title = "Hover Card";
export const routepoint = "hover-card";
export const description = "Modern Hover Card component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/hover-card.json";

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

export const hoverCardProps = [
  // Add component props here
];

export const democode = `import HoverCard from '@/Components1/hover-card';

export function HoverCardExample() {
  return (
    <HoverCard />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const HoverCard = () => {
  return (
    <div className="p-4">
      <p>Hover Card component placeholder</p>
    </div>
  );
};

export default HoverCard;
`;