import { db } from "@/db/dexie";
import type { ChecklistItem } from "@/types/db/models";

export const getChecklist = async (): Promise<ChecklistItem[]> => {
  return await db.checklist.orderBy("createdAt").reverse().toArray();
};

export const addChecklistItem = async (text: string): Promise<number> => {
  const item: Omit<ChecklistItem, "id"> = {
    text,
    checked: false,
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
