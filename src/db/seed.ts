import type { ZiyarahItem } from "@/types/db/models";

export const makkahSeeds: Omit<ZiyarahItem, "id" | "kind">[] = [
  {
    name: "Cave of Hira",
    description: "Where Prophet received first revelation",
    checked: false,
    createdAt: new Date(1),
  },
  {
    name: "Jabal Thur",
    description: "The cave of migration (Ghar Thur)",
    checked: false,
    createdAt: new Date(2),
  },
  {
    name: "Masjid al-Haram - Historic spots",
    description: "Sites around the Haram of historical significance",
    checked: false,
    createdAt: new Date(3),
  },
];

export const medinaSeeds: Omit<ZiyarahItem, "id" | "kind">[] = [
  {
    name: "Masjid Quba",
    description: "First mosque built in Islam",
    checked: false,
    createdAt: new Date(1),
  },
  {
    name: "Mount Uhud",
    description: "Site of the Battle of Uhud",
    checked: false,
    createdAt: new Date(2),
  },
  {
    name: "Masjid Qiblatain",
    description: "Mosque of the two qiblahs",
    checked: false,
    createdAt: new Date(3),
  },
];
