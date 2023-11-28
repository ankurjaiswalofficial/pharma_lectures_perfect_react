import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";

export default function Notes() {
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
                                href: "b_pharmacy/notes",
                                text: "Notes",
                                active: true
                            },
                        ],
                        header: "Hand Written Notes",
                        image: {
                            alt: "B-Pharmacy Related Image",
                            src: "/img/notes_1.png",
                            about: "B-Pharmacy HandWritten Notes - Study Material",
                        },
                    },
                    has_search: false,
                    full_sections: [
                        {
                            description: "study content",
                            banner_text: "1st Semester Notes",
                            buttons: [
                                {
                                    link: "/b_pharmacy/notes/sem_1/human_anatomy_and_physiology_1",
                                    image: {
                                        src: "/img/medical_book_1.png",
                                        alt: "Medical Book Image 1",
                                        about: "About Image 1",
                                    },
                                    text: {
                                        header: "Human Anatomy And Physiology 1",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_1/pharmaceutical_analysis",
                                    image: {
                                        src: "/img/medical_book_2.png",
                                        alt: "Medical Book Image 2",
                                        about: "About Image 2",
                                    },
                                    text: {
                                        header: "Pharmaceutical Analysis",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_1/pharmaceutics_1",
                                    image: {
                                        src: "/img/medical_book_3.png",
                                        alt: "Medical Book Image 3",
                                        about: "About Image 3",
                                    },
                                    text: {
                                        header: "Pharmaceutics 1",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_1/pharmaceutical_inorganic_chemistry",
                                    image: {
                                        src: "/img/medical_book_4.png",
                                        alt: "Medical Book Image 4",
                                        about: "About Image 4",
                                    },
                                    text: {
                                        header: "Pharmaceutical Inorganic Chemistry",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_1/communication_skills",
                                    image: {
                                        src: "/img/medical_book_5.png",
                                        alt: "Medical Book Image 5",
                                        about: "About Image 5",
                                    },
                                    text: {
                                        header: "Communication Skills",
                                        description: "",
                                    },
                                },
                            ],
                            description_2: "_________________________",
                        },
                        {
                            description: "study content",
                            banner_text: "2nd Semester Notes",
                            buttons: [
                                {
                                    link: "/b_pharmacy/notes/sem_2/human_anatomy_and_physiology_2",
                                    image: {
                                        src: "/img/medical_book_1.png",
                                        alt: "Medical Book Image 1",
                                        about: "About Image 1",
                                    },
                                    text: {
                                        header: "Human Anatomy And Physiology 2",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_2/biochemistry",
                                    image: {
                                        src: "/img/medical_book_2.png",
                                        alt: "Medical Book Image 2",
                                        about: "About Image 2",
                                    },
                                    text: {
                                        header: "Biochemistry",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_2/pathophysiology",
                                    image: {
                                        src: "/img/medical_book_3.png",
                                        alt: "Medical Book Image 3",
                                        about: "About Image 3",
                                    },
                                    text: {
                                        header: "Pathophysiology",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_2/pharmaceutical_organic_chemistry_1",
                                    image: {
                                        src: "/img/medical_book_4.png",
                                        alt: "Medical Book Image 4",
                                        about: "About Image 4",
                                    },
                                    text: {
                                        header: "Pharmaceutical Organic Chemistry 1",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_2/computer_applications",
                                    image: {
                                        src: "/img/medical_book_5.png",
                                        alt: "Medical Book Image 5",
                                        about: "About Image 5",
                                    },
                                    text: {
                                        header: "Computer Applications",
                                        description: "",
                                    },
                                },
                            ],
                            description_2: "_________________________",
                        },
                        {
                            description: "study content",
                            banner_text: "3rd Semester Notes",
                            buttons: [
                                {
                                    link: "/b_pharmacy/notes/sem_3/pharmaceutical_microbiology",
                                    image: {
                                        src: "/img/medical_book_1.png",
                                        alt: "Medical Book Image 1",
                                        about: "About Image 1",
                                    },
                                    text: {
                                        header: "Pharmaceutical Microbiology",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_3/pharmaceutical_organic_chemistry_2",
                                    image: {
                                        src: "/img/medical_book_2.png",
                                        alt: "Medical Book Image 2",
                                        about: "About Image 2",
                                    },
                                    text: {
                                        header: "Pharmaceutical Organic Chemistry 2",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_3/physical_pharmaceutics_1",
                                    image: {
                                        src: "/img/medical_book_3.png",
                                        alt: "Medical Book Image 3",
                                        about: "About Image 3",
                                    },
                                    text: {
                                        header: "Physical Pharmaceutics 1",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_3/pharmaceutical_engineering",
                                    image: {
                                        src: "/img/medical_book_4.png",
                                        alt: "Medical Book Image 4",
                                        about: "About Image 4",
                                    },
                                    text: {
                                        header: "Pharmaceutical Engineering",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_3/human_value_and_ethics",
                                    image: {
                                        src: "/img/medical_book_5.png",
                                        alt: "Medical Book Image 5",
                                        about: "About Image 5",
                                    },
                                    text: {
                                        header: "Human Value And Ethics",
                                        description: "",
                                    },
                                },
                            ],
                            description_2: "_________________________",
                        },
                        {
                            description: "study content",
                            banner_text: "4th Semester Notes",
                            buttons: [
                                {
                                    link: "/b_pharmacy/notes/sem_4/pharmacology_1",
                                    image: {
                                        src: "/img/medical_book_1.png",
                                        alt: "Medical Book Image 1",
                                        about: "About Image 1",
                                    },
                                    text: {
                                        header: "Pharmacology 1",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_4/pharmacognosy_1",
                                    image: {
                                        src: "/img/medical_book_2.png",
                                        alt: "Medical Book Image 2",
                                        about: "About Image 2",
                                    },
                                    text: {
                                        header: "Pharmacognosy 1",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_4/medicinal_chemistry_1",
                                    image: {
                                        src: "/img/medical_book_3.png",
                                        alt: "Medical Book Image 3",
                                        about: "About Image 3",
                                    },
                                    text: {
                                        header: "Medicinal Chemistry 1",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_4/pharmaceutical_organic_chemistry_3",
                                    image: {
                                        src: "/img/medical_book_4.png",
                                        alt: "Medical Book Image 4",
                                        about: "About Image 4",
                                    },
                                    text: {
                                        header: "Pharmaceutical Organic Chemistry 3",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_4/physical_pharmaceutics_2",
                                    image: {
                                        src: "/img/medical_book_5.png",
                                        alt: "Medical Book Image 5",
                                        about: "About Image 5",
                                    },
                                    text: {
                                        header: "Physical Pharmaceutics 2",
                                        description: "",
                                    },
                                },
                            ],
                            description_2: "_________________________",
                        },
                        {
                            description: "study content",
                            banner_text: "5th Semester Notes",
                            buttons: [
                                {
                                    link: "/b_pharmacy/notes/sem_5/medicinal_chemistry_2",
                                    image: {
                                        src: "/img/medical_book_1.png",
                                        alt: "Medical Book Image 1",
                                        about: "About Image 1",
                                    },
                                    text: {
                                        header: "Medicinal Chemistry 2",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_5/industrial_pharmacy_1",
                                    image: {
                                        src: "/img/medical_book_2.png",
                                        alt: "Medical Book Image 2",
                                        about: "About Image 2",
                                    },
                                    text: {
                                        header: "Industrial Pharmacy 1",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_5/pharmacology_2",
                                    image: {
                                        src: "/img/medical_book_3.png",
                                        alt: "Medical Book Image 3",
                                        about: "About Image 3",
                                    },
                                    text: {
                                        header: "Pharmacology 2",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_5/pharmacognosy_2",
                                    image: {
                                        src: "/img/medical_book_4.png",
                                        alt: "Medical Book Image 4",
                                        about: "About Image 4",
                                    },
                                    text: {
                                        header: "Pharmacognosy 2",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_5/pharmaceutical_jurisprudence",
                                    image: {
                                        src: "/img/medical_book_5.png",
                                        alt: "Medical Book Image 5",
                                        about: "About Image 5",
                                    },
                                    text: {
                                        header: "Pharmaceutical Jurisprudence",
                                        description: "",
                                    },
                                },
                            ],
                            description_2: "_________________________",
                        },
                        {
                            description: "study content",
                            banner_text: "6th Semester Notes",
                            buttons: [
                                {
                                    link: "/b_pharmacy/notes/sem_6/pharmacology_3",
                                    image: {
                                        src: "/img/medical_book_1.png",
                                        alt: "Medical Book Image 1",
                                        about: "About Image 1",
                                    },
                                    text: {
                                        header: "Pharmacology 3",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_6/medicinal_chemistry_3",
                                    image: {
                                        src: "/img/medical_book_2.png",
                                        alt: "Medical Book Image 2",
                                        about: "About Image 2",
                                    },
                                    text: {
                                        header: "Medicinal Chemistry 3",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_6/pharmaceutical_biotechnology",
                                    image: {
                                        src: "/img/medical_book_3.png",
                                        alt: "Medical Book Image 3",
                                        about: "About Image 3",
                                    },
                                    text: {
                                        header: "Pharmaceutical Biotechnology",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_6/herbal_drug_technology",
                                    image: {
                                        src: "/img/medical_book_4.png",
                                        alt: "Medical Book Image 4",
                                        about: "About Image 4",
                                    },
                                    text: {
                                        header: "Herbal Drug Technology",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_6/pharmaceutical_quality_assurance",
                                    image: {
                                        src: "/img/medical_book_5.png",
                                        alt: "Medical Book Image 5",
                                        about: "About Image 5",
                                    },
                                    text: {
                                        header: "Pharmaceutical Quality Assurance",
                                        description: "",
                                    },
                                },
                            ],
                            description_2: "_________________________",
                        },
                        {
                            description: "study content",
                            banner_text: "7th Semester Notes",
                            buttons: [
                                {
                                    link: "/b_pharmacy/notes/sem_7/industrial_pharmacy_2",
                                    image: {
                                        src: "/img/medical_book_1.png",
                                        alt: "Medical Book Image 1",
                                        about: "About Image 1",
                                    },
                                    text: {
                                        header: "Industrial Pharmacy 2",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_7/instrumental_methods_of_analysis",
                                    image: {
                                        src: "/img/medical_book_2.png",
                                        alt: "Medical Book Image 2",
                                        about: "About Image 2",
                                    },
                                    text: {
                                        header: "Instrumental Methods Of Analysis",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_7/novel_drug_delivery_systems",
                                    image: {
                                        src: "/img/medical_book_3.png",
                                        alt: "Medical Book Image 3",
                                        about: "About Image 3",
                                    },
                                    text: {
                                        header: "Novel Drug Delivery Systems",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_7/pharmacy_practice",
                                    image: {
                                        src: "/img/medical_book_4.png",
                                        alt: "Medical Book Image 4",
                                        about: "About Image 4",
                                    },
                                    text: {
                                        header: "Pharmacy Practice",
                                        description: "",
                                    },
                                },
                            ],
                            description_2: "_________________________",
                        },
                        {
                            description: "study content",
                            banner_text: "8th Semester Notes",
                            buttons: [
                                {
                                    link: "/b_pharmacy/notes/sem_8/social_and_preventive_pharmacy",
                                    image: {
                                        src: "/img/medical_book_1.png",
                                        alt: "Medical Book Image 1",
                                        about: "About Image 1",
                                    },
                                    text: {
                                        header: "Social And Preventive Pharmacy",
                                        description: "",
                                    },
                                },
                                {
                                    link: "/b_pharmacy/notes/sem_8/biostatistics_and_research_methodology",
                                    image: {
                                        src: "/img/medical_book_2.png",
                                        alt: "Medical Book Image 2",
                                        about: "About Image 2",
                                    },
                                    text: {
                                        header: "Biostatistics And Research Methodology",
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
