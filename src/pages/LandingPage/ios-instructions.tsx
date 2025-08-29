import { Card } from "@/components/ui/card";
import { Smartphone, AwardIcon as SafariIcon } from "lucide-react";

export const IOSInstructions = () => {
  return (
    <Card className="border-[var(--brand-primary)]/20 mx-auto max-w-2xl border-2 p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-center space-x-2 text-[var(--brand-primary)]">
          <Smartphone className="h-6 w-6" />
          <h3 className="text-xl font-semibold">Install GoUmrah</h3>
        </div>

        <div className="space-y-4 text-left">
          <div className="flex items-start space-x-3">
            <SafariIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--brand-primary)]" />
            <div>
              <h4 className="font-medium text-[var(--brand-foreground)]">
                On iPhone/iPad:
              </h4>
              <ol className="mt-2 list-inside list-decimal space-y-2 text-sm text-[var(--brand-secondary)]">
                <li>
                  Tap the Share button
                  <span className="bg-[var(--brand-primary)]/20 ml-1 inline-block h-4 w-4 rounded text-center text-xs leading-4">
                    ↗
                  </span>
                  at the bottom
                </li>
                <li>Scroll down and tap "Add to Home Screen"</li>
                <li>Tap "Add" to install GoUmrah</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--brand-soft-mint-ring)] pt-4">
          <p className="text-center text-sm text-[var(--brand-secondary)]">
            Installing the app gives you offline access, push notifications, and
            a native app experience.
          </p>
        </div>
      </div>
    </Card>
  );
};
