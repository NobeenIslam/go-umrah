"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export type QuoteCardVariant = "success" | "info" | "neutral";

export type QuoteCardProps = {
  step?: number | string;
  heading?: string;
  quotes?: string[];
  variant?: QuoteCardVariant;
  showIcon?: boolean;
  className?: string;
  onCopy?: (text: string) => void;
};

const variantClasses: Record<
  QuoteCardVariant,
  {
    number: string;
    bar: string;
    boxBg: string;
    quoteText: string;
    ring: string;
    icon: string;
  }
> = {
  success: {
    number: "text-[color:var(--brand-primary)]",
    bar: "bg-[color:var(--brand-primary)]/90",
    boxBg: "bg-[color:var(--brand-soft-mint-a)]",
    quoteText: "text-foreground",
    ring: "ring-[color:var(--brand-primary)]/12",
    icon: "text-[color:var(--brand-primary)]",
  },
  info: {
    number: "text-[color:var(--brand-accent)]",
    bar: "bg-[color:var(--brand-accent)]/90",
    boxBg: "bg-accent/10",
    quoteText: "text-foreground",
    ring: "ring-[color:var(--brand-accent)]/15",
    icon: "text-[color:var(--brand-accent)]",
  },
  neutral: {
    number: "text-muted-foreground",
    bar: "bg-muted-foreground/70",
    boxBg: "bg-muted/40",
    quoteText: "text-foreground",
    ring: "ring-border",
    icon: "text-muted-foreground",
  },
};

/**
 * QuoteCard
 * Mobile-first, with a soft elevated card, step number, heading, and a
 * rounded quote container featuring a left accent bar. Includes a copy button.
 */
export function QuoteCard({
  step = 1,
  heading = "Upon entering the Prophet's Masjid, recite:",
  quotes = [
    "Bismillah, was-salatu was-salamu ala rasulillah",
    "aAAoothu billahil-AAatheem wabiwajhihil-kareem wasultanihil-qadeem minash-shaytanir-rajeem",
  ],
  variant = "success",
  showIcon = true,
  className,
  onCopy,
}: QuoteCardProps) {
  const c = variantClasses[variant];
  const [copied, setCopied] = useState(false);

  const copyText = useMemo(() => quotes.join("\n\n"), [quotes]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      onCopy?.(copyText);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <section
      className={cn(
        "rounded-3xl bg-card p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1",
        c.ring,
        "transition-all",
        className
      )}
      aria-label="Quote card"
    >
      <div className="flex items-start gap-3">
        <div
          className={cn("text-xl font-semibold", c.number)}
          aria-label="Step number"
        >
          {String(step)}
          {"."}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-balance text-lg sm:text-xl font-semibold text-foreground">
            {heading}
          </h2>

          {/* Quote box */}
          <div className={cn("relative mt-4 rounded-2xl p-4 sm:p-5", c.boxBg)}>
            <div
              className={cn(
                "absolute left-2 top-2 bottom-2 w-1.5 rounded-full",
                c.bar
              )}
            />
            <blockquote className="pl-5">
              <div className="flex items-center gap-2 pb-2 text-muted-foreground">
                {showIcon ? (
                  <Quote className={cn("h-4 w-4", c.icon)} aria-hidden="true" />
                ) : null}
                <span className="text-xs font-medium">Recitation</span>
              </div>
              <div
                className={cn("space-y-3 italic leading-relaxed", c.quoteText)}
              >
                {quotes.map((q, i) => (
                  <p key={i} className="text-base sm:text-lg">
                    {`“${q}”`}
                  </p>
                ))}
              </div>
            </blockquote>
          </div>
        </div>

        {/* Copy button (compact for mobile) */}
        <div className="pt-1">
          <Button
            size="icon"
            variant="ghost"
            aria-label={copied ? "Copied" : "Copy quote"}
            onClick={handleCopy}
            className="h-9 w-9 rounded-full"
          >
            {copied ? (
              <Check className="h-4 w-4 text-[color:var(--brand-primary)]" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
