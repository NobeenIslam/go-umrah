export interface ChecklistItem {
  id?: number;
  text: string;
  checked: boolean;
  createdAt: Date;
}

export type ZiyarahKind = "makkah" | "medina";

export interface ZiyarahItem {
  id?: number;
  kind: ZiyarahKind;
  name: string;
  description: string;
  checked: boolean;
  createdAt: Date;
}
