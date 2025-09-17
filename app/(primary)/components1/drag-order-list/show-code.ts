export const title = "Drag Order List";
export const routepoint = "drag-order-list";
export const description = "Modern Drag Order List component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/drag-order-list.json";

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

export const dragOrderListProps = [
  // Add component props here
];

export const democode = `import DragOrderList from '@/Components1/drag-order-list';

export function DragOrderListExample() {
  return (
    <DragOrderList />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const DragOrderList = () => {
  return (
    <div className="p-4">
      <p>Drag Order List component placeholder</p>
    </div>
  );
};

export default DragOrderList;
`;