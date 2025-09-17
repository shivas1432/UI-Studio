export const title = "Confetti Button";
export const routepoint = "confetti-button";
export const description = "Modern Confetti Button component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/confetti-button.json";

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

export const confettiButtonProps = [
  // Add component props here
];

export const democode = `import ConfettiButton from '@/Components1/confetti-button';

export function ConfettiButtonExample() {
  return (
    <ConfettiButton />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const ConfettiButton = () => {
  return (
    <div className="p-4">
      <p>Confetti Button component placeholder</p>
    </div>
  );
};

export default ConfettiButton;
`;