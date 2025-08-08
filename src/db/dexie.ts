import Dexie, { type Table } from "dexie";
import type { ChecklistItem, ZiyarahItem } from "@/types/db/models";
import { makkahSeeds, medinaSeeds } from "@/db/seed";

export class AppDatabase extends Dexie {
  checklist!: Table<ChecklistItem>;
  ziyarah!: Table<ZiyarahItem>;

  constructor() {
    super("goUmrahPwaDb");
    this.version(1).stores({
      checklist: "++id, text, checked, createdAt",
      ziyarah: "++id, kind, name, checked, createdAt",
    });

    this.on("populate", async () => {
      await this.ziyarah.bulkAdd([
        ...makkahSeeds.map((s) => ({ ...s, kind: "makkah" as const })),
        ...medinaSeeds.map((s) => ({ ...s, kind: "medina" as const })),
      ] as ZiyarahItem[]);
    });
  }
}

export const db = new AppDatabase();
