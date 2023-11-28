import React from "react";
import FullSection from "./full_section";

export default function FullSectionsHolder({ children }) {
    return (
        <div className="flex flex-col">
            {children.map((e, index) => {
                return <FullSection key={String(index) + String("FullSection")} children={e} />;
            })}
        </div>
    );
}
