import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  removeChecklistItem,
  type ChecklistCategory,
} from "@/services/checklist";

export const useRemoveChecklistItem = (category: ChecklistCategory) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => removeChecklistItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["checklist", category] });
    },
  });
};
