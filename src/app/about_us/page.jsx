import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Main from "../components/main/main";

export default function AboutUs() {
    return (
        <>
            
            <Header />
            <Main
                children={{
                    has_breadcrumbs: true,
                    breadcrumbs: {
                        breadcrumbs: [
                            {
                                href: "",
                                text: "Home",
                            },
                            {
                                href: "about_us",
                                text: "About Us",
                                active: true,
                            },
                        ],
                        header: "About Us",
                        image: {
                            alt: "About Us Image",
                            src: "/img/about_us.png",
                            about: "About Us - Pharma Lectures",
                        },
                    },
                    has_search: false,
                    full_sections: [
                        {
                            description: "",
                            banner_text_1: "At Pharmalectures, we are passionate about empowering the future of pharmaceutical excellence. Our commitment is to provide a comprehensive platform that bridges the gap between knowledge and practice in the dynamic world of pharmacy and pharmaceutical sciences.",
                            buttons: [],
                        },
                        {
                            description: "",
                            banner_text_1: " With a team of dedicated experts and educators, we deliver high-quality lectures, engaging content, and valuable insights, tailored to meet the needs of students, professionals, and enthusiasts alike. We believe in the power of education and innovation to drive the pharmaceutical industry forward, and our mission is to be your trusted partner in this journey.",
                            buttons: [],
                        },
                        {
                            description: "",
                            banner_text_1: " Our platform is designed to inspire, inform, and ignite your passion for all things pharmaceutical. We strive to create a vibrant and supportive community where learning knows no bounds, and where the pursuit of knowledge is as exciting as it is rewarding.",
                            buttons: [],
                        },
                        {
                            description: "",
                            banner_text_1: " Join us at Pharmalectures, where your journey towards excellence in pharmaceutical sciences begins. Together, we'll explore new horizons, unravel the complexities of this ever-evolving field, and unlock the potential to make a positive impact on the health and well-being of individuals worldwide. Welcome to a world of endless possibilities, welcome to Pharmalectures.",
                            buttons: [],
                        }
                    ],
                }}
            >
            </Main>
            <Footer />
        </>
    );
}
