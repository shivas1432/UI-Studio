export const title = "3D Perspective Card";
export const routepoint = "3d-perspective-card";
export const description = "Modern 3D Perspective Card component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/3d-perspective-card.json";

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

export const threeDPerspectiveCard = [
  // Add component props here
];

export const democode = `import ThreeDPerspective Card from '@/Components1/3d-perspective-card';

export function ThreeDPerspective CardExample() {
  return (
    <ThreeDPerspective Card />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ThreeDPerspective Card = () => {
  return (
    <div className="p-4">
      <p>3D Perspective Card component placeholder</p>
    </div>
  );
};

export default ThreeDPerspectiveCard;
`;