import { useQuery } from "@tanstack/react-query";
import { getChecklist } from "@/services/checklist";

export const useGetChecklist = () => {
  return useQuery({
    queryKey: ["checklist"],
    queryFn: () => getChecklist(),
  });
};
