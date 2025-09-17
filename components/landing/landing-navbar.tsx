"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MyIcon } from "../icons/logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Premium Star Icon Component
const PremiumIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
      fill="currentColor"
    />
  </svg>
);

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      return setIsScrolled(true);
    }

    return setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full transition-all sticky top-0 z-50 duration-300",
        isScrolled
          ? "border-b border-neutral-800/50 bg-neutral-900/40 shadow-lg backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <div className="mx-auto max-w-7xl px-3 md:px-5 lg:px-8">
        <div className="flex h-[3.7rem] items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-2">
              <MyIcon className="h-5 w-5 text-white" />
              <span className="text-xl font-bold text-white">UI Studio</span>
            </Link>
          </div>

          <div className="hidden items-center space-x-2 lg:flex">
            <div className="flex items-center gap-0.5 opacity-50">
              <PremiumLink />
              <GithubLink />
              <LinkedInLink />
            </div>
          </div>
          <div className="flex items-center space-x-1 opacity-50 lg:hidden">
            <PremiumLink />
            <GithubLink />
            <LinkedInLink />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;

function PremiumLink() {
  return (
    <Link
      href={"/premium"}
      className={cn(
        "group flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-amber-500 hover:bg-neutral-900 hover:text-amber-400 transition-all duration-200",
      )}
      title="Go Premium"
    >
      <PremiumIcon className="h-[18px] w-[18px]" />
    </Link>
  );
}

function GithubLink() {
  return (
    <Link
      href={"https://github.com/shivas1432/UI-Studio"}
      target="_blank"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-white hover:bg-neutral-900",
      )}
    >
      <FaGithub className="h-[18px] w-[18px]" />
    </Link>
  );
}

function LinkedInLink() {
  return (
    <Link
      href={"https://www.linkedin.com/in/shivashanker-kanugula-515122252/"}
      target="_blank"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-white hover:bg-neutral-900",
      )}
    >
      <FaLinkedin className="h-[18px] w-[18px]" />
    </Link>
  );
}