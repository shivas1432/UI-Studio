export const title = "Animated Bubble Particles";
export const routepoint = "animated-bubble-particles";
export const description = "Modern Animated Bubble Particles component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/animated-bubble-particles.json";

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

export const animatedBubbleParticlesProps = [
  // Add component props here
];

export const democode = `import AnimatedBubbleParticles from '@/Components1/animated-bubble-particles';

export function AnimatedBubbleParticlesExample() {
  return (
    <AnimatedBubbleParticles />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const AnimatedBubbleParticles = () => {
  return (
    <div className="p-4">
      <p>Animated Bubble Particles component placeholder</p>
    </div>
  );
};

export default AnimatedBubbleParticles;
`;