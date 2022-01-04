import React from "react"
import images1080 from "../images/1080"
import images768 from "../images/768"
import { iProjectProps } from "../type"

const Item: React.FC<iProjectProps> = function ({
    title,
    desc,
    image,
    list,
    url,
    delay,
}) {
    return (
        <div
            className="items flex flex-wrap-reverse mb-20 lg:mb-32 justify-between"
            data-delay={delay}
        >
            <div className="w-full lg:w-5/12 text-leftflex flex-col">
                <div className="project-title mt-5 mb-2 lg:my-5 italic text-2xl lg:text-4xl font-semibold">
                    {title}
                </div>
                <div className="project-desc text-md lg:text-lg font-firacode text-justify mb-5">
                    {desc}
                </div>
                <div className="project-responsible text-md lg:text-lg font-firacode text-justify pl-8 mb-5">
                    <ul className="list-inside list-disc">
                        {list.map((value) => {
                            return <li>{value}</li>
                        })}
                    </ul>
                </div>
                <div className="project-view flex">
                    <a
                        href={url}
                        target="_blank"
                        className="btn-default"
                        rel="noreferrer"
                    >
                        View Project
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-6/12">
                <div className="img-container d-flex justify-center">
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={images1080[image]}
                        />
                        <source
                            media="(max-width: 1023px)"
                            srcSet={images768[image]}
                        />
                        <img
                            className="rounded-md object-cover square-size"
                            alt={title}
                        />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default Item
