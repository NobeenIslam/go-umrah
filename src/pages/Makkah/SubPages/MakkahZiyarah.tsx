import type { FC } from "react";
import { LargerCheckListItem } from "@/components/larger-checklist-item/larger-checklist-item";
import { useGetZiyarah } from "@/hooks/ziyarah/useGetZiyarah";
import { useSetZiyarahChecked } from "@/hooks/ziyarah/useSetZiyarahChecked";
import { Progress } from "@/components/ui/progress";

export const MakkahZiyarah: FC = () => {
  const { data: items } = useGetZiyarah("makkah");
  const toggle = useSetZiyarahChecked("makkah");

  const totalCount = items?.length ?? 0;
  const completedCount = items?.filter((i) => i.checked).length ?? 0;
  const percent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Makkah Ziyarah</h2>
        <div className="mt-2 flex items-center gap-3">
          <Progress value={percent} className="h-2" />
          <span className="text-xs text-muted-foreground">{percent}%</span>
        </div>
      </div>
      <div className="space-y-3">
        {items?.map((item) => (
          <LargerCheckListItem
            key={item.id}
            title={item.name}
            description={item.description}
            checked={item.checked}
            onCheckedChange={(next) =>
              toggle.mutate({ id: item.id as number, checked: next })
            }
          />
        ))}
      </div>
    </div>
  );
};
