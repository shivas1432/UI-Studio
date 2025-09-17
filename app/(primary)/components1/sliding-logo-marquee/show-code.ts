export const title = "Sliding Logo Marquee";
export const routepoint = "sliding-logo-marquee";
export const description = "Modern Sliding Logo Marquee component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/sliding-logo-marquee.json";

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

export const slidingLogoMarqueeProps = [
  // Add component props here
];

export const democode = `import SlidingLogoMarquee from '@/Components1/sliding-logo-marquee';

export function SlidingLogoMarqueeExample() {
  return (
    <SlidingLogoMarquee />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const SlidingLogoMarquee = () => {
  return (
    <div className="p-4">
      <p>Sliding Logo Marquee component placeholder</p>
    </div>
  );
};

export default SlidingLogoMarquee;
`;