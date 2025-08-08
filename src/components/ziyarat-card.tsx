"use client";

import { useState, useMemo, useCallback } from "react";
import { MapPin, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type CheckCardProps = {
  title?: string;
  description?: string;
  statusLabel?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
};

export function CheckCard({
  title = "Cave of Hira",
  description = "Where Prophet received first revelation",
  statusLabel = "Not visited",
  checked,
  onCheckedChange,
  className,
}: CheckCardProps) {
  const isControlled = typeof checked === "boolean";
  const [internalChecked, setInternalChecked] = useState(false);
  const current = isControlled ? (checked as boolean) : internalChecked;

  const toggle = useCallback(() => {
    const next = !current;
    if (!isControlled) setInternalChecked(next);
    onCheckedChange?.(next);
  }, [current, isControlled, onCheckedChange]);

  const statusText = useMemo(() => {
    if (current) return "Visited";
    return statusLabel;
  }, [current, statusLabel]);

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  }

  return (
    <div
      role="checkbox"
      aria-checked={current}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={onKeyDown}
      className={cn(
        "group relative w-full cursor-pointer rounded-3xl border bg-card/90 text-card-foreground shadow-lg ring-1 ring-black/5 transition-all hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
        "p-6 md:p-8",
        className
      )}
    >
      {/* Title and toggle */}
      <div className="flex items-start gap-4">
        <div className="min-w-0">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            {title}
          </h3>
          {description ? (
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>

        {/* Circular check control (visual only; clicks bubble to parent) */}
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          className={cn(
            "ml-auto flex h-8 w-8 items-center justify-center rounded-full transition-all",
            "ring-1 ring-muted-foreground/50",
            current
              ? "bg-foreground text-background ring-foreground/70"
              : "bg-transparent text-muted-foreground hover:bg-muted/60"
          )}
        >
          <Check
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              current ? "scale-100 opacity-100" : "scale-50 opacity-0"
            )}
          />
          <span className="sr-only">
            {current ? "Mark as not visited" : "Mark as visited"}
          </span>
        </button>
      </div>

      {/* Bottom status row */}
      <div className="mt-6 flex items-center gap-2 text-sm md:text-base text-muted-foreground">
        <MapPin
          className={cn(
            "h-5 w-5",
            current ? "text-foreground" : "text-muted-foreground"
          )}
        />
        <span className={cn(current ? "text-foreground font-medium" : "")}>
          {statusText}
        </span>
      </div>
    </div>
  );
}
