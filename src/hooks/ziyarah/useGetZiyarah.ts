import { useQuery } from "@tanstack/react-query";
import { getZiyarah } from "@/services/ziyarah";
import type { ZiyarahKind } from "@/types/db/models";

export function useGetZiyarah(kind: ZiyarahKind) {
  return useQuery({
    queryKey: ["ziyarah", kind],
    queryFn: () => getZiyarah(kind),
  });
}
