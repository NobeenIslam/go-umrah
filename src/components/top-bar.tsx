"use client";

import { Button } from "@/components/ui/button";
import { Menu, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";

type TopBarProps = {
  title?: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

export default function TopBar({
  title = "Title",
  onLeftClick = () => {},
  onRightClick = () => {},
  leftIcon: LeftIcon = Menu,
  rightIcon: RightIcon = Settings,
  className,
}: TopBarProps) {
  return (
    <header
      className={cn("fixed inset-x-0 top-0 z-40", className)}
      aria-label="Top navigation bar"
    >
      <div
        className={cn(
          "mx-auto max-w-md rounded-b-3xl text-white shadow-md",
          "px-4 pb-3 pt-4"
        )}
        style={{
          paddingTop: "max(1rem, calc(env(safe-area-inset-top) + 0.5rem))",
          background:
            "linear-gradient(180deg, var(--brand-primary) 0%, var(--brand-primary-dark) 100%)",
        }}
      >
        <div className="flex items-center justify-between">
          <Button
            size="icon"
            variant="ghost"
            className="h-10 w-10 rounded-full text-white/95 hover:bg-white/15 hover:text-white"
            onClick={onLeftClick}
            aria-label="Open menu"
          >
            <LeftIcon className="h-6 w-6" />
          </Button>

          <h1 className="select-none text-xl font-bold tracking-wide">
            {title}
          </h1>

          <Button
            size="icon"
            variant="ghost"
            className="h-10 w-10 rounded-full text-white/95 hover:bg-white/15 hover:text-white"
            onClick={onRightClick}
            aria-label="Open settings"
          >
            <RightIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
