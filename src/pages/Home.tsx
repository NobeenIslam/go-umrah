import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { usePwaInstallPrompt } from "@/hooks/usePwaInstallPrompt";

export const Home: FC = () => {
  const { isInstallable, promptInstall, installOutcome } =
    usePwaInstallPrompt();

  async function handleInstallClick() {
    await promptInstall();
  }

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Home</h2>
      <p className="text-sm text-muted-foreground">
        Placeholder screen. Navigation only.
      </p>

      {isInstallable && (
        <div className="pt-2">
          <Button onClick={handleInstallClick}>Install app</Button>
        </div>
      )}
      {installOutcome === "accepted" && (
        <p className="text-xs text-muted-foreground">Thanks for installing!</p>
      )}
    </div>
  );
};
