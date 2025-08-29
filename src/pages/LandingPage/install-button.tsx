import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface InstallButtonProps {
  onInstallClick: () => void;
}

export const InstallButton = ({ onInstallClick }: InstallButtonProps) => {
  return (
    <div className="space-y-4">
      <Button
        onClick={onInstallClick}
        size="lg"
        className="h-auto bg-[var(--brand-primary)] px-8 py-6 text-lg shadow-lg transition-all duration-200 hover:bg-[var(--brand-primary-dark)] hover:shadow-xl"
      >
        <Download className="mr-2 h-5 w-5" />
        Install GoUmrah App
      </Button>
      <p className="text-sm text-[var(--brand-secondary)]">
        Install directly to your device for the best experience
      </p>
    </div>
  );
};
