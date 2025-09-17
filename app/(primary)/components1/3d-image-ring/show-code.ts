export const title = "3D Image Ring";
export const routepoint = "3d-image-ring";
export const description = "Modern 3D Image Ring component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/3d-image-ring.json";

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

export const threeDImage Ring = [
  // Add component props here
];

export const democode = `import ThreeDImage Ring from '@/Components1/3d-image-ring';

export function ThreeDImage RingExample() {
  return (
    <ThreeDImage Ring />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ThreeDImage Ring = () => {
  return (
    <div className="p-4">
      <p>3D Image Ring component placeholder</p>
    </div>
  );
};

export default ThreeDImage Ring;
`;