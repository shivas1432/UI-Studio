export const title = "Particles Background";
export const routepoint = "particles-background";
export const description = "Modern Particles Background component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/particles-background.json";

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

export const particlesBackgroundProps = [
  // Add component props here
];

export const democode = `import ParticlesBackground from '@/Components1/particles-background';

export function ParticlesBackgroundExample() {
  return (
    <ParticlesBackground />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ParticlesBackground = () => {
  return (
    <div className="p-4">
      <p>Particles Background component placeholder</p>
    </div>
  );
};

export default ParticlesBackground;
`;