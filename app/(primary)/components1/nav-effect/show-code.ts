export const title = "Nav Effect";
export const routepoint = "nav-effect";
export const description = "Modern Nav Effect component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/nav-effect.json";

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

export const navEffectProps = [
  // Add component props here
];

export const democode = `import NavEffect from '@/Components1/nav-effect';

export function NavEffectExample() {
  return (
    <NavEffect />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const NavEffect = () => {
  return (
    <div className="p-4">
      <p>Nav Effect component placeholder</p>
    </div>
  );
};

export default NavEffect;
`;