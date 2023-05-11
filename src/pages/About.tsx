import React, { useState, useEffect } from "react"
import SVG3DTagCloud from "3d-word-cloud"
import TagManager from "react-gtm-module"

import { svg3DSettings } from "../_mock/data"
import "../styles/pages/about.scss"

const About: React.FC = function () {
    const [showContent, setShowContent] = useState<boolean>(false)
    const onTriggerViewPageList = () => {
        TagManager.dataLayer({
            dataLayer: {},
        })
        TagManager.dataLayer({
            dataLayer: {
                event: "view_item_list",
                ecommerce: {
                    item_list_id: "6274bb6b2c2c734bc0490762",
                    item_list_name:
                        "Computing and IT_Computer Science_foundation",
                    items: [
                        {
                            item_id: "5a3a79cd2a2e3c51d02ccbd6",
                            item_name: "Taylor's University",
                            discount: 300,
                            index: 0,
                            item_brand: "Taylor's University",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "campus_list",
                            price: 26000,
                            quantity: 1,
                        },
                        {
                            item_id: "5a8ce792373051730d7b65f2",
                            item_name: "Multimedia University (MMU)",
                            discount: 300,
                            index: 1,
                            item_brand: "Multimedia University (MMU)",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "campus_list",
                            price: 11470,
                            quantity: 1,
                        },
                        {
                            item_id: "5a8ce94a3730517410771122",
                            item_name: "Multimedia University (MMU)",
                            discount: 300,
                            index: 2,
                            item_brand: "Multimedia University (MMU)",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "campus_list",
                            price: 12970,
                            quantity: 1,
                        },
                        {
                            item_id: "5a3a789a2a2e3c51d02cc584",
                            item_name:
                                "Asia Pacific University of Technology & Innovation (APU)",
                            discount: 12900,
                            index: 3,
                            item_brand:
                                "Asia Pacific University of Technology & Innovation (APU)",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "campus_list",
                            price: 13200,
                            quantity: 1,
                        },
                        {
                            item_id: "5a3a79202a2e3c51d02cc808",
                            item_name: "International Medical University (IMU)",
                            discount: 300,
                            index: 4,
                            item_brand:
                                "International Medical University (IMU)",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "campus_list",
                            price: 25350,
                            quantity: 1,
                        },
                        {
                            item_id: "5a3a78eb2a2e3c51d02cc6ec",
                            item_name: "HELP University & Colleges",
                            discount: 25875,
                            index: 5,
                            item_brand: "HELP University & Colleges",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "campus_list",
                            price: 9825,
                            quantity: 1,
                        },
                        {
                            item_id: "5a3a78fa2a2e3c51d02cc786",
                            item_name: "HELP University & Colleges",
                            discount: 25875,
                            index: 6,
                            item_brand: "HELP University & Colleges",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "campus_list",
                            price: 9825,
                            quantity: 1,
                        },
                        {
                            item_id: "5ef2c8702c2c73568f7b58f2",
                            item_name: "Quest International University Perak",
                            index: 7,
                            item_brand: "Quest International University Perak",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "campus_list",
                            price: 2300,
                            quantity: 1,
                        },
                    ],
                },
            },
        })
    }
    const onTriggerViewPage = () => {
        TagManager.dataLayer({
            dataLayer: {},
        })
        TagManager.dataLayer({
            dataLayer: {
                event: "view_item",
                ecommerce: {
                    currency: "MYR",
                    value: "RM 13200",
                    item: [
                        {
                            item_id: "5dbfda152c2c7363610cb1c2",
                            item_name:
                                "FOUNDATION PROGRAMME (Computing & Technology Pathway) - Computer Science",
                            discount: 12700,
                            index: 0,
                            item_brand:
                                "Asia Pacific University of Technology & Innovation (APU)",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "course_list",
                            price: 13200,
                            quantity: 1,
                        },
                    ],
                },
            },
        })
    }

    const onPurchase = () => {
        TagManager.dataLayer({
            dataLayer: {},
        })
        TagManager.dataLayer({
            dataLayer: {
                event: "purchase",
                ecommerce: {
                    transaction_id: "T_12345",
                    value: 25.42,
                    tax: 4.9,
                    shipping: 5.99,
                    currency: "MYR",
                    coupon: "SUMMER_SALE",
                    item: [
                        {
                            item_id: "5dbfda152c2c7363610cb1c2",
                            item_name:
                                "FOUNDATION PROGRAMME (Computing & Technology Pathway) - Computer Science",
                            discount: 12700,
                            index: 0,
                            item_brand:
                                "Asia Pacific University of Technology & Innovation (APU)",
                            item_category: "Computing and IT",
                            item_category2: "Computer Science",
                            item_category3: "Foundation",
                            item_category4: "",
                            item_category5: "",
                            item_list_id: "",
                            item_list_name: "course_list",
                            price: 13200,
                            quantity: 1,
                        },
                    ],
                },
            },
        })
    }

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

    useEffect(() => {
        document.title = "Chee Chong - About Me"
    }, [])

    return (
        <section
            className={`content py-32 text-white ${showContent ? "" : "hide"}`}
        >
            <div
                className="title text-2xl md:text-4xl font-firacode text-tertiary 
                font-bold mb-5 md:mb-16 text-left"
            >
                #About Me
            </div>
            <div className="about-me-session flex flex-wrap justify-between">
                <div className="w-full lg:w-1/2 text-justify lg:pr-20">
                    <div className="flex gap-4 mb-10">
                        <button
                            type="button"
                            className="btn-default"
                            onClick={onTriggerViewPageList}
                        >
                            Trigger GA4 - View Item List
                        </button>
                        <button
                            type="button"
                            className="btn-default"
                            onClick={onTriggerViewPage}
                        >
                            Trigger GA4 - View Item
                        </button>
                        <button
                            type="button"
                            className="btn-default"
                            onClick={onPurchase}
                        >
                            Trigger GA4 - Purchase
                        </button>
                    </div>
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
                className="title text-2xl md:text-4xl font-firacode text-tertiary 
                font-bold mb-5 md:mb-16 mt-16 md:mt-0 text-left"
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
                        <div className="card w-full md:w-1/2 bg-primary-light rounded-md mb-5 md:mb-0 md:mr-5">
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

                        <div className="card w-full md:w-1/2 bg-primary-light rounded-md">
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
