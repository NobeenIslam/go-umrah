import { Card } from "@/components/ui/card";

export const SuccessMessage = () => {
  return (
    <Card className="border-[var(--brand-primary)]/20 mx-auto max-w-2xl border-2 p-8">
      <div className="space-y-4 text-center">
        <div className="bg-[var(--brand-primary)]/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
          <span className="text-2xl text-[var(--brand-primary)]">✓</span>
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
