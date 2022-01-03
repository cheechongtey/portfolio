import React, { useState, useEffect } from "react"
import SVG3DTagCloud from "3d-word-cloud"

import { svg3DSettings } from "../_mock/data"
import "../styles/pages/about.scss"

const About: React.FC = function () {
    const [showContent, setShowContent] = useState<boolean>(false)

    useEffect(() => {
        const svg3DTagCloud = new SVG3DTagCloud(
            document.getElementById("holder"),
            svg3DSettings
        )

        setShowContent(true)

        return () => {
            svg3DTagCloud.destroy()
        }
    }, [])

    return (
        <section
            className={`content py-32 text-white ${showContent ? "" : "hide"}`}
        >
            <div
                className="title text-3xl md:text-4xl font-firacode text-tertiary 
                font-bold mb-16 text-left"
            >
                #About Me
            </div>
            <div className="about-me-session flex flex-wrap justify-between">
                <div className="w-full lg:w-1/2 text-justify lg:pr-20">
                    <p className="mb-8">
                        I&apos;m a Front-End Developer located in Kuala Lumpur,
                        Malaysia. I have passionate for UI effects, animations
                        and love to exploring
                    </p>
                    <p className="mb-8">
                        I love to explore different UI effects and animations
                        and enjoy the results of my work
                    </p>
                    <p>
                        Fan of anime/manga, exploring various genre of music,
                        unsolved/solved mysterious case and sometimes outdoor
                        activities with a bunch of friends
                    </p>
                </div>
                <div className="w-full lg:w-1/2 holder">
                    <div id="holder" />
                </div>
            </div>

            <div
                className="title text-3xl md:text-4xl font-firacode text-tertiary 
                font-bold mb-16 mt-16 md:mt-0 text-left"
            >
                #Skills & Experience
            </div>

            <div className="skill-session flex flex-wrap justify-between">
                <div className="w-full lg:w-1/2 text-justify lg:pr-20 mb-14 md:mb-0">
                    <p className="mb-8">
                        I started my journey as a fullstack developer in a
                        software house company as we consult our clients by
                        providing them digital transform service. I also have
                        the opportunity to work and collaborated with talented
                        people to create web products for our clients.
                    </p>
                    <p className="mb-8">
                        I&apos;ve developed the passionate towards Front-end
                        development as I progress and decided to pick up the
                        Front-End developer to allow me to focus more on
                        Front-End Development.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 experience">
                    <div className="flex flex-col mb-8 back">
                        <div className="font-semibold mb-2">Back-End</div>
                        <div className="bar h-1 bg-white w-full rounded overflow-hidden relative" />
                    </div>

                    <div className="flex flex-col mb-16 front">
                        <div className="font-semibold mb-2">Front-End</div>
                        <div className="bar h-1 bg-white w-full rounded overflow-hidden relative" />
                    </div>

                    <div className=" flex flex-wrap mb-8 work-experience">
                        <div className="card flex-1 bg-primary-light rounded-md mr-5">
                            <div className="card-body p-5">
                                <p className="font-bold mb-2">
                                    Fullstack Developer
                                </p>
                                <p className="font-medium text-sm">
                                    ISCity Sdn Bhd
                                </p>
                                <p className="text-xs">2017 - 2021</p>
                            </div>
                        </div>

                        <div className="card flex-1 bg-primary-light rounded-md">
                            <div className="card-body p-5">
                                <p className="font-bold mb-2">
                                    Front-End Developer
                                </p>
                                <p className="font-medium text-sm">
                                    Avanade Malaysia Sdn Bhd
                                </p>
                                <p className="text-xs">2021 - Current</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
