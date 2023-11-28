import React from "react";
// import FullSection from "../base/full_section";
import BreadCrumb from "../base/breadcrumb";
import MoreExplorableContent from "./more_explorable_content";
import FullSectionsHolder from "../base/full_sections_holder";
import SearchSection from "../base/search_section";

export default function Main({ children = null }) {
    return (
        <>
            {children.has_breadcrumbs ? (
                <BreadCrumb children={children.breadcrumbs} />
            ) : null}
            {children.has_search ? <SearchSection /> : null}
            <FullSectionsHolder children={children.full_sections} />
            <MoreExplorableContent />
        </>
    );
}
