import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setZiyarahChecked } from "@/services/ziyarah";
import type { ZiyarahKind } from "@/types/db/models";

export function useSetZiyarahChecked(kind: ZiyarahKind) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, checked }: { id: number; checked: boolean }) =>
      setZiyarahChecked(kind, id, checked),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ziyarah", kind] });
    },
  });
}
