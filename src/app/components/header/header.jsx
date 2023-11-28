import Link from "../base/link";
import React from "react";
import Image from "../base/image";
export default function Header() {
    const pages = [
        ["Home", "/"],
        ["Notes", "b_pharmacy/notes"],
        ["Study Materials", "b_pharmacy"],
        // ["Video Lectures", "b_pharmacy/video_lectures"],
        ["Syllabus", "b_pharmacy/syllabus"],
        ["About", "/about_us"],
        ["Contact Us", "/contact_us"],
    ];
    return (
        <>
            <header className="w-full h-24 flex flex-row justify-between items-center bg-gray-800 px-4">
                <div className="h-full w-[24rem] flex justify-center items-center">
                    <Image
                        className="w-auto h-full"
                        alt="Pharma Lectures"
                        width={16*32}
                                height={9*32}
                        src={"/logo_main.png"}
                    />
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                    <ul className="w-full flex flex-row flex-nowrap gap-8 justify-center items-center">
                        {pages.map((e, index) => {
                            return (
                                    <li key={String(e[0]) + String(index)} className=" relative w-[11rem] h-12 font-bold text-s text-white text-xl transition-all duration-200 rounded-md p-2 flex flex-row whitespace-nowrap justify-center items-center hover:border-gray-800 hover:bg-white hover:text-gray-800 hover:font-extrabold hover:scale-150">
                                        <Link href={e[1]} className="absolute top-0 left-0 w-full h-full flex justify-center items-center whitespace-nowrap">{e[0]}</Link>
                                    </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="h-full w-[24rem] flex justify-center items-center p-2"></div>
            </header>
        </>
    );
}
