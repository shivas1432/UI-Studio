export const title = "Animated Ocean Waves";
export const routepoint = "animated-ocean-waves";
export const description = "Modern Animated Ocean Waves component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/animated-ocean-waves.json";

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

export const animatedOceanWavesProps = [
  // Add component props here
];

export const democode = `import AnimatedOceanWaves from '@/Components1/animated-ocean-waves';

export function AnimatedOceanWavesExample() {
  return (
    <AnimatedOceanWaves />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const AnimatedOceanWaves = () => {
  return (
    <div className="p-4">
      <p>Animated Ocean Waves component placeholder</p>
    </div>
  );
};

export default AnimatedOceanWaves;
`;