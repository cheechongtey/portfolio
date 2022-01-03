import React, { useState, useEffect, useLayoutEffect } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

import ScrollDown from "../components/ScrollDown"
import workImage from "../images/1080/work-me.8e6ec8da.webp"
import meImage from "../images/Me.jpg"

import "../styles/pages/home.scss"

const Home: React.FC = function () {
    const [showContent, setShowContent] = useState<boolean>(false)
    const [showScroll, setShowScroll] = useState<boolean>(true)
    const useWindowSize = () => {
        const [size, setSize] = useState([0, 0])

        useLayoutEffect(() => {
            const updateSize = () => {
                setSize([window.innerWidth, window.innerHeight])
            }

            window.addEventListener("resize", updateSize)
            updateSize()

            return () => window.removeEventListener("resize", updateSize)
        }, [])

        return size
    }
    const [width] = useWindowSize()
    const [navPosition, setNavPosition] = useState<string>("right")

    useEffect(() => {
        if (width <= 767 && navPosition === "right") {
            setNavPosition("bottom")
        } else if (width >= 768 && navPosition === "bottom") {
            setNavPosition("right")
        }

        setShowContent(true)
    }, [width, navPosition])

    return (
        <>
            <section className={`content ${showContent ? "" : "hide"}`}>
                <ReactFullpage
                    scrollingSpeed={1000} /* Options here */
                    navigation
                    navigationPosition="bottom"
                    onLeave={(data: any, dest: any) => {
                        if (dest.index !== 0 && showScroll === true) {
                            setShowScroll(false)
                        } else if (dest.index === 0 && showScroll === false) {
                            setShowScroll(true)
                        }
                    }}
                    render={() => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <div className="banner py-44 text-white px-5 lg:px-0 relative">
                                        <div
                                            className="
                                                    intro mb-6 text-center flex flex-col 
                                                    items-center uppercase font-semibold"
                                        >
                                            <p className="letter text-xl md:text-3xl mb-6 typed-out">
                                                Hello,
                                            </p>
                                            <p
                                                className="
                                                    letter text-xl md:text-5xl mb-6 font-montserrat 
                                                    font-bold typed-out"
                                            >
                                                I&apos;m Chee Chong
                                            </p>
                                            <p className="letter text-xl md:text-3xl mb-6 typed-out">
                                                A Front End / Full Stack
                                                Developer
                                            </p>
                                            <p className="letter text-xl md:text-3xl mb-6 typed-out">
                                                Located in Kuala Lumpur
                                            </p>
                                        </div>
                                        <div
                                            className="social-media flex justify-center
                                                space-x-4"
                                        >
                                            <SocialIcon
                                                url="https://www.linkedin.com/in/chee-chong-8bb538204/"
                                                className="
                                                    item rounded-full hover:bg-tertiary transform transition 
                                                    duration-500 hover:scale-110"
                                                bgColor="#fff"
                                                style={{
                                                    height: 40,
                                                    width: 40,
                                                }}
                                            />
                                            <SocialIcon
                                                url="https://github.com/cheechongtey"
                                                className="
                                                    item rounded-full hover:bg-tertiary transform transition 
                                                    duration-500 hover:scale-110"
                                                bgColor="#fff"
                                                style={{
                                                    height: 40,
                                                    width: 40,
                                                }}
                                            />
                                            <SocialIcon
                                                url="mailto:cheechongtey@gmail.com"
                                                className="
                                                    item rounded-full hover:bg-tertiary transform transition 
                                                    duration-500 hover:scale-110"
                                                bgColor="#fff"
                                                style={{
                                                    height: 40,
                                                    width: 40,
                                                }}
                                            />
                                        </div>
                                        {/* <div className="profile-picture relative">
                                            <div className="absolute inset-0 bg-black bg-opacity-" />
                                            <img
                                                src={meImage}
                                                alt="profile_picture"
                                            />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="banner py-5 text-white px-5 lg:px-0">
                                        <div className="section-wrapper w-full relative flex justify-end">
                                            <div
                                                className="details absolute left-5 bottom-5 lg:left-10 
                                                lg:top-1/3 z-10"
                                            >
                                                <h4 className="text-2xl md:text-3xl mb-2 font-bold">
                                                    #Featured Work
                                                </h4>
                                                <div className="text-base md:text-xl mb-8">
                                                    Web Application & UI Clone
                                                </div>
                                                <div className="project-view flex">
                                                    <Link
                                                        to="/works"
                                                        className="btn-default"
                                                        rel="noreferrer"
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="section-image work-image relative">
                                                <div
                                                    className="overlay absolute inset-0 md:hidden 
                                                bg-black bg-opacity-10"
                                                />
                                                <img
                                                    src={workImage}
                                                    alt="test"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="banner py-5 text-white px-5 lg:px-0">
                                        <div className="section-wrapper w-full relative flex justify-end">
                                            <div
                                                className="details absolute left-5 bottom-5 lg:left-10 
                                                lg:top-1/3 z-10"
                                            >
                                                <h4 className="text-2xl md:text-3xl mb-2 font-bold">
                                                    #About Me
                                                </h4>
                                                <div className="text-base md:text-xl mb-8">
                                                    I Love Minimalist UI and
                                                    Animation.
                                                </div>
                                                <div className="project-view flex">
                                                    <Link
                                                        to="/work"
                                                        className="btn-default"
                                                        rel="noreferrer"
                                                    >
                                                        Know more about me
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="section-image work-image relative">
                                                <div
                                                    className="overlay absolute inset-0 md:hidden 
                                                bg-black bg-opacity-10"
                                                />
                                                <img
                                                    src={workImage}
                                                    alt="test"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ReactFullpage.Wrapper>
                        )
                    }}
                />
            </section>
            <ScrollDown showScroll={showScroll} />
        </>
    )
}

export default Home
