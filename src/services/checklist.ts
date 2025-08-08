import { db } from "@/db/dexie";
import type { ChecklistItem } from "@/types/db/models";

export type ChecklistCategory = "makkah" | "medina" | "personal";

export const getChecklist = async (
  category: ChecklistCategory
): Promise<ChecklistItem[]> => {
  return await db.checklist
    .where("category")
    .equals(category)
    .reverse()
    .sortBy("createdAt");
};

export const addChecklistItem = async (
  text: string,
  category: ChecklistCategory
): Promise<number> => {
  const item: Omit<ChecklistItem, "id"> = {
    text,
    checked: false,
    category,
    createdAt: new Date(),
  };
  return await db.checklist.add(item as ChecklistItem);
};

export const removeChecklistItem = async (id: number): Promise<void> => {
  await db.checklist.delete(id);
};

export const setChecklistItemChecked = async (
  id: number,
  checked: boolean
): Promise<number> => {
  return await db.checklist.update(id, { checked });
};
