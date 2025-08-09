import { useCallback, useEffect, useState } from "react";

export type InstallOutcome = "accepted" | "dismissed" | null;

export function usePwaInstallPrompt() {
  const [deferredPromptEvent, setDeferredPromptEvent] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [installOutcome, setInstallOutcome] = useState<InstallOutcome>(null);

  useEffect(() => {
    function handleBeforeInstallPrompt(event: BeforeInstallPromptEvent) {
      // Prevent the mini-infobar from appearing on mobile
      event.preventDefault();
      setDeferredPromptEvent(event);
    }

    function handleAppInstalled() {
      setIsInstalled(true);
      setDeferredPromptEvent(null);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const promptInstall = useCallback(async (): Promise<InstallOutcome> => {
    if (!deferredPromptEvent) return null;

    await deferredPromptEvent.prompt();
    const choice = await deferredPromptEvent.userChoice;

    setInstallOutcome(choice.outcome);
    setDeferredPromptEvent(null);

    return choice.outcome;
  }, [deferredPromptEvent]);

  return {
    isInstallable: deferredPromptEvent !== null,
    promptInstall,
    isInstalled,
    installOutcome,
  } as const;
}
