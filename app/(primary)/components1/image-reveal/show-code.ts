export const title = "Image Reveal";
export const routepoint = "image-reveal";
export const description = "Modern Image Reveal component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/image-reveal.json";

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

export const imageRevealProps = [
  // Add component props here
];

export const democode = `import ImageReveal from '@/Components1/image-reveal';

export function ImageRevealExample() {
  return (
    <ImageReveal />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ImageReveal = () => {
  return (
    <div className="p-4">
      <p>Image Reveal component placeholder</p>
    </div>
  );
};

export default ImageReveal;
`;