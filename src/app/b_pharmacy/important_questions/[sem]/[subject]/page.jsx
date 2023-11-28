import React from "react";
import BasePage from "@/app/base";
import getJson from "@/app/api/getJson";
import underscoreToTitleCase from "@/app/api/underScoreToTitleCase";
import notesData from "@/app/api/notesData";
export async function getStaticPaths() {
  const paths = notesData.map(([sem, subject, unit]) => ({
    params: { sem, subject },
  }));

  return {
    paths,
    fallback: false,
  };
}
export default function ImpqSubject({ params }) {
    const sem = params.sem;
    const subject = params.subject;
    const regex = /^sem_[1-8]$/;
    if (regex.test(sem) == false) {
        return <>Invalid Request</>;
    }
    let sem_subject_impq = getJson(sem, subject, subject + "_impq");
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
                            href: "b_pharmacy/important_questions",
                            text: "Important Questions",
                        },
                        {
                            href:
                                "b_pharmacy/sem_" +
                                String(sem.split("_")[1]),
                            text: "Semester " + String(sem.split("_")[1]),
                        },
                        {
                            href: "b_pharmacy/important_questions/sem_" + String(sem.split("_")[1]) + "/" + String(subject),
                            text: underscoreToTitleCase(subject),
                            active: true,
                        },
                    ],
                    header:
                        "B-Pharmacy - Semester " +
                        String(sem.split("_")[1]) +
                        " Important Questions",
                    image: {
                        alt: "B-Pharmacy Related Image",
                        src: "/img/important_questions.png",
                        about:
                            "B-Pharmacy Important Questions - " +
                            String(sem) +
                            " - Study Material",
                    },
                },
                has_search: false,
                full_sections: sem_subject_impq.section_banners,
            }}
        />
    );
}
