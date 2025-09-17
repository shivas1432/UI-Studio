export const title = "Seasonal Hover Cards";
export const routepoint = "seasonal-hover-cards";
export const description = "Modern Seasonal Hover Cards component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/seasonal-hover-cards.json";

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

export const seasonalHoverCardsProps = [
  // Add component props here
];

export const democode = `import SeasonalHoverCards from '@/Components1/seasonal-hover-cards';

export function SeasonalHoverCardsExample() {
  return (
    <SeasonalHoverCards />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const SeasonalHoverCards = () => {
  return (
    <div className="p-4">
      <p>Seasonal Hover Cards component placeholder</p>
    </div>
  );
};

export default SeasonalHoverCards;
`;