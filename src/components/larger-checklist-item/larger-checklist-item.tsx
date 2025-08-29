"use client";

import { useState, useMemo, useCallback } from "react";
import { MapPin, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type LargerCheckListItemProps = {
  title?: string;
  description?: string;
  statusLabel?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
};

export function LargerCheckListItem({
  title = "Cave of Hira",
  description = "Where Prophet received first revelation",
  statusLabel = "Not visited",
  checked,
  onCheckedChange,
  className,
}: LargerCheckListItemProps) {
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
        // Surface and elevation tuned to theme tokens
        "bg-card/90 text-card-foreground ring-border group relative w-full cursor-pointer rounded-3xl border shadow-lg ring-1 transition-all hover:shadow-2xl focus:outline-none focus-visible:ring-2",
        // Use brand primary for focus ring
        "focus-visible:ring-[color:var(--brand-primary)]/45",
        // Spacing
        "p-6 md:p-8",
        className,
      )}
      style={{
        // Subtle brand gradient edge glow
        boxShadow: "0 1px 0 0 rgba(0,0,0,0.02), 0 8px 30px rgba(0,0,0,0.05)",
      }}
    >
      {/* Title and toggle */}
      <div className="flex items-start gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight md:text-xl">
            {title}
          </h3>
          {description ? (
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
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
            "ml-auto flex h-10 w-10 items-center justify-center rounded-full transition-all",
            // Ring and backgrounds aligned to brand
            current
              ? "ring-[color:var(--brand-primary)]/70 bg-[color:var(--brand-primary)] text-white ring-1"
              : "ring-[color:var(--brand-secondary)]/45 bg-transparent text-[color:var(--brand-secondary)] ring-1 hover:bg-[color:var(--brand-soft-mint-a)]",
          )}
        >
          <Check
            className={cn(
              "h-5 w-5 transition-transform duration-200",
              current ? "scale-100 opacity-100" : "scale-50 opacity-0",
            )}
          />
          <span className="sr-only">
            {current ? "Mark as not visited" : "Mark as visited"}
          </span>
        </button>
      </div>

      {/* Bottom status row */}
      <div className="text-muted-foreground mt-6 flex items-center gap-2 text-xs md:text-sm">
        <MapPin
          className={cn(
            "h-5 w-5",
            current
              ? "text-[color:var(--brand-primary)]"
              : "text-[color:var(--brand-secondary)]",
          )}
        />
        <span
          className={cn(
            current ? "text-foreground font-medium" : "text-muted-foreground",
          )}
        >
          {statusText}
        </span>
      </div>
    </div>
  );
}
