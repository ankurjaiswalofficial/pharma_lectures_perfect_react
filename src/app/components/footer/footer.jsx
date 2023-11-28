import React from "react";
import Link from "../base/link";
// import Head from "next/head";
export default function Footer() {
    const links = [
        ["facebook", "#facebook"],
        ["instagram", "#instagram"],
        ["telegram", "https://t.me/pharmalecture1"],
        ["twitter", "https://twitter.com/LecturesPharma"],
        ["youtube", "https://www.youtube.com/@Pharmalectures"],
    ];
    return (
        <>
            <footer className="w-full h-20 flex flex-row flex-nowrap justify-center items-center bg-gray-800">
                <ul className="flex flex-row justify-center items-center gap-10">
                    <li className="text-white text-xl">
                        &copy; Pharma lectures. All Rights Reserved
                    </li>
                    <li className="text-white text-xl">
                        <Link href={"/privacy_policy"}>Privacy Policy</Link>
                    </li>
                    <li className="text-white text-xl">
                        <ul className="flex flex-row justify-center items-center gap-10">
                            {links.map((e, index) => {
                                return (
                                    <li key={String(index) + String("links")} className="">
                                        <Link href={e[1]} about={e[0]} title={e[0]}>
                                            <i
                                                className={
                                                    "bi bi-" +
                                                    String(e[0]) +
                                                    " text-3xl font-bold"
                                                }
                                            >
                                            </i>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                </ul>
                {/* <Head> */}
                    <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
                integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e"
                crossOrigin="anonymous"
                key={"icons"}
            />
                {/* </Head> */}
            </footer>
        </>
    );
}
