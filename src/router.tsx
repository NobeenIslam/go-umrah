import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { HomePage } from "@/pages/HomePage";
import { ChecklistPage } from "@/pages/ChecklistPage";
import { MakkahPage } from "@/pages/MakkahPage";
import { MedinaPage } from "@/pages/MedinaPage";
import { AboutPage } from "@/pages/AboutPage";
import { SecondaryLayout } from "@/layouts/SecondaryLayout";
import { MasjidAnNabawiPage } from "@/pages/Medina/MasjidAnNabawiPage";
import { GivingSalawaatPage } from "@/pages/Medina/GivingSalawaatPage";
import { RawdahPage } from "@/pages/Medina/RawdahPage";
import { AlBaqeePage } from "@/pages/Medina/AlBaqeePage";
import { ZiyarahPage } from "@/pages/Medina/ZiyarahPage";
import { RecommendedActsMedinaPage } from "@/pages/Medina/RecommendedActsMedinaPage";
import { MedinaZiyarahPage } from "@/pages/Medina/MedinaZiyarahPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "checklist", element: <ChecklistPage /> },
      { path: "makkah", element: <MakkahPage /> },
      { path: "medina", element: <MedinaPage /> },
      { path: "learn", element: <AboutPage /> },
    ],
  },
  {
    path: "/medina",
    element: <SecondaryLayout />,
    children: [
      { path: "masjid-an-nabawi", element: <MasjidAnNabawiPage /> },
      { path: "giving-salawaat", element: <GivingSalawaatPage /> },
      { path: "rawdah", element: <RawdahPage /> },
      { path: "al-baqee", element: <AlBaqeePage /> },
      { path: "recommended-acts", element: <RecommendedActsMedinaPage /> },
      { path: "medina-ziyarah", element: <MedinaZiyarahPage /> },
      { path: "ziyarah", element: <ZiyarahPage /> },
    ],
  },
]);
