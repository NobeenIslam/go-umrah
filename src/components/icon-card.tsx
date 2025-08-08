"use client";

import type { LucideIcon } from "lucide-react";
import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Accent = "amber" | "sky" | "emerald" | "violet";

const accents: Record<
  Accent,
  { iconBg: string; iconFg: string; ring: string }
> = {
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

export type DhikrCardProps = {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  accent?: Accent;
  className?: string;
};

/**
 * DhikrCard
 * - Mobile-first elevated card with left icon, title and paragraph.
 * - Uses Tailwind + shadcn styles, with color accents.
 * - Accessible with semantic headings and text.
 */
export function DhikrCard({
  title = "Morning Dhikr",
  description = "Begin each day with morning supplications (Adhkar) after Fajr prayer. Recite Ayat al-Kursi, the last two verses of Surah Al-Baqarah, and seek Allah's protection for the day ahead.",
  icon: Icon = Sun,
  accent = "amber",
  className,
}: DhikrCardProps) {
  const a = accents[accent];

  return (
    <article
      className={cn(
        "rounded-3xl bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1",
        a.ring,
        "transition-shadow",
        className
      )}
      aria-label={title}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
            a.iconBg
          )}
          aria-hidden="true"
        >
          <Icon className={cn("h-5 w-5", a.iconFg)} />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-semibold leading-tight text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground [text-wrap:balance]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
