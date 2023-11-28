import React from "react";
import BasePage from "@/app/base";
import getJson from "@/app/api/getJson";
import underscoreToTitleCase from "@/app/api/underScoreToTitleCase";
import syllabusData from "@/app/api/syllabusData";
export async function getStaticPaths() {
    const paths = Object.keys(syllabusData).map((sem) => ({
        params: { sem },
    }));

    return {
        paths,
        fallback: false, // or 'blocking' if you want to handle missing pages differently
    };
}
export default function PYQS({ params }) {
    const sem = params.sem;
    const regex = /^sem_[1-8]$/;
    if (regex.test(sem) == false) {
        return <>Invalid Request</>;
    }
    let sem_pyqs = getJson(sem, "pyqs");
    return (
        <BasePage
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
                            href: "b_pharmacy/pyqs",
                            text: "PYQ's",
                        },
                        {
                            href:
                                "b_pharmacy/pyqs/sem_" +
                                String(sem.split("_")[1]),
                            text: "Semester " + String(sem.split("_")[1]),
                        },
                    ],
                    header:
                        "B-Pharmacy - Semester " +
                        String(sem.split("_")[1]) +
                        "  PYQS",
                    image: {
                        alt: "B-Pharmacy Related Image",
                        src: "/img/syllabus.png",
                        about:
                            "B-Pharmacy PYQS - " +
                            String(sem) +
                            " - Study Material",
                    },
                },
                has_search: false,
                full_sections: sem_pyqs.section_banners,
            }}
        />
    );
}
