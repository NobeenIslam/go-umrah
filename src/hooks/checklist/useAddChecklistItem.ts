import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addChecklistItem, type ChecklistCategory } from "@/services/checklist";

export const useAddChecklistItem = (category: ChecklistCategory) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (text: string) => addChecklistItem(text, category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["checklist", category] });
    },
  });
};
