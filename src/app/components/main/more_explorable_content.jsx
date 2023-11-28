import React from "react";
import FullSection from "../base/full_section";

export default function MoreExplorableContent() {
    return (
        <FullSection
            children={{
                description: "more explorable content",
                banner_text: "get more from ",
                banner_text_span: "Pharma Lectures",
                buttons: [
                    {
                        link: "/b_pharmacy/syllabus",
                        image: {
                            alt: "B-Pharma Syllabus - Pharma Lectures Site",
                            src: "/img/syllabus.png",
                            about: "B-Pharma Syllabus - Pharma Lectures Site",
                        },
                        text: {
                            header: "Syllabus",
                        },
                    },
                    {
                        link: "https://www.youtube.com/@Pharmalectures",
                        image: {
                            alt: "B-Pharma Video Lectures - Pharma Lectures Site",
                            src: "/img/video_lectures.png",
                            about: "B-Pharma Video Lectures - Pharma Lectures Site",
                        },
                        text: {
                            header: "Video Lectures",
                        },
                    },
                    {
                        link: "/b_pharmacy/notes",
                        image: {
                            alt: "B-Pharma Notes - Pharma Lectures Site",
                            src: "/img/notes_1.png",
                            about: "B-Pharma Notes - Pharma Lectures Site",
                        },
                        text: {
                            header: "Notes",
                        },
                    },
                    {
                        link: "/b_pharmacy/important_questions",
                        image: {
                            alt: "B-Pharma Important Questions - Pharma Lectures Site",
                            src: "/img/important_questions.png",
                            about: "B-Pharma Important Questions - Pharma Lectures Site",
                        },
                        text: {
                            header: "Important Questions",
                        },
                    },
                    {
                        link: "/b_pharmacy/pyqs",
                        image: {
                            alt: "B-Pharma PYQ's - Pharma Lectures Site",
                            src: "/img/question_paper.png",
                            about: "B-Pharma PYQ's - Pharma Lectures Site",
                        },
                        text: {
                            header: "PYQ's",
                        },
                    },
                    {
                        link: "/b_pharmacy/practicle_files",
                        image: {
                            alt: "B-Pharma Practicle Files - Pharma Lectures Site",
                            src: "/img/practical_files.png",
                            about: "B-Pharma Practicle Files - Pharma Lectures Site",
                        },
                        text: {
                            header: "Practicle Files",
                        },
                    },
                ],
                description_2: "descriptive and best unified content",
            }}
        />
    );
}
