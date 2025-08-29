import { Card } from "@/components/ui/card";

export const SuccessMessage = () => {
  return (
    <Card className="p-8 max-w-2xl mx-auto border-2 border-[var(--brand-primary)]/20">
      <div className="space-y-4 text-center">
        <div className="w-16 h-16 bg-[var(--brand-primary)]/10 rounded-full mx-auto flex items-center justify-center">
          <span className="text-[var(--brand-primary)] text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-semibold text-[var(--brand-primary)]">
          Successfully Installed!
        </h3>
        <p className="text-sm text-[var(--brand-secondary)]">
          GoUmrah has been installed to your device. You can now access it
          offline and enjoy a native app experience.
        </p>
      </div>
    </Card>
  );
};
