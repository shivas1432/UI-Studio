import React from "react";
import { Themetoggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";
import { navItems } from "@/contants";
import DocumentSearch from "./documentsearch";
import AnchorNav from "./anchor-nav";
import { GithubLink, TwitterLink } from "../ui/SocialButtons";
import NavbarDrawer from "./navbar-drawer";
import { MyIcon } from "../icons/logo";

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

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/5 shadow-lg shadow-neutral-400/5 backdrop-blur-lg dark:bg-neutral-800/5 dark:shadow-neutral-700/5">
      <div className="mx-auto max-w-[95.8rem] border-x px-2 md:pl-8 md:pr-5">
        <div className="flex h-[3.5rem] items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-2">
              <MyIcon className="h-5 w-5 text-black dark:text-white" />
              <span className="text-xl font-bold">UI Studio</span>
            </Link>
            
            <div className="hidden items-center space-x-6 lg:flex">
              {navItems.map((item) => (
                <AnchorNav
                  key={item.name + item.href}
                  absolute
                  href={item.href}
                >
                  {item.name}
                </AnchorNav>
              ))}
            </div>
          </div>
          
          <div className="hidden items-center space-x-2 lg:flex">
            <DocumentSearch />
            <div className="flex items-center gap-0.5">
              {/* Premium Icon */}
              <Link 
                href="/premium" 
                className="group relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                title="Go Premium"
              >
                <PremiumIcon className="h-5 w-5 text-amber-500 group-hover:text-amber-600 dark:text-amber-400 dark:group-hover:text-amber-300 transition-colors duration-200" />
                
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Go Premium
                </div>
              </Link>
              
              <GithubLink />
              <TwitterLink />
              <Themetoggle />
            </div>
          </div>
          
          <div className="flex items-center space-x-1 lg:hidden">
            {/* Premium Icon for Mobile */}
            <Link 
              href="/premium" 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              title="Go Premium"
            >
              <PremiumIcon className="h-5 w-5 text-amber-500" />
            </Link>
            <Themetoggle />
            <NavbarDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;