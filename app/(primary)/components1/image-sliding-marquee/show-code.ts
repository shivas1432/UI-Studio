export const title = "Image Sliding Marquee";
export const routepoint = "image-sliding-marquee";
export const description = "Modern Image Sliding Marquee component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/image-sliding-marquee.json";

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

export const imageSlidingMarqueeProps = [
  // Add component props here
];

export const democode = `import ImageSlidingMarquee from '@/Components1/image-sliding-marquee';

export function ImageSlidingMarqueeExample() {
  return (
    <ImageSlidingMarquee />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ImageSlidingMarquee = () => {
  return (
    <div className="p-4">
      <p>Image Sliding Marquee component placeholder</p>
    </div>
  );
};

export default ImageSlidingMarquee;
`;