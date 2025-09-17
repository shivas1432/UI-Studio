"use client";
import React from "react";
import {
  SiGoogle,
  SiTiktok,
  SiSpotify,
} from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import {
  Github,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Code,
} from "lucide-react";
import { useAnimate } from "framer-motion";

export const ClipPathLinks = () => {
  return (
    <div className="divide-y border divide-border border-border">
      <div className="grid grid-cols-2 divide-x divide-border">
        <LinkBox Icon={SiGoogle} href="#" />
        <LinkBox Icon={Github} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-border">
        <LinkBox Icon={Twitter} href="#" />
        <LinkBox Icon={Linkedin} href="#" />
        <LinkBox Icon={Instagram} href="#" />
        <LinkBox Icon={Facebook} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-border">
        <LinkBox Icon={FaDiscord} href="#" />
        <LinkBox Icon={SiSpotify} href="#" />
        <LinkBox Icon={Code} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

interface LinkBoxProps {
  Icon?: React.ComponentType<{ className?: string }>;
  href: string;
  imgSrc?: string;
  className?: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href, imgSrc, className }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const box = target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as const,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as const,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as const,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as const,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 text-foreground bg-background transition-all duration-200 hover:scale-105"
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="custom icon"
          className={className ?? "max-h-10 sm:max-h-16 md:max-h-20 object-contain"}
        />
      ) : Icon ? (
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      ) : null}

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-primary text-primary-foreground transition-colors duration-300"
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="custom icon hover"
            className={className ?? "max-h-10 sm:max-h-16 md:max-h-20 object-contain"}
          />
        ) : Icon ? (
          <Icon className="text-xl sm:text-3xl md:text-4xl" />
        ) : null}
      </div>
    </a>
  );
};

// Main component wrapper for features integration
export function SocialLinksFeature() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-2">
          Social Links Demo
        </h3>
        <p className="text-muted-foreground">
          Hover over the icons to see the smooth clip-path animations in action
        </p>
      </div>
      <ClipPathLinks />
    </div>
  );
}

export default SocialLinksFeature;