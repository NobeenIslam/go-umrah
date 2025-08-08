"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

type Accent = "emerald" | "teal" | "cyan" | "violet" | "rose";

export type QuoteCardProps = {
  step?: number | string;
  heading?: string;
  quotes?: string[];
  accent?: Accent;
  className?: string;
  onCopy?: (text: string) => void;
};

const accentClasses: Record<
  Accent,
  {
    number: string;
    bar: string;
    boxBg: string;
    quoteText: string;
    ring: string;
    button: string;
  }
> = {
  emerald: {
    number: "text-emerald-600",
    bar: "bg-emerald-600/90",
    boxBg: "bg-emerald-50",
    quoteText: "text-emerald-700",
    ring: "ring-emerald-600/10",
    button: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
  teal: {
    number: "text-teal-600",
    bar: "bg-teal-600/90",
    boxBg: "bg-teal-50",
    quoteText: "text-teal-700",
    ring: "ring-teal-600/10",
    button: "bg-teal-600 hover:bg-teal-700 text-white",
  },
  cyan: {
    number: "text-cyan-600",
    bar: "bg-cyan-600/90",
    boxBg: "bg-cyan-50",
    quoteText: "text-cyan-700",
    ring: "ring-cyan-600/10",
    button: "bg-cyan-600 hover:bg-cyan-700 text-white",
  },
  violet: {
    number: "text-violet-600",
    bar: "bg-violet-600/90",
    boxBg: "bg-violet-50",
    quoteText: "text-violet-700",
    ring: "ring-violet-600/10",
    button: "bg-violet-600 hover:bg-violet-700 text-white",
  },
  rose: {
    number: "text-rose-600",
    bar: "bg-rose-600/90",
    boxBg: "bg-rose-50",
    quoteText: "text-rose-700",
    ring: "ring-rose-600/10",
    button: "bg-rose-600 hover:bg-rose-700 text-white",
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
  accent = "emerald",
  className,
  onCopy,
}: QuoteCardProps) {
  const c = accentClasses[accent];
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
        "rounded-3xl bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1",
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
                <Quote className="h-4 w-4" aria-hidden="true" />
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
              <Check className="h-4 w-4 text-emerald-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
