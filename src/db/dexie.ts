import Dexie, { type Table } from "dexie";
import type { ChecklistItem } from "@/types/db/models";

export class AppDatabase extends Dexie {
  checklist!: Table<ChecklistItem>;

  constructor() {
    super("goUmrahPwaDb");
    this.version(1).stores({
      checklist: "++id, text, checked, category, createdAt",
    });
  }
}

export const db = new AppDatabase();
