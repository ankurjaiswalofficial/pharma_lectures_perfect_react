import React from "react";
import BoxButton from "./box_button";

export default function TextSection({ children }) {
    return (
        <div className="w-full flex flex-col justify-center items-start gap-12 p-8 px-14">
            <h1 className="font-bold text-5xl">{children.header ? "🎯 " + children.header : null}</h1>
            {children.articles.map((e, index) => {
                return (
                    <article key={String(index) + String("articles")} className="w-full px-8 flex flex-col justify-center items-start gap-6">
                        <h2 className="font-semibold text-4xl">{e.header ? "➡️ " + e.header : null}</h2>
                        <ul className="w-11/12 flex flex-col justify-start items-start gap-8">
                            {e.contents.map((e1, index) => {
                                return (
                                    <li key={String(index) + String("contents")} className="w-full list-none flex flex-col justify-start items-start gap-2">
                                        <h3 className="px-2 font-medium text-3xl break-word text-start">
                                            {e1.header}
                                        </h3>
                                        <p className="pl-8 text-2xl break-all text-start">
                                            {e1.paragraph}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                        {e.has_button
                            ? e.buttons.map((e2, index) => {
                                  return (
                                      <div key={String(index) + String("buttons1")} className="w-full my-6 flex flex-row flex-wrap justify-center items-center gap-10">
                                          <BoxButton children={e2} />
                                      </div>
                                  );
                              })
                            : null}
                    </article>
                );
            })}
            <hr className="h-1 w-full bg-gray-700 dark:bg-orange-200" />
        </div>
    );
}
