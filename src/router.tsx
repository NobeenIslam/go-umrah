import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { HomePage } from "@/pages/HomePage";
import { ChecklistPage } from "@/pages/ChecklistPage";
import { MakkahPage } from "@/pages/MakkahPage";
import { MedinaPage } from "@/pages/MedinaPage";
import { AboutPage } from "@/pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "checklist", element: <ChecklistPage /> },
      { path: "makkah", element: <MakkahPage /> },
      { path: "medina", element: <MedinaPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);
