"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Item = {
  key: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type BottomBarProps = {
  items?: Item[];
  defaultActive?: string;
  activeKey?: string; // new controlled prop
  onChange?: (key: string) => void;
  className?: string;
};

export default function BottomBar({
  items = [],
  activeKey,
  onChange = () => {},
  className,
}: BottomBarProps) {
  const [internalActive, setInternalActive] = React.useState<string>(
    items[0]?.key ?? "home"
  );
  const isControlled = activeKey !== undefined;
  const currentActive = isControlled ? activeKey! : internalActive;

  function handleClick(key: string) {
    if (!isControlled) {
      setInternalActive(key);
    }
    onChange?.(key);
  }

  return (
    <nav
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md",
        className
      )}
      aria-label="Bottom navigation bar"
    >
      <div
        className="rounded-t-3xl border-t bg-white/95 shadow-[0_-4px_20px_rgba(15,23,42,0.06)] backdrop-blur supports-[backdrop-filter]:bg-white/70"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.25rem)" }}
      >
        <ul className="grid grid-cols-5 gap-1 px-2 pt-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = currentActive === item.key;
            return (
              <li key={item.key}>
                <button
                  onClick={() => handleClick(item.key)}
                  className={cn(
                    "mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-xs font-medium transition",
                    isActive
                      ? "text-[#43AA8B]"
                      : "text-[#577590]/80 hover:text-[#577590]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span
                    className={cn(
                      "relative grid h-10 w-10 place-items-center rounded-2xl transition",
                      isActive
                        ? "bg-[#EAF4F1] ring-1 ring-[#D6ECE5]"
                        : "bg-transparent"
                    )}
                    aria-hidden="true"
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6 transition",
                        isActive ? "text-[#43AA8B]" : "text-[#577590]"
                      )}
                    />
                  </span>
                  <span className="leading-none">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
