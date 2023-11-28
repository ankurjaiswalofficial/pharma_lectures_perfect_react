import Image from "../base/image";
import Link from "../base/link";
import React from "react";
import FileChecker from "../../api/fileChecker";
export default function BoxButton({ children }) {
    
    return (
        <>
            <div className="relative rounded-[1.2rem] text-indigo-950 bg-[#dddddd6b] dark:text-white dark:bg-indigo-950  hover:bg-indigo-950 hover:text-white hover:dark:bg-gray-100 hover:font-extrabold  dark:hover:text-indigo-950  transition-all duration-150 hover:scale-110 hover:z-20 z-10 border-gray-300 border-[0.1rem] border-solid">
                <div className="relative flex justify-center items-center rounded-[1.2rem]">
                    <div className="min-h-[18rem] min-w-[30rem] w-[35rem] flex flex-col justify-center items-center flex-grow gap-[0.3rem] p-[2rem 1.5rem] rounded-[1.2rem]">
                        <div className="w-full mb-4 flex justify-center items-center">
                            <Image
                                className={"rounded-2xl h-32 w-auto"}
                                alt={children.image.alt}
                                src={children.image.src}
                                width={16 * 32}
                                height={9 * 32}
                                about={children.image.about}
                            />
                        </div>
                        <div className="text-3xl text-center break-words font-bold text-inherit px-1 capitalize w-10/12">
                            {children.text.header}
                        </div>
                        <div className="text-xl mb-4">
                            {children.text.description}
                        </div>
                    </div>
                    <Link
                        href={children.link}
                        disabled={true}
                        className="absolute top-0 left-0 w-full h-full"
                    ></Link>
                </div>
                {String(FileChecker(String("http://localhost:3000") + String(children.link)))}
                {children.disabled ? (
                    <div className="absolute w-full h-full top-0 left-0 bg-gray-200 bg-opacity-90 rounded-[1.2rem] flex justify-center items-center hover:bg-indigo-950 hover:dark:text-indigo-950 hover:dark:bg-gray-200 hover:bg-opacity-90 scale-105">
                        <h1 className="text-4xl text-center font-bold">
                            {"🙂"}
                            <br />
                            {"Coming Soon :)"}
                        </h1>
                    </div>
                ) : null}
            </div>
        </>
    );
}
