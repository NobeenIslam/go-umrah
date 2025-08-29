import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LandingPage } from "@/pages/LandingPage/LandingPage";

export const InstallGate = () => {
  const [showApplication, setShowApplication] = useState<boolean>(false);

  //navigator check for IOS
  useEffect(() => {
    const isStandalone = window.matchMedia?.("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    setShowApplication(isStandalone);
  }, []);

  if (true) {
    return <Outlet />;
  }

  return <LandingPage />;
};


