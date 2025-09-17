"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  eliteItems, 
  introItems, 
  primaryItems,
  threeDComponents,
  animationComponents,
  backgroundComponents,
  interactiveComponents,
  uiComponents,
  scrollComponents,
  // ADD COMPONENTS1 IMPORTS
  components1ThreeDComponents,
  components1AnimationComponents,
  components1BackgroundComponents,
  components1InteractiveComponents,
  components1UiComponents,
  components1ScrollComponents
} from "@/contants";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import TextShimmer from "@/app/(primary)/components/text-shimmer/_components/text-shimmer";
import Anchor from "../ui/anchor-single";
import { ScrollArea } from "../ui/scroll-area";
import { MyIcon } from "../icons/logo";

const NavbarDrawer = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const sortedEliteItems = [...eliteItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <Sheet>
      <SheetTrigger>
        <HiOutlineMenuAlt2 className="h-10 w-10 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-neutral-900" />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-2">
        <SheetHeader>
          <div className="ml-1 mt-2 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <MyIcon className="h-5 w-5 text-black dark:text-white" />
              <span className="text-xl font-bold">UI Studio</span>
            </Link>
          </div>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <ScrollArea className="flex h-[calc(100vh-10rem)] w-full flex-col gap-4 py-2">
            <div className="flex flex-col gap-6 pr-6">
              
              {/* Getting Started */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
                  Getting Started
                </div>
                <div className="grid gap-1">
                  {introItems.map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      {item.name}
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* Featured Components */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
                  Featured Components
                </div>
                <div className="grid gap-1">
                  {sortedEliteItems.map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      {item.name}
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* Basic Components */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
                  Basic Components
                </div>
                <div className="grid gap-1">
                  {sortedPrimaryItems.map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      {item.name}
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* ORIGINAL COMPONENTS */}

              {/* 3D Components */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
                  3D Components
                </div>
                <div className="grid gap-1">
                  {threeDComponents.slice(0, 5).map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      {item.name}
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* Animation Components */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
                  Animations
                </div>
                <div className="grid gap-1">
                  {animationComponents.slice(0, 8).map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      {item.name}
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* COMPONENTS1 SECTIONS */}

              {/* Components1 - 3D Components */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-blue-600/70">
                  Components1 - 3D
                </div>
                <div className="grid gap-1">
                  {components1ThreeDComponents.map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      <span className="text-blue-600">{item.name}</span>
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* Components1 - Animation Components */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-blue-600/70">
                  Components1 - Animations
                </div>
                <div className="grid gap-1">
                  {components1AnimationComponents.slice(0, 10).map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      <span className="text-blue-600">{item.name}</span>
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* Components1 - Background Components */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-blue-600/70">
                  Components1 - Backgrounds
                </div>
                <div className="grid gap-1">
                  {components1BackgroundComponents.map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      <span className="text-blue-600">{item.name}</span>
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* Components1 - UI Components */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-blue-600/70">
                  Components1 - UI Elements
                </div>
                <div className="grid gap-1">
                  {components1UiComponents.slice(0, 15).map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      <span className="text-blue-600">{item.name}</span>
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* Components1 - Interactive */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-blue-600/70">
                  Components1 - Interactive
                </div>
                <div className="grid gap-1">
                  {components1InteractiveComponents.slice(0, 10).map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      <span className="text-blue-600">{item.name}</span>
                    </Anchor>
                  ))}
                </div>
              </div>

              {/* Components1 - Scroll Components */}
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-start text-[0.8rem] font-normal uppercase tracking-widest text-blue-600/70">
                  Components1 - Scroll Effects
                </div>
                <div className="grid gap-1">
                  {components1ScrollComponents.slice(0, 8).map((item) => (
                    <Anchor key={item.name + item.href} href={item.href}>
                      <span className="text-blue-600">{item.name}</span>
                    </Anchor>
                  ))}
                </div>
              </div>

              <TextShimmer
                className="mt-4 cursor-default pl-3 text-xs"
                repeatDelay={0.5}
                delay={1.5}
              >
                180+ components available across both libraries...
              </TextShimmer>
            </div>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarDrawer;