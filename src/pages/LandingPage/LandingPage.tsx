"use client";

import { useEffect, useState } from "react";
import { usePwaInstallPrompt } from "@/hooks/usePwaInstallPrompt";
import { InstallButton } from "@/pages/LandingPage/install-button";
import { SuccessMessage } from "@/pages/LandingPage/success-message";
import { IOSInstructions } from "@/pages/LandingPage/ios-instructions";
import { FeatureCard } from "@/pages/LandingPage/feature-card";
import AppLogo from "@/assets/app-logo.png";

export const GoUmrahLanding = () => {
  const { isInstallable, promptInstall } = usePwaInstallPrompt();

  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);
  }, []);

  async function handleInstallClick() {
    await promptInstall();
  }

  function renderInstallSection() {
    if (isIOS) {
      return <IOSInstructions />;
    }

    if (isInstallable) {
      return <InstallButton onInstallClick={handleInstallClick} />;
    }

    return <SuccessMessage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <img
              src={AppLogo}
              alt="GoUmrah"
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--brand-foreground)] text-balance">
              GoUmrah
            </h1>
            <p className="text-xl md:text-2xl text-[var(--brand-secondary)] font-medium text-balance">
              Experience Umrah Like Never Before
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-[var(--brand-foreground)]/80 text-pretty">
              Your complete spiritual companion for the sacred journey. Get
              personalized guidance, real-time updates, and essential tools all
              in one beautiful app.
            </p>
          </div>

          <div className="space-y-6">{renderInstallSection()}</div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <FeatureCard
              icon="🕋"
              title="Sacred Guidance"
              description="Step-by-step rituals and prayers for your spiritual journey"
            />
            <FeatureCard
              icon="🤲"
              title="Dua Builder"
              description="Build your own dua with our AI-powered dua builder"
            />
            <FeatureCard
              icon="📍"
              title="Personal Tracker"
              description="Track your progress and spiritual milestones"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { GoUmrahLanding as LandingPage };
