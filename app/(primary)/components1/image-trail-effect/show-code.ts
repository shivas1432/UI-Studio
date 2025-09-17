export const title = "Image Trail Effect";
export const routepoint = "image-trail-effect";
export const description = "Modern Image Trail Effect component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/image-trail-effect.json";

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

export const imageTrailEffectProps = [
  // Add component props here
];

export const democode = `import ImageTrailEffect from '@/Components1/image-trail-effect';

export function ImageTrailEffectExample() {
  return (
    <ImageTrailEffect />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ImageTrailEffect = () => {
  return (
    <div className="p-4">
      <p>Image Trail Effect component placeholder</p>
    </div>
  );
};

export default ImageTrailEffect;
`;