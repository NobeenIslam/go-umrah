"use client";

import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";

interface TopBarProps {
  title?: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  variant?: "primary" | "secondary";
};

export function TopBar({
  title = "Title",
  onRightClick = () => { },
  rightIcon: RightIcon = Settings,
  className,
  variant = "primary",
}: TopBarProps) {
  const variantClass =
    variant === "secondary"
      ? "topbar-gradient-secondary"
      : "topbar-gradient-primary";

  return (
    <header
      className={cn("fixed inset-x-0 top-0 z-40", className)}
      aria-label="Top navigation bar"
    >
      <div
        className={cn(
          "mx-auto max-w-md rounded-b-3xl text-white shadow-md",
          "px-4 pb-3 pt-4",
          "safe-top-padding",
          variantClass
        )}
      >
        <div className="flex items-center justify-between">
          {/* For spacing */}
          <div className="w-10" />
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
