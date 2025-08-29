import type { FC } from "react";
import { LargerCheckListItem } from "@/components/larger-checklist-item/larger-checklist-item";
import { useGetZiyarah } from "@/hooks/ziyarah/useGetZiyarah";
import { useSetZiyarahChecked } from "@/hooks/ziyarah/useSetZiyarahChecked";
import { Progress } from "@/components/ui/progress";

interface ZiyaarahSectionProps {
  city: "makkah" | "medina";
  title: string;
}

export const ZiyaarahSection: FC<ZiyaarahSectionProps> = ({ city, title }) => {
  const { data: items } = useGetZiyarah(city);
  const toggleChecked = useSetZiyarahChecked(city);

  // Calculate progress
  const totalCount = items?.length ?? 0;
  const completedCount = items?.filter((item) => item.checked).length ?? 0;
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mt-2 flex items-center gap-3">
          <Progress value={progressPercent} className="h-2" />
          <span className="text-muted-foreground text-xs">
            {progressPercent}%
          </span>
        </div>
      </div>
      <div className="space-y-3">
        {items?.map((item) => (
          <LargerCheckListItem
            key={`${city}-${item.id}`}
            title={item.name}
            description={item.description}
            checked={item.checked}
            onCheckedChange={(next) =>
              toggleChecked.mutate({ id: item.id as number, checked: next })
            }
          />
        ))}
      </div>
    </div>
  );
};
