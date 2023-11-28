import React from "react";
import SearchField from "./search_field";

export default function SearchSection({ children }) {
    return (
        <div className="w-full py-24 flex flex-col justify-center items-center text-center gap-12 bg-[#fff4e541] dark:bg-orange-100">
            <div className="text-2xl font-medium uppercase whitespace-nowrap">
                100% Quality Content
            </div>

            <div className="capitalize text-6xl font-bold whitespace-nowrap mb-10">
                Find the best Online Content <br /> &amp; Learn with us
            </div>

            <SearchField />

            <div className="capitalize text-xl font-semibold mt-5">
                Leading companies use the same courses to help employees keep their skills fresh.
            </div>
        </div>
    );
}
