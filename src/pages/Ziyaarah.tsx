import type { FC } from "react";
import { LargerCheckListItem } from "@/components/larger-checklist-item/larger-checklist-item";
import { useGetZiyarah } from "@/hooks/ziyarah/useGetZiyarah";
import { useSetZiyarahChecked } from "@/hooks/ziyarah/useSetZiyarahChecked";
import { Progress } from "@/components/ui/progress";

export const Ziyaarah: FC = () => {
    const { data: medinaItems } = useGetZiyarah("medina");
    const { data: makkahItems } = useGetZiyarah("makkah");
    const medinaToggle = useSetZiyarahChecked("medina");
    const makkahToggle = useSetZiyarahChecked("makkah");

    // Calculate progress for Medina
    const medinaTotalCount = medinaItems?.length ?? 0;
    const medinaCompletedCount = medinaItems?.filter((i) => i.checked).length ?? 0;
    const medinaPercent =
        medinaTotalCount > 0 ? Math.round((medinaCompletedCount / medinaTotalCount) * 100) : 0;

    // Calculate progress for Makkah
    const makkahTotalCount = makkahItems?.length ?? 0;
    const makkahCompletedCount = makkahItems?.filter((i) => i.checked).length ?? 0;
    const makkahPercent =
        makkahTotalCount > 0 ? Math.round((makkahCompletedCount / makkahTotalCount) * 100) : 0;

    return (
        <div className="space-y-8">
            {/* Medina Ziyaarah Section */}
            <div className="space-y-4">
                <div>
                    <h2 className="text-xl font-semibold">Medina Ziyaarah</h2>
                    <div className="mt-2 flex items-center gap-3">
                        <Progress value={medinaPercent} className="h-2" />
                        <span className="text-xs text-muted-foreground">{medinaPercent}%</span>
                    </div>
                </div>
                <div className="space-y-3">
                    {medinaItems?.map((item) => (
                        <LargerCheckListItem
                            key={`medina-${item.id}`}
                            title={item.name}
                            description={item.description}
                            checked={item.checked}
                            onCheckedChange={(next) =>
                                medinaToggle.mutate({ id: item.id as number, checked: next })
                            }
                        />
                    ))}
                </div>
            </div>

            {/* Makkah Ziyaarah Section */}
            <div className="space-y-4">
                <div>
                    <h2 className="text-xl font-semibold">Makkah Ziyaarah</h2>
                    <div className="mt-2 flex items-center gap-3">
                        <Progress value={makkahPercent} className="h-2" />
                        <span className="text-xs text-muted-foreground">{makkahPercent}%</span>
                    </div>
                </div>
                <div className="space-y-3">
                    {makkahItems?.map((item) => (
                        <LargerCheckListItem
                            key={`makkah-${item.id}`}
                            title={item.name}
                            description={item.description}
                            checked={item.checked}
                            onCheckedChange={(next) =>
                                makkahToggle.mutate({ id: item.id as number, checked: next })
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
