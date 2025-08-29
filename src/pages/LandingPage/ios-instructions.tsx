import { Card } from "@/components/ui/card";
import { Smartphone, AwardIcon as SafariIcon } from "lucide-react";

export const IOSInstructions = () => {
  return (
    <Card className="p-8 max-w-2xl mx-auto border-2 border-[var(--brand-primary)]/20">
      <div className="space-y-6">
        <div className="flex items-center justify-center space-x-2 text-[var(--brand-primary)]">
          <Smartphone className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Install GoUmrah</h3>
        </div>

        <div className="space-y-4 text-left">
          <div className="flex items-start space-x-3">
            <SafariIcon className="w-5 h-5 text-[var(--brand-primary)] mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-[var(--brand-foreground)]">
                On iPhone/iPad:
              </h4>
              <ol className="mt-2 space-y-2 text-sm text-[var(--brand-secondary)] list-decimal list-inside">
                <li>
                  Tap the Share button
                  <span className="inline-block w-4 h-4 ml-1 bg-[var(--brand-primary)]/20 rounded text-xs text-center leading-4">
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

        <div className="pt-4 border-t border-[var(--brand-soft-mint-ring)]">
          <p className="text-sm text-[var(--brand-secondary)] text-center">
            Installing the app gives you offline access, push notifications, and
            a native app experience.
          </p>
        </div>
      </div>
    </Card>
  );
};
