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
        className="text-lg px-8 py-6 h-auto bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <Download className="w-5 h-5 mr-2" />
        Install GoUmrah App
      </Button>
      <p className="text-sm text-[var(--brand-secondary)]">
        Install directly to your device for the best experience
      </p>
    </div>
  );
};
