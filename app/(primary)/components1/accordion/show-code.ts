export const title = "Accordion";
export const routepoint = "accordion";
export const description = "Modern Accordion component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/accordion.json";

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

export const accordionProps = [
  // Add component props here
];

export const democode = `import Accordion from '@/Components1/accordion';

export function AccordionExample() {
  return (
    <Accordion />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Accordion = () => {
  return (
    <div className="p-4">
      <p>Accordion component placeholder</p>
    </div>
  );
};

export default Accordion;
`;