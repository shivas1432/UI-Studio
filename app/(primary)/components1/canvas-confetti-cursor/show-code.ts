export const title = "Canvas Confetti Cursor";
export const routepoint = "canvas-confetti-cursor";
export const description = "Modern Canvas Confetti Cursor component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/canvas-confetti-cursor.json";

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

export const canvasConfettiCursorProps = [
  // Add component props here
];

export const democode = `import CanvasConfettiCursor from '@/Components1/canvas-confetti-cursor';

export function CanvasConfettiCursorExample() {
  return (
    <CanvasConfettiCursor />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const CanvasConfettiCursor = () => {
  return (
    <div className="p-4">
      <p>Canvas Confetti Cursor component placeholder</p>
    </div>
  );
};

export default CanvasConfettiCursor;
`;