import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addChecklistItem } from "@/services/checklist";

export const useAddChecklistItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (text: string) => addChecklistItem(text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["checklist"] });
    },
  });
};
