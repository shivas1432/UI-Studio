export const title = "Orbit Card";
export const routepoint = "orbit-card";
export const description = "Modern Orbit Card component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/orbit-card.json";

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

export const orbitCardProps = [
  // Add component props here
];

export const democode = `import OrbitCard from '@/Components1/orbit-card';

export function OrbitCardExample() {
  return (
    <OrbitCard />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const OrbitCard = () => {
  return (
    <div className="p-4">
      <p>Orbit Card component placeholder</p>
    </div>
  );
};

export default OrbitCard;
`;