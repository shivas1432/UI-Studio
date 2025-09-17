export const title = "Trusted Users";
export const routepoint = "trusted-users";
export const description = "Modern Trusted Users component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/trusted-users.json";

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

export const trustedUsersProps = [
  // Add component props here
];

export const democode = `import TrustedUsers from '@/Components1/trusted-users';

export function TrustedUsersExample() {
  return (
    <TrustedUsers />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const TrustedUsers = () => {
  return (
    <div className="p-4">
      <p>Trusted Users component placeholder</p>
    </div>
  );
};

export default TrustedUsers;
`;