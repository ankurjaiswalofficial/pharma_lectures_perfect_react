import React from "react";
import ButtonHolder from "./button_holder";
import BoxButton from "./box_button";
import TextSection from "./text_section";
// import DataCard from "./data_card";

export default function FullSection({ children }) {
    return (
        <>
            <div className="w-full py-8 flex flex-col justify-center items-center text-center gap-2 bg-[#fff4e541] dark:bg-orange-100">
                <>
                    {children.description && (
                        <div className="text-2xl font-medium uppercase whitespace-nowrap">
                            {children.description}
                        </div>
                    )}

                    {children.banner_text && (
                        <div className="capitalize text-5xl font-bold whitespace-nowrap">
                            {children.banner_text}&nbsp;
                            {children.banner_text_span && (
                                <span className="capitalize text-5xl font-bold text-[#543eeb]">
                                    {children.banner_text_span}
                                </span>
                            )}
                        </div>
                    )}

                    {children.banner_text_1 && (
                        <div className="capitalize text-3xl whitespace-normal font-semibold">
                            {children.banner_text_1}&nbsp;
                            {children.banner_text_1_span && (
                                <span className="capitalize text-3xl text-[#543eeb] font-semibold">
                                    {children.banner_text_1_span}
                                </span>
                            )}
                        </div>
                    )}

                    {children.banner_text_2 && (
                        <div className="capitalize text-2xl text-[#543eeb] font-semibold">
                            {children.banner_text_2}&nbsp;
                            {children.banner_text_2_span && (
                                <span className="capitalize text-xl text-[#543eeb] font-semibold">
                                    {children.banner_text_2_span}
                                </span>
                            )}
                        </div>
                    )}
                </>
                <div className="capitalize text-3xl font-bold text-[#543eeb]">
                        B-Pharmacy
                </div>
                <ButtonHolder>
                    {children.buttons.map((buttonData, index) => (
                        <BoxButton key={String(index) + String("buttons")} children={buttonData} />
                    ))}
                </ButtonHolder>
                
                {/* <ButtonHolder>
                    {children.cards ? children.cards.map((cardData, index) => (
                        <DataCard key={String(index) + String("cards")} children={cardData} />
                    )) : null}
                </ButtonHolder> */}

                {children.has_text_content
                    ? children.text_contents.map((e1, index) => {
                          return <TextSection key={String(index) + String("text_contents")} children={e1} />;
                      })
                    : null}
                {children.description_2 && (
                    <div className="capitalize text-xl font-semibold">
                        {children.description_2}
                    </div>
                )}
                
            </div>
        </>
    );
}
