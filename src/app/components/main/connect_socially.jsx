import React from "react";
import FullSection from "../base/full_section";

export default function ConnectSocially({children}) {
    return (
        <FullSection
            children={{
                description: "our social platforms",
                banner_text: (children.edit || "connect with us"),
                banner_text_span: "socially",
                buttons: [
                    {
                        link: "https://www.youtube.com/@Pharmalectures",
                        image: {
                            src: "/img/youtube.png",
                            alt: "Youtube Image",
                            about: "Youtube Image - Social",
                        },
                        text: {
                            header: "Youtube",
                            description: "Subscribe Now...",
                        },
                    },
                    {
                        link: "https://t.me/pharmalecture1",
                        image: {
                            src: "/img/telegram.png",
                            alt: "Telegram Image",
                            about: "Telegram Image - Social",
                        },
                        text: {
                            header: "Telegram",
                            description: "Join Now...",
                        },
                    },
                    {
                        link: "https://twitter.com/LecturesPharma",
                        image: {
                            src: "/img/twitter.png",
                            alt: "Twitter Image",
                            about: "Twitter Image - Social",
                        },
                        text: {
                            header: "Twitter",
                            description: "Follow Us Now...",
                        },
                    },
                    //   {
                    //     link: "/1st_semester",
                    //     image: {
                    //         src: "/img/instagram.png",
                    //         alt: "Instagram Image",
                    //         about: "Instagram Image - Social",
                    //     },
                    //     text: {
                    //         header: "Instagram",
                    //         description: "Follow Us Now..."
                    //     },
                    // }
                ],
                description_2: "learn more easily by connecting socially with us",
            }}
        />
    );
}
