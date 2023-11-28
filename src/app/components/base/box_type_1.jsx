import React from 'react'

export default function BoxType1({jsonData}) {
  return (
    <>
    <div className="full_section w-11/12 p-5 flex flex-column justify-center align-center bg-neutral-100 dark:bg-orange-100">
        <div className="box_header_part flex flex-col justify-center align-center">
            <div className="box_header_small_description">
                {jsonData.small_description || ""}
            </div>
            <div className="box_header_heading font-bold">
                {jsonData.heading || ""}
            </div>
            <div className="box_header_large_description">
                {jsonData.large_description || ""}
            </div>
        </div>
        <div className="box_main">
            {jsonData.main || ""}
        </div>
        <div className="box_footer">
            <div className="box_footer_small_description">
                {jsonData.footer_small_description}
            </div>
        </div>
    </div>
    </>
  )
}
