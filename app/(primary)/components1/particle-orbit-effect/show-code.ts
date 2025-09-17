export const title = "Particle Orbit Effect";
export const routepoint = "particle-orbit-effect";
export const description = "Modern Particle Orbit Effect component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/particle-orbit-effect.json";

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

export const particleOrbitEffectProps = [
  // Add component props here
];

export const democode = `import ParticleOrbitEffect from '@/Components1/particle-orbit-effect';

export function ParticleOrbitEffectExample() {
  return (
    <ParticleOrbitEffect />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ParticleOrbitEffect = () => {
  return (
    <div className="p-4">
      <p>Particle Orbit Effect component placeholder</p>
    </div>
  );
};

export default ParticleOrbitEffect;
`;