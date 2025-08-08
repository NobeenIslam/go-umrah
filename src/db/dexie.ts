import Dexie, { type Table } from "dexie";
import type { ChecklistItem } from "@/types/db/models";

export class AppDatabase extends Dexie {
  checklist!: Table<ChecklistItem>;

  constructor() {
    super("goUmrahPwaDb");
    // Single version schema for early dev; delete DB manually when changing fields
    this.version(1).stores({
      checklist: "++id, text, checked, createdAt",
    });
  }
}

export const db = new AppDatabase();
