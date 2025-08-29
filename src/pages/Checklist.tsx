import type { FC } from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGetChecklist } from "@/hooks/checklist/useGetChecklist";
import { useAddChecklistItem } from "@/hooks/checklist/useAddChecklistItem";
import { useRemoveChecklistItem } from "@/hooks/checklist/useRemoveChecklistItem";
import { useSetChecklistItemChecked } from "@/hooks/checklist/useSetChecklistItemChecked";
import { ChecklistItem } from "@/components/checklist-item";
import { Progress } from "@/components/ui/progress";

const isValid = (value: string) =>
  value.trim().length > 0 && value.trim().length <= 200;

export const Checklist: FC = () => {
  const [text, setText] = useState("");

  const { data: items = [], isLoading } = useGetChecklist();
  const addMutation = useAddChecklistItem();
  const removeMutation = useRemoveChecklistItem();
  const setCheckedMutation = useSetChecklistItemChecked();

  const onAdd = () => {
    if (!isValid(text)) return;
    addMutation.mutate(text, {
      onSuccess: () => setText(""),
    });
  };

  const total = items.length;
  const completed = items.filter((i) => i.checked).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Preparation Checklist</h2>
      </div>

      <div className="space-y-2">
        <div className="text-muted-foreground flex items-center justify-between text-xs">
          <span>
            {completed} of {total} completed ({percent}%)
          </span>
        </div>
        <Progress value={percent} />
      </div>

      <div className="flex w-full items-center gap-2">
        <Input
          placeholder={`Add a preparation item...`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
        />
        <Button
          onClick={onAdd}
          disabled={!isValid(text) || addMutation.isPending}
        >
          {addMutation.isPending ? "Adding..." : "Add"}
        </Button>
      </div>

      {isLoading ? (
        <div className="text-muted-foreground text-sm">Loading...</div>
      ) : (
        <ul className="flex w-full flex-col gap-2">
          {items.map((item) => (
            <li key={item.id} className="flex w-full">
              <ChecklistItem
                id={`item-${item.id}`}
                text={item.text}
                checked={item.checked}
                onCheckedChange={(checked) =>
                  setCheckedMutation.mutate({
                    id: item.id!,
                    checked: Boolean(checked),
                  })
                }
                onDelete={() => removeMutation.mutate(item.id!)}
                className="w-full"
              />
            </li>
          ))}
          {items.length === 0 ? (
            <li className="text-muted-foreground text-sm">No items yet.</li>
          ) : null}
        </ul>
      )}
    </div>
  );
};
