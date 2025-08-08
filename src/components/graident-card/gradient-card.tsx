import * as React from "react";
import { cn } from "@/lib/utils";

export type GradientCardProps = {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  colors?: [string, string]; // from, to
  className?: string;
  badge?: React.ReactNode;
  showIcon?: boolean; // controls rendering of icon container/placeholder
};

export function GradientCard({
  title = "Card Title",
  subtitle,
  icon,
  colors = ["var(--brand-soft-mint-a)", "var(--brand-soft-blue-a)"],
  className,
  badge,
  showIcon = true,
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "group relative aspect-[1.2/1] w-full overflow-hidden rounded-3xl p-4",
        "ring-1 ring-border shadow-sm",
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
      }}
      role="group"
      aria-label={title}
    >
      {/* Soft waves and highlights */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 70% at 120% 0%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 60%), radial-gradient(120% 70% at -10% 100%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 60%), radial-gradient(40% 40% at 25% 25%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-between">
        {showIcon ? (
          <div className="flex items-center justify-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-card/85 shadow-sm ring-1 ring-border">
              {icon ?? (
                <div
                  className="h-9 w-9 rounded-md bg-muted"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
        ) : null}

        <div className="flex items-end justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-[color:var(--brand-foreground)]">
              {title}
            </h3>
            {subtitle ? (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>
          {badge ? <div className="shrink-0">{badge}</div> : null}
        </div>
      </div>

      {/* Hover focus ring */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-[color:var(--brand-primary)]/0 transition group-hover:ring-2 group-hover:ring-[color:var(--brand-primary)]/30 group-focus-within:ring-2 group-focus-within:ring-[color:var(--brand-primary)]/30" />
    </div>
  );
}
