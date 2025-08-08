import { db } from "@/db/dexie";
import type { ZiyarahItem, ZiyarahKind } from "@/types/db/models";

export async function getZiyarah(kind: ZiyarahKind): Promise<ZiyarahItem[]> {
  return await db.ziyarah.where({ kind }).sortBy("createdAt");
}

export async function setZiyarahChecked(
  kind: ZiyarahKind,
  id: number,
  checked: boolean
): Promise<number> {
  // Ensure we only update within the requested kind
  const item = await db.ziyarah.get(id);
  if (item && item.kind === kind) {
    return await db.ziyarah.update(id, { checked });
  }
  return 0;
}
