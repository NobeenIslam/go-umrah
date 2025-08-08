import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { TopBar } from "@/components/top-bar";
import { BottomBar } from "@/components/bottom-bar";
import { BookOpenText, CheckSquare, Home, Building2, Box } from "lucide-react";

const TABS = [
  { path: "/", label: "Home", icon: Home },
  { path: "/checklist", label: "Checklist", icon: CheckSquare },
  { path: "/medina", label: "Medina", icon: Building2 },
  { path: "/makkah", label: "Makkah", icon: Box },
  { path: "/learn", label: "Learn", icon: BookOpenText },
] as const;

export const RootLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activePath = location.pathname;
  const activeTab = TABS.find((t) => t.path === activePath) ?? TABS[0];

  return (
    <div className="mx-auto min-h-dvh w-full max-w-md bg-background">
      <TopBar title={activeTab.label} />

      <main className="mx-auto max-w-md px-4 pt-24 pb-28">
        <Outlet />
      </main>

      <BottomBar
        items={TABS.map(({ path, label, icon }) => ({
          key: path,
          label,
          icon,
        }))}
        activeKey={activePath}
        onChange={(path) => navigate(path)}
      />
    </div>
  );
};
