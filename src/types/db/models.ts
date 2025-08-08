export interface ChecklistItem {
  id?: number;
  text: string;
  checked: boolean;
  category: "makkah" | "medina" | "personal";
  createdAt: Date;
}
