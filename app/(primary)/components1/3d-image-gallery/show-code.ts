export const title = "3D Image Gallery";
export const routepoint = "3d-image-gallery";
export const description = "Modern 3D Image Gallery component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/3d-image-gallery.json";

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

export const threeDImage Gallery = [
  // Add component props here
];

export const democode = `import ThreeDImage Gallery from '@/Components1/3d-image-gallery';

export function ThreeDImage GalleryExample() {
  return (
    <ThreeDImage Gallery />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ThreeDImage Gallery = () => {
  return (
    <div className="p-4">
      <p>3D Image Gallery component placeholder</p>
    </div>
  );
};

export default ThreeDImage Gallery;
`;