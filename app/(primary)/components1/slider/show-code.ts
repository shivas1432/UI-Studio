export const title = "Slider";
export const routepoint = "slider";
export const description = "Modern Slider component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/slider.json";

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

export const sliderProps = [
  // Add component props here
];

export const democode = `import Slider from '@/Components1/slider';

export function SliderExample() {
  return (
    <Slider />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Slider = () => {
  return (
    <div className="p-4">
      <p>Slider component placeholder</p>
    </div>
  );
};

export default Slider;
`;