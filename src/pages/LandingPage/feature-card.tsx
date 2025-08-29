import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 text-center transition-shadow hover:shadow-lg">
      <div className="bg-[var(--brand-primary)]/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
        <span className="text-xl text-[var(--brand-primary)]">{icon}</span>
      </div>
      <h3 className="mb-2 font-semibold text-[var(--brand-foreground)]">
        {title}
      </h3>
      <p className="text-sm text-[var(--brand-secondary)]">{description}</p>
    </Card>
  );
};
