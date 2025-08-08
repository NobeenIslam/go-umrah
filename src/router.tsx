import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { HomePage } from "@/pages/HomePage";
import { ChecklistPage } from "@/pages/ChecklistPage";
import { MakkahPage } from "@/pages/MakkahPage";
import { MedinaPage } from "@/pages/MedinaPage";
import { AboutPage } from "@/pages/AboutPage";

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
]);
