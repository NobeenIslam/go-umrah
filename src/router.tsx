import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { Home } from "@/pages/Home";
import { Checklist } from "@/pages/Checklist";
import { Makkah } from "@/pages/Makkah/Makkah";
import { Medina } from "@/pages/Medina/Medina";
import { About } from "@/pages/About";
import { SecondaryLayout } from "@/layouts/SecondaryLayout";
import { MasjidAnNabawi } from "@/pages/Medina/SubPages/MasjidAnNabawi";
import { GivingSalawaat } from "@/pages/Medina/SubPages/GivingSalawaat";
import { Rawdah } from "@/pages/Medina/SubPages/Rawdah";
import { AlBaqee } from "@/pages/Medina/SubPages/AlBaqee";
import { RecommendedActsMedina } from "@/pages/Medina/SubPages/RecommendedActsMedina";
import { MedinaZiyarah } from "@/pages/Medina/SubPages/MedinaZiyarah";
import { Ihram } from "@/pages/Makkah/SubPages/Ihram";
import { TravelMeeqat } from "@/pages/Makkah/SubPages/TravelMeeqat";
import { Umrah } from "@/pages/Makkah/SubPages/Umrah";
import { MakkahZiyarah } from "@/pages/Makkah/SubPages/MakkahZiyarah";

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
  {
    path: "/makkah",
    element: <SecondaryLayout />,
    children: [
      { path: "ihram", element: <Ihram /> },
      { path: "travel-meeqat", element: <TravelMeeqat /> },
      { path: "umrah", element: <Umrah /> },
      { path: "makkah-ziyarah", element: <MakkahZiyarah /> },
    ],
  },
]);
