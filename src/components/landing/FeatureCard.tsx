import { Card } from "@/components/ui/card"

interface FeatureCardProps {
    icon: string
    title: string
    description: string
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[var(--brand-primary)]/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-[var(--brand-primary)] text-xl">{icon}</span>
            </div>
            <h3 className="font-semibold text-[var(--brand-foreground)] mb-2">{title}</h3>
            <p className="text-sm text-[var(--brand-secondary)]">{description}</p>
        </Card>
    )
}
