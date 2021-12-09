import React from "react"

interface ItemProps {
    imagePosition: "left" | "right"
    title: string
    desc: string
    image: string
    list: string[]
    url: string
}

const Item: React.FC<ItemProps> = function ({
    title,
    desc,
    imagePosition,
    image,
    list,
    url,
}) {
    return (
        <div className="flex flex-wrap-reverse mb-20 md:mb-32 justify-between">
            <div className="w-full md:w-6/12 text-left px-5 flex flex-col">
                <div className="project-title mt-5 mb-2 md:my-5 italic text-2xl md:text-4xl font-semibold">
                    {title}
                </div>
                <div className="project-desc text-md md:text-lg font-firacode text-justify mb-5">
                    {desc}
                </div>
                <div className="project-responsible text-md md:text-lg font-firacode text-justify pl-8 mb-5">
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
            <div
                className={`w-full md:w-5/12 px-5 ${
                    imagePosition === "right" ? "" : "md:order-first"
                }`}
            >
                <div className="img-container d-flex justify-center">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet={`/images/1080/${image}`}
                        />
                        <source
                            media="(max-width: 767px)"
                            srcSet={`/images/768/${image}`}
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
