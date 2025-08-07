import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TopBar from "@/components/top-bar";
import BottomBar from "@/components/bottom-bar";
import { BookOpenText, CheckSquare, Home, Map, Building2 } from "lucide-react";

const routeKeyToPath: Record<string, string> = {
  home: "/",
  checklist: "/checklist",
  makkah: "/makkah",
  medina: "/medina",
  about: "/about",
};

const pathToRouteKey: Record<string, string> = {
  "/": "home",
  "/checklist": "checklist",
  "/makkah": "makkah",
  "/medina": "medina",
  "/about": "about",
};

const titles: Record<string, string> = {
  home: "Home",
  checklist: "Checklist",
  makkah: "Makkah",
  medina: "Medina",
  about: "About / Learn",
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeKey = pathToRouteKey[location.pathname] ?? "home";

  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "checklist", label: "Checklist", icon: CheckSquare },
    { key: "makkah", label: "Makkah", icon: Map },
    { key: "medina", label: "Medina", icon: Building2 },
    { key: "about", label: "About/Learn", icon: BookOpenText },
  ];

  return (
    <div className="mx-auto min-h-dvh w-full max-w-md bg-background">
      <TopBar title={titles[activeKey]} />

      <main className="mx-auto max-w-md px-4 pt-24 pb-28">
        <Outlet />
      </main>

      <BottomBar
        items={items}
        activeKey={activeKey}
        onChange={(key) => navigate(routeKeyToPath[key] ?? "/")}
      />
    </div>
  );
}
