import React from "react";
import Header from "../components/header/header";
import BreadCrumb from "../components/base/breadcrumb";
import Footer from "../components/footer/footer";
import ConnectSocially from "../components/main/connect_socially";

export default function ContactUs() {
    return (
        <>
            <Header />
            <BreadCrumb
                children={{
                    breadcrumbs: [
                        {
                            href: "",
                            text: "Home",
                        },
                        {
                            href: "contact_us",
                            text: "Contact Us",
                            active: true,
                        },
                    ],
                    header: "Contact Us",
                    image: {
                        alt: "Contact Us Image",
                        src: "/img/contact_us.png",
                        about: "Contact Us - Pharma Lectures",
                    },
                }}
            />
            <ConnectSocially children={{edit: "Contact Us"}} />
            <Footer />
        </>
    );
}
