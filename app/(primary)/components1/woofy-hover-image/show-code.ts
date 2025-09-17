export const title = "Woofy Hover Image";
export const routepoint = "woofy-hover-image";
export const description = "Modern Woofy Hover Image component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/woofy-hover-image.json";

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

export const woofyHoverImageProps = [
  // Add component props here
];

export const democode = `import WoofyHoverImage from '@/Components1/woofy-hover-image';

export function WoofyHoverImageExample() {
  return (
    <WoofyHoverImage />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const WoofyHoverImage = () => {
  return (
    <div className="p-4">
      <p>Woofy Hover Image component placeholder</p>
    </div>
  );
};

export default WoofyHoverImage;
`;