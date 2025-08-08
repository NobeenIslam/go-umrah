import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { Home } from "@/pages/Home";
import { Checklist } from "@/pages/Checklist";
import { Makkah } from "@/pages/Makkah";
import { Medina } from "@/pages/Medina";
import { About } from "@/pages/About";
import { SecondaryLayout } from "@/layouts/SecondaryLayout";
import { MasjidAnNabawi } from "@/pages/Medina/MasjidAnNabawi";
import { GivingSalawaat } from "@/pages/Medina/GivingSalawaat";
import { Rawdah } from "@/pages/Medina/Rawdah";
import { AlBaqee } from "@/pages/Medina/AlBaqee";
import { RecommendedActsMedina } from "@/pages/Medina/RecommendedActsMedina";
import { MedinaZiyarah } from "@/pages/Medina/MedinaZiyarah";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "checklist", element: <Checklist /> },
      { path: "makkah", element: <Makkah /> },
      { path: "medina", element: <Medina /> },
      { path: "learn", element: <About /> },
    ],
  },
  {
    path: "/medina",
    element: <SecondaryLayout />,
    children: [
      { path: "masjid-an-nabawi", element: <MasjidAnNabawi /> },
      { path: "giving-salawaat", element: <GivingSalawaat /> },
      { path: "rawdah", element: <Rawdah /> },
      { path: "al-baqee", element: <AlBaqee /> },
      { path: "recommended-acts", element: <RecommendedActsMedina /> },
      { path: "medina-ziyarah", element: <MedinaZiyarah /> },
    ],
  },
]);
