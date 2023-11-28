import React from "react";

export default function ButtonHolder({ children }) {
    return (
        <>
            <div className="w-full m-4 p-4 px-20 flex flex-row flex-wrap justify-center items-center gap-12">
                {children}
            </div>
        </>
    );
}
