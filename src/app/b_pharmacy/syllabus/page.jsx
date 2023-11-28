import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";

export default function Syllabus() {
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
                                href: "b_pharmacy",
                                text: "B-Pharmacy",
                            },
                            {
                                href: "syllabus",
                                text: "Syllabus",
                                active: true,
                            },
                        ],
                        header: "B-Pharmacy Syllabus",
                        image: {
                            alt: "B-Pharmacy Related Image",
                            src: "/img/syllabus.png",
                            about: "B-Pharmacy Syllabus - Study Material",
                        },
                    },
                    has_search: false,
                    full_sections: [
                        {
                            description: "study content",
                            banner_text: "Semester Wise Syllabus",
                            buttons: [
                                {
                                    link: "/b_pharmacy/syllabus/sem_1",
                                    image: {
                                        src: "/img/medical_book_1.png",
                                        alt: "Medical Book Image",
                                        about: "About Image: Ist Semester",
                                    },
                                    text: {
                                        header: "Ist Semester",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/syllabus/sem_2",
                                    image: {
                                        src: "/img/medical_book_2.png",
                                        alt: "Medical Book Image",
                                        about: "About Image: 2nd Semester",
                                    },
                                    text: {
                                        header: "IInd Semester",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/syllabus/sem_3",
                                    image: {
                                        src: "/img/medical_book_3.png",
                                        alt: "Medical Book Image",
                                        about: "About Image: 3rd Semester",
                                    },
                                    text: {
                                        header: "IIIrd Semester",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/syllabus/sem_4",
                                    image: {
                                        src: "/img/medical_book_4.png",
                                        alt: "Medical Book Image",
                                        about: "About Image: 4th Semester",
                                    },
                                    text: {
                                        header: "IVth Semester",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/syllabus/sem_5",
                                    image: {
                                        src: "/img/medical_book_5.png",
                                        alt: "Medical Book Image",
                                        about: "About Image: 5th Semester",
                                    },
                                    text: {
                                        header: "Vth Semester",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/syllabus/sem_6",
                                    image: {
                                        src: "/img/medical_book_6.png",
                                        alt: "Medical Book Image",
                                        about: "About Image: 6th Semester",
                                    },
                                    text: {
                                        header: "VIth Semester",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/syllabus/sem_7",
                                    image: {
                                        src: "/img/medical_book_7.png",
                                        alt: "Medical Book Image",
                                        about: "About Image: 7th Semester",
                                    },
                                    text: {
                                        header: "VIIth Semester",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/syllabus/sem_8",
                                    image: {
                                        src: "/img/medical_book_8.png",
                                        alt: "Medical Book Image",
                                        about: "About Image: 8th Semester",
                                    },
                                    text: {
                                        header: "VIIIth Semester",
                                        description: "",
                                    },
                                },
                            ],
                            description_2: "_________________________",
                        },
                    ],
                }}
            />
            <Footer />
        </>
    );
}
