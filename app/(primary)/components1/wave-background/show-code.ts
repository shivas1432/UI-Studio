export const title = "Wave Background";
export const routepoint = "wave-background";
export const description = "Modern Wave Background component with sleek design.";

export const cliscript = "add https://UIStudio.in/registry/wave-background.json";

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

export const waveBackgroundProps = [
  // Add component props here
];

export const democode = `import WaveBackground from '@/Components1/wave-background';

export function WaveBackgroundExample() {
  return (
    <WaveBackground />
  )
}
`;

export const code = `// TODO: Add the actual component code here
"use client";
import React from "react";
import { cn } from "@/lib/utils";

const WaveBackground = () => {
  return (
    <div className="p-4">
      <p>Wave Background component placeholder</p>
    </div>
  );
};

export default WaveBackground;
`;