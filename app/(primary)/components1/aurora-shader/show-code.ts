export const title = "Aurora Shader";
export const routepoint = "aurora-shader";
export const description = "Modern Aurora Shader component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/aurora-shader.json";

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

export const auroraShaderProps = [
  // Add component props here
];

export const democode = `import AuroraShader from '@/Components1/aurora-shader';

export function AuroraShaderExample() {
  return (
    <AuroraShader />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const AuroraShader = () => {
  return (
    <div className="p-4">
      <p>Aurora Shader component placeholder</p>
    </div>
  );
};

export default AuroraShader;
`;