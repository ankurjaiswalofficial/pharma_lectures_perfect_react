import Link from "../base/link";
import React from "react";

export default function SearchField() {
    return (
        <div className="w-8/12 h-22 flex flex-row justify-center items-center flex-grow rounded-2xl pl-4 p-2 bg-neutral-50 dark:bg-orange-50 border-[0.2rem] border-slate-700">
            <div className="text-xl whitespace-nowrap font-semibold">
                B-Pharma
            </div>
            <input
                type="text"
                name="query"
                className="w-full font-medium p-3 m-1 mx-2 text-2xl bg-inherit outline-none border-x-[0.3px] border-slate-200"
                placeholder="Find any B-Pharmacy Content"
            />
            <div className="relative flex flex-row flex-nowrap justify-center items-center text-2xl font-medium bg-gray-800 text-white p-4 rounded-2xl">
                <i className="bi bi-search"></i>&nbsp;&nbsp;
                <span>Search</span>
                <Link
                    href={"/search"}
                    className="absolute top-0 left-0 w-full h-full"
                ></Link>
            </div>
        </div>
    );
}
