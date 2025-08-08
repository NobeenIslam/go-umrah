import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setChecklistItemChecked,
  type ChecklistCategory,
} from "@/services/checklist";

export const useSetChecklistItemChecked = (category: ChecklistCategory) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, checked }: { id: number; checked: boolean }) =>
      setChecklistItemChecked(id, checked),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["checklist", category] });
    },
  });
};
