"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Smartphone, AwardIcon as SafariIcon } from "lucide-react"
import { usePwaInstallPrompt } from "@/hooks/usePwaInstallPrompt"

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
                  <h4 className="font-medium text-[var(--brand-foreground)]">On iPhone/iPad:</h4>
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
                Installing the app gives you offline access, push notifications, and a native app experience.
              </p>
            </div>
          </div>
        </Card>
      )
    }

    if (isInstallable) {
      return (
        <div className="space-y-4">
          <Button
            onClick={handleInstallClick}
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Download className="w-5 h-5 mr-2" />
            Install GoUmrah App
          </Button>
          <p className="text-sm text-[var(--brand-secondary)]">Install directly to your device for the best experience</p>
        </div>
      )
    }

    return (
      <Card className="p-8 max-w-2xl mx-auto border-2 border-[var(--brand-primary)]/20">
        <div className="space-y-4 text-center">
          <div className="w-16 h-16 bg-[var(--brand-primary)]/10 rounded-full mx-auto flex items-center justify-center">
            <span className="text-[var(--brand-primary)] text-2xl">✓</span>
          </div>
          <h3 className="text-xl font-semibold text-[var(--brand-primary)]">Successfully Installed!</h3>
          <p className="text-sm text-[var(--brand-secondary)]">
            GoUmrah has been installed to your device. You can now access it offline and enjoy a native app experience.
          </p>
        </div>
      </Card>
    )
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
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--brand-primary)]/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-[var(--brand-primary)] text-xl">🕋</span>
              </div>
              <h3 className="font-semibold text-[var(--brand-foreground)] mb-2">Sacred Guidance</h3>
              <p className="text-sm text-[var(--brand-secondary)]">Step-by-step rituals and prayers for your spiritual journey</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--brand-primary)]/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-[var(--brand-primary)] text-xl">📍</span>
              </div>
              <h3 className="font-semibold text-[var(--brand-foreground)] mb-2">Live Updates</h3>
              <p className="text-sm text-[var(--brand-secondary)]">Real-time crowd information and prayer times</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--brand-primary)]/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-[var(--brand-primary)] text-xl">🤲</span>
              </div>
              <h3 className="font-semibold text-[var(--brand-foreground)] mb-2">Personal Tracker</h3>
              <p className="text-sm text-[var(--brand-secondary)]">Track your progress and spiritual milestones</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export { GoUmrahLanding as LandingPage }

