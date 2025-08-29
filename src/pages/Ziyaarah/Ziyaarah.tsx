import type { FC } from "react";
import { ZiyaarahSection } from "./ZiyaarahSection";

export const Ziyaarah: FC = () => {
    return (
        <div className="space-y-8">
            <ZiyaarahSection city="medina" title="Medina Ziyaarah" />
            <ZiyaarahSection city="makkah" title="Makkah Ziyaarah" />
        </div>
    );
};
