import React from "react";
import sem_1_syllabus from "../../../jsons/syllabus/1.json";
import sem_2_syllabus from "../../../jsons/syllabus/2.json";
import sem_3_syllabus from "../../../jsons/syllabus/3.json";
import sem_4_syllabus from "../../../jsons/syllabus/4.json";
import sem_5_syllabus from "../../../jsons/syllabus/5.json";
import sem_6_syllabus from "../../../jsons/syllabus/6.json";
import sem_7_syllabus from "../../../jsons/syllabus/7.json";
import sem_8_syllabus from "../../../jsons/syllabus/8.json";
import BasePage from "@/app/base";
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
export default function SemesterSyllabus({ params }) {
    const sem = params.sem.split("_")[1];
    const regex = /^sem_[1-8]$/;
    if (regex.test(params.sem) == false) {
        return <>Invalid Request</>;
    }
    let sem_syllabus = null;
    switch (sem) {
        case "1":
            sem_syllabus = sem_1_syllabus;
            break;
        case "2":
            sem_syllabus = sem_2_syllabus;
            break;
        case "3":
            sem_syllabus = sem_3_syllabus;
            break;
        case "4":
            sem_syllabus = sem_4_syllabus;
            break;
        case "5":
            sem_syllabus = sem_5_syllabus;
            break;
        case "6":
            sem_syllabus = sem_6_syllabus;
            break;
        case "7":
            sem_syllabus = sem_7_syllabus;
            break;
        case "8":
            sem_syllabus = sem_8_syllabus;
            break;
        default:
            sem_syllabus = {};
            break;
    }
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
                            href: "b_pharmacy/syllabus",
                            text: "Syllabus",
                        },
                        {
                            href: "b_pharmacy/syllabus/sem_" + String(sem),
                            text: "Semester " + String(sem),
                            active: true,
                        },
                    ],
                    header:
                        "B-Pharmacy - Semester " + String(sem) + " Syllabus",
                    image: {
                        alt: "B-Pharmacy Related Image",
                        src: "/img/syllabus.png",
                        about:
                            "B-Pharmacy Syllabus - " +
                            String(sem) +
                            " - Study Material",
                    },
                },
                has_search: false,
                full_sections: sem_syllabus.section_banners,
            }}
        />
    );
}
