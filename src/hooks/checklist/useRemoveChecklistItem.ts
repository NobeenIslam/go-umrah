import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeChecklistItem } from "@/services/checklist";

export const useRemoveChecklistItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => removeChecklistItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["checklist"] });
    },
  });
};
