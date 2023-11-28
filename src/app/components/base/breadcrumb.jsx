import Image from "../base/image";
import Link from "../base/link";
import React from "react";

export default function BreadCrumb({ children }) {
    return (
        <>
            <hr className="bg-gray-600 h-1" />
            <div className="w-full py-8 flex flex-row justify-center items-center text-center gap-2 bg-[#fff4e541] dark:bg-orange-100">
                <div className="w-9/12 flex flex-col gap-7 justify-start items-start">
                    <ul className="z-10 flex flex-row flex-nowrap justify-center items-center gap-2 bg-[#fff4e541] dark:bg-orange-100">
                        {children.breadcrumbs.map((e, index) => {
                            return (
                                <>
                                    <li
                                        key={String(index) + String("breadcrumbs")}
                                        className={
                                            "z-10 list-none text-2xl font-semibold flex flex-row flex-nowrap justify-center items-center align-middle " +
                                            (e.active
                                                ? "text-[#543eeb]"
                                                : "text-[#241442]")
                                        }
                                    >
                                        <div className="mr-2">
                                            <span>👉</span>
                                        </div>
                                        <Link
                                            href={"/" + e.href}
                                            className="text-xl"
                                        >
                                            {e.text}
                                        </Link>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                    <div className="pl-2 text-4xl mt-4 text-[#241442] font-bold capitalize">
                        {children.header}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        className="h-48 w-auto"
                        alt={children.image.alt}
                        src={children.image.src}
                        about={children.image.about}
                        width={16 * 32}
                        height={9 * 32}
                    />
                </div>
            </div>
            <hr className="bg-neutral-100 dark:bg-orange-200 h-1" />
        </>
    );
}
