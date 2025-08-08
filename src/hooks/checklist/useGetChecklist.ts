import { useQuery } from "@tanstack/react-query";
import { getChecklist, type ChecklistCategory } from "@/services/checklist";

export const useGetChecklist = (category: ChecklistCategory) => {
  return useQuery({
    queryKey: ["checklist", category],
    queryFn: () => getChecklist(category),
  });
};
