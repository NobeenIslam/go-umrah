import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setChecklistItemChecked } from "@/services/checklist";

export const useSetChecklistItemChecked = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, checked }: { id: number; checked: boolean }) =>
      setChecklistItemChecked(id, checked),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["checklist"] });
    },
  });
};
