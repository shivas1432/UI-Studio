export const title = "Carousel";
export const routepoint = "carousel";
export const description = "Modern Carousel component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/carousel.json";

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

export const carouselProps = [
  // Add component props here
];

export const democode = `import Carousel from '@/Components1/carousel';

export function CarouselExample() {
  return (
    <Carousel />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Carousel = () => {
  return (
    <div className="p-4">
      <p>Carousel component placeholder</p>
    </div>
  );
};

export default Carousel;
`;