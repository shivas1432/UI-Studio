export const title = "Button";
export const routepoint = "button";
export const description = "Modern Button component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/button.json";

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

export const buttonProps = [
  // Add component props here
];

export const democode = `import Button from '@/Components1/button';

export function ButtonExample() {
  return (
    <Button />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Button = () => {
  return (
    <div className="p-4">
      <p>Button component placeholder</p>
    </div>
  );
};

export default Button;
`;