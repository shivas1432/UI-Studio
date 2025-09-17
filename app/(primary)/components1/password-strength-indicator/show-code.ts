export const title = "Password Strength Indicator";
export const routepoint = "password-strength-indicator";
export const description = "Modern Password Strength Indicator component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/password-strength-indicator.json";

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

export const passwordStrengthIndicatorProps = [
  // Add component props here
];

export const democode = `import PasswordStrengthIndicator from '@/Components1/password-strength-indicator';

export function PasswordStrengthIndicatorExample() {
  return (
    <PasswordStrengthIndicator />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const PasswordStrengthIndicator = () => {
  return (
    <div className="p-4">
      <p>Password Strength Indicator component placeholder</p>
    </div>
  );
};

export default PasswordStrengthIndicator;
`;