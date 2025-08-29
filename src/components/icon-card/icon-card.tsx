"use client";

import type { LucideIcon } from "lucide-react";
import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconCardVariant = "brand" | "amber" | "sky" | "emerald" | "violet";

const variants: Record<
  IconCardVariant,
  { iconBg: string; iconFg: string; ring: string }
> = {
  brand: {
    iconBg: "bg-[color:var(--brand-soft-mint-a)]",
    iconFg: "text-[color:var(--brand-primary)]",
    ring: "ring-[color:var(--brand-primary)]/12",
  },
  amber: {
    iconBg: "bg-amber-100",
    iconFg: "text-amber-600",
    ring: "ring-amber-600/10",
  },
  sky: {
    iconBg: "bg-sky-100",
    iconFg: "text-sky-600",
    ring: "ring-sky-600/10",
  },
  emerald: {
    iconBg: "bg-emerald-100",
    iconFg: "text-emerald-600",
    ring: "ring-emerald-600/10",
  },
  violet: {
    iconBg: "bg-violet-100",
    iconFg: "text-violet-600",
    ring: "ring-violet-600/10",
  },
};

export type IconCardProps = {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  variant?: IconCardVariant;
  ariaLabel?: string;
  className?: string;
};

/**
 * IconCard
 * - Mobile-first elevated card with left icon, title and paragraph.
 * - Theme-aligned (bg-card, ring-border) with brand variant by default.
 * - Accessible with semantic headings and text.
 */
export function IconCard({
  title,
  description,
  icon: Icon = Sun,
  variant = "brand",
  ariaLabel,
  className,
}: IconCardProps) {
  const resolved = variants[variant];

  return (
    <article
      className={cn(
        // Theme surface + subtle elevation
        "rounded-3xl bg-card p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-border",
        // Variant ring overlay
        resolved.ring,
        "transition-shadow",
        className,
      )}
      aria-label={ariaLabel ?? title}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
            resolved.iconBg,
          )}
          aria-hidden="true"
        >
          <Icon className={cn("h-5 w-5", resolved.iconFg)} />
        </div>

        <div className="min-w-0">
          {title ? (
            <h3 className="text-xl font-semibold leading-tight text-foreground">
              {title}
            </h3>
          ) : null}
          {description ? (
            <p className="mt-2 text-base leading-relaxed text-muted-foreground [text-wrap:balance]">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
