import * as React from "react";
import { cn } from "@/lib/utils";

export type GradientCardProps = {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  colors?: Readonly<[string, string]>; // from, to
  className?: string;
  badge?: React.ReactNode;
  showIcon?: boolean; // controls rendering of icon container/placeholder
  density?: "default" | "compact"; // controls min-height sizing
};

export function GradientCard({
  title = "Card Title",
  subtitle,
  icon,
  colors = ["var(--brand-soft-mint-a)", "var(--brand-soft-blue-a)"],
  className,
  badge,
  showIcon = true,
  density = "default",
}: GradientCardProps) {
  const bottomRowClassName = cn(
    "flex items-end gap-2",
    badge ? "justify-between" : "justify-center",
    showIcon ? "mt-5 sm:mt-6" : "mt-1",
  );

  const minHeightClassName = density === "compact" ? "min-h-32" : "min-h-48";

  return (
    <div
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-3xl p-5 sm:p-6",
        minHeightClassName,
        "ring-border shadow-sm ring-1",
        className,
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

      <div className="relative flex h-full flex-col">
        {showIcon ? (
          <div className="flex items-center justify-center">
            <div className="bg-card/85 ring-border grid h-20 w-20 place-items-center rounded-full shadow-sm ring-1">
              {icon ?? (
                <div
                  className="bg-muted h-9 w-9 rounded-md"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
        ) : null}

        <div className={bottomRowClassName}>
          <div
            className={cn(
              "mx-auto max-w-[90%] text-center",
              badge && "mx-0 text-left",
            )}
          >
            <h3 className="break-words text-lg font-semibold leading-snug text-[color:var(--brand-foreground)]">
              {title}
            </h3>
            {subtitle ? (
              <p className="text-muted-foreground break-words text-sm leading-snug">
                {subtitle}
              </p>
            ) : null}
          </div>
          {badge ? <div className="shrink-0">{badge}</div> : null}
        </div>
      </div>

      {/* Hover focus ring */}
      <div className="ring-[color:var(--brand-primary)]/0 group-hover:ring-[color:var(--brand-primary)]/30 group-focus-within:ring-[color:var(--brand-primary)]/30 pointer-events-none absolute inset-0 rounded-3xl ring-0 transition group-focus-within:ring-2 group-hover:ring-2" />
    </div>
  );
}
