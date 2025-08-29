import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { TopBar } from "@/components/top-bar";
import { ArrowLeft } from "lucide-react";

export const SecondaryLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className="mx-auto min-h-dvh w-full max-w-md bg-background">
      <TopBar
        title={activePath === "/settings" ? "Settings" : ""}
        leftIcon={ArrowLeft}
        onLeftIconClick={() => navigate(-1)}
        variant="secondary"
      />

      <main className="mx-auto max-w-md px-4 pt-24 pb-6">
        <Outlet />
      </main>
    </div>
  );
};
