export const title = "Interactive Card Gallery";
export const routepoint = "interactive-card-gallery";
export const description = "Modern Interactive Card Gallery component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/interactive-card-gallery.json";

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

export const interactiveCardGalleryProps = [
  // Add component props here
];

export const democode = `import InteractiveCardGallery from '@/Components1/interactive-card-gallery';

export function InteractiveCardGalleryExample() {
  return (
    <InteractiveCardGallery />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const InteractiveCardGallery = () => {
  return (
    <div className="p-4">
      <p>Interactive Card Gallery component placeholder</p>
    </div>
  );
};

export default InteractiveCardGallery;
`;