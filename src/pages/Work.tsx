import React, { useState, useEffect } from "react"

import Item from "../components/Item"
import { projectObj } from "../_mock/data"

import "../styles/pages/work.scss"

const Work: React.FC = function () {
    const [showContent, setShowContent] = useState<boolean>(false)

    useEffect(() => {
        setShowContent(true)
    }, [])

    useEffect(() => {
        document.title = "Chee Chong - Featured Works"
    }, [])

    return (
        <section
            className={`content pt-32 text-white ${showContent ? "" : "hide"}`}
        >
            <div
                className="title text-2xl md:text-4xl font-firacode text-tertiary 
                font-bold mb-5 md:mb-16 text-left"
            >
                #Featured_Works
            </div>
            <div className="work-session">
                {projectObj.map((obj, index) => {
                    return (
                        <Item
                            title={obj.title}
                            desc={obj.desc}
                            image={obj.image}
                            list={obj.list}
                            url={obj.url}
                            delay={index * 100}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Work
