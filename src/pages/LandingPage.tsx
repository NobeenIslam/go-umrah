"use client"

import { useEffect, useState } from "react"
import { usePwaInstallPrompt } from "@/hooks/usePwaInstallPrompt"
import { InstallButton } from "@/components/landing/InstallButton"
import { SuccessMessage } from "@/components/landing/SuccessMessage"
import { IOSInstructions } from "@/components/landing/IOSInstructions"
import { FeatureCard } from "@/components/landing/FeatureCard"

export const GoUmrahLanding = () => {
  const { isInstallable, promptInstall } = usePwaInstallPrompt()

  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

  }, [])

  async function handleInstallClick() {
    await promptInstall()
  }

  function renderInstallSection() {
    if (isIOS) {
      return <IOSInstructions />
    }

    if (isInstallable) {
      return <InstallButton onInstallClick={handleInstallClick} />
    }

    return <SuccessMessage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--brand-background)] via-[var(--brand-soft-mint-a)] to-[var(--brand-soft-blue-a)]">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="w-24 h-24 mx-auto bg-[var(--brand-primary)]/10 rounded-3xl flex items-center justify-center">
              <div className="w-12 h-12 bg-[var(--brand-primary)] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--brand-foreground)] text-balance">GoUmrah</h1>
            <p className="text-xl md:text-2xl text-[var(--brand-secondary)] font-medium text-balance">
              Experience Umrah Like Never Before
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-[var(--brand-foreground)]/80 text-pretty">
              Your complete spiritual companion for the sacred journey. Get personalized guidance, real-time updates,
              and essential tools all in one beautiful app.
            </p>
          </div>

          <div className="space-y-6">
            {renderInstallSection()}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <FeatureCard
              icon="🕋"
              title="Sacred Guidance"
              description="Step-by-step rituals and prayers for your spiritual journey"
            />
            <FeatureCard
              icon="📍"
              title="Live Updates"
              description="Real-time crowd information and prayer times"
            />
            <FeatureCard
              icon="🤲"
              title="Personal Tracker"
              description="Track your progress and spiritual milestones"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { GoUmrahLanding as LandingPage }

