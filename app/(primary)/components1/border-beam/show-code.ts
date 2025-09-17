export const title = "Border Beam";
export const routepoint = "border-beam";
export const description = "Modern Border Beam component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/border-beam.json";

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

export const borderBeamProps = [
  // Add component props here
];

export const democode = `import BorderBeam from '@/Components1/border-beam';

export function BorderBeamExample() {
  return (
    <BorderBeam />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const BorderBeam = () => {
  return (
    <div className="p-4">
      <p>Border Beam component placeholder</p>
    </div>
  );
};

export default BorderBeam;
`;