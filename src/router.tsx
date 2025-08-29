import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { Checklist } from "@/pages/Checklist";
import { Makkah } from "@/pages/Makkah/Makkah";
import { Medina } from "@/pages/Medina/Medina";
import { Learn } from "@/pages/Learn/Learn";
import { SecondaryLayout } from "@/layouts/SecondaryLayout";
import { InstallGate } from "@/layouts/InstallGate";
import { MasjidAnNabawi } from "@/pages/Medina/SubPages/MasjidAnNabawi";
import { GivingSalawaat } from "@/pages/Medina/SubPages/GivingSalawaat";
import { Rawdah } from "@/pages/Medina/SubPages/Rawdah";
import { AlBaqee } from "@/pages/Medina/SubPages/AlBaqee";
import { RecommendedActsMedina } from "@/pages/Medina/SubPages/RecommendedActsMedina";
import { Ihram } from "@/pages/Makkah/SubPages/Ihram";
import { TravelMeeqat } from "@/pages/Makkah/SubPages/TravelMeeqat";
import { Umrah } from "@/pages/Makkah/SubPages/Umrah";
import { Quran } from "@/pages/Learn/SubPages/Quran";
import { Sunnah } from "@/pages/Learn/SubPages/Sunnah";
import { Fiqh } from "@/pages/Learn/SubPages/Fiqh";
import { Faqs } from "@/pages/Learn/SubPages/Faqs";
import { UsefulInSaudiArabia } from "@/pages/Learn/SubPages/UsefulInSaudiArabia";
import { Settings } from "@/pages/Settings";
import { Ziyaarah } from "@/pages/Ziyaarah/Ziyaarah";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InstallGate />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Checklist /> },
          { path: "checklist", element: <Checklist /> },
          { path: "makkah", element: <Makkah /> },
          { path: "medina", element: <Medina /> },
          { path: "ziyaarah", element: <Ziyaarah /> },
          { path: "learn", element: <Learn /> },
        ],
      },
      {
        path: "/settings",
        element: <SecondaryLayout />,
        children: [
          { index: true, element: <Settings /> },
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

        ],
      },
      {
        path: "/makkah",
        element: <SecondaryLayout />,
        children: [
          { path: "ihram", element: <Ihram /> },
          { path: "travel-meeqat", element: <TravelMeeqat /> },
          { path: "umrah", element: <Umrah /> },
        ],
      },
      {
        path: "/learn",
        element: <SecondaryLayout />,
        children: [
          { path: "quran", element: <Quran /> },
          { path: "sunnah", element: <Sunnah /> },
          { path: "fiqh", element: <Fiqh /> },
          { path: "faqs", element: <Faqs /> },
          { path: "useful-in-saudi-arabia", element: <UsefulInSaudiArabia /> },
        ],
      },
    ],
  },
]);
