export const title = "Pagination";
export const routepoint = "pagination";
export const description = "Modern Pagination component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/pagination.json";

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

export const paginationProps = [
  // Add component props here
];

export const democode = `import Pagination from '@/Components1/pagination';

export function PaginationExample() {
  return (
    <Pagination />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Pagination = () => {
  return (
    <div className="p-4">
      <p>Pagination component placeholder</p>
    </div>
  );
};

export default Pagination;
`;