import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import ConnectSocially from "./components/main/connect_socially";

export default function HomePage() {
    return (
        <>
            <Header />
            <Main
                children={{
                    has_breadcrumbs: false,
                    has_search: true,
                    full_sections: [
                        {
                            "description": "study content",
                            "banner_text": "choose your semester",
                            "buttons": [
                                {
                                    "link": "/b_pharmacy/sem_1",
                                    "image": {
                                        "src": "/img/medical_book_1.png",
                                        "alt": "Medical Book 1",
                                        "about": "Medical Book 1 - Ist Semester"
                                    },
                                    "text": {
                                        "header": "Ist Semester"
                                    }
                                },
                                {
                                    "link": "/b_pharmacy/sem_2",
                                    "image": {
                                        "src": "/img/medical_book_2.png",
                                        "alt": "Medical Book 2",
                                        "about": "Medical Book 2 - IIst Semester"
                                    },
                                    "text": {
                                        "header": "IIst Semester"
                                    }
                                },
                                {
                                    "link": "/b_pharmacy/sem_3",
                                    "image": {
                                        "src": "/img/medical_book_3.png",
                                        "alt": "Medical Book 3",
                                        "about": "Medical Book 3 - IIIst Semester"
                                    },
                                    "text": {
                                        "header": "IIIst Semester"
                                    }
                                },
                                {
                                    "link": "/b_pharmacy/sem_4",
                                    "image": {
                                        "src": "/img/medical_book_4.png",
                                        "alt": "Medical Book 4",
                                        "about": "Medical Book 4 - IVth Semester"
                                    },
                                    "text": {
                                        "header": "IVth Semester"
                                    }
                                },
                                {
                                    "link": "/b_pharmacy/sem_5",
                                    "image": {
                                        "src": "/img/medical_book_5.png",
                                        "alt": "Medical Book 5",
                                        "about": "Medical Book 5 - Vst Semester"
                                    },
                                    "text": {
                                        "header": "Vst Semester"
                                    }
                                },
                                {
                                    "link": "/b_pharmacy/sem_6",
                                    "image": {
                                        "src": "/img/medical_book_6.png",
                                        "alt": "Medical Book 6",
                                        "about": "Medical Book 6 - VIst Semester"
                                    },
                                    "text": {
                                        "header": "VIst Semester"
                                    }
                                },
                                {
                                    "link": "/b_pharmacy/sem_7",
                                    "image": {
                                        "src": "/img/medical_book_7.png",
                                        "alt": "Medical Book 7",
                                        "about": "Medical Book 7 - VIIst Semester"
                                    },
                                    "text": {
                                        "header": "VIIst Semester"
                                    }
                                },
                                {
                                    "link": "/b_pharmacy/sem_8",
                                    "image": {
                                        "src": "/img/medical_book_8.png",
                                        "alt": "Medical Book 8",
                                        "about": "Medical Book 8 - VIIIth Semester"
                                    },
                                    "text": {
                                        "header": "VIIIth Semester"
                                    }
                                }
                            ],
                            "cards": [],
            "description_2": "proficiently designed content for you"
                        }
                    ],
                }}
            />
            <ConnectSocially children={{edit: ""}} />
            <Footer />
        </>
    );
}
