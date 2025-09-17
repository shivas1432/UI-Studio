export const title = "Sparkle Particles";
export const routepoint = "sparkle-particles";
export const description = "Modern Sparkle Particles component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/sparkle-particles.json";

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

export const sparkleParticlesProps = [
  // Add component props here
];

export const democode = `import SparkleParticles from '@/Components1/sparkle-particles';

export function SparkleParticlesExample() {
  return (
    <SparkleParticles />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const SparkleParticles = () => {
  return (
    <div className="p-4">
      <p>Sparkle Particles component placeholder</p>
    </div>
  );
};

export default SparkleParticles;
`;