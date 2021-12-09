import React from "react"
import { SocialIcon } from "react-social-icons"

import Item from "../components/Item"

const projectObj = [
    {
        title: "V-More Asia",
        desc: `International e-commerce supply chain management platform which targeted customer in Asia 
        by providing high quality products and rewarding both sellers and buyers.`,
        image: "vmore.png",
        list: ["PHP", "JQuery", "CSS", "MYSQL", "Laravel", "Bootstrap"],
        url: "https://sg.vmoreasia.com",
    },
    {
        title: "unifi Rewards",
        desc: "unifi Rewards is a one-stop self service portal for unifi customers to manage their earned rewards.",
        image: "unifi.png",
        list: [
            "PHP",
            "JQuery",
            "SASS",
            "MYSQL",
            "Laravel",
            "Bootstrap",
            "Pimcore",
        ],
        url: "https://unifi.com.my/rewards",
    },
    {
        title: "iottechnex (Admin Portal)",
        desc: `Iottechnex provides digital solutions that tailored to the customer's needs and requirements.`,
        image: "iottechnex.png",
        list: ["PHP", "ReactJS", "SASS", "MYSQL", "Laravel", "Bootstrap"],
        url: "https://iottechnex.com/",
    },
    {
        title: "Side Project",
        desc: "Cloning existing website for learning purpose.",
        image: "clone-project-1.png",
        list: ["HTML", "CSS", "JQuery"],
        url: "https://blue-plant-057b70100.azurestaticapps.net/",
    },
    {
        title: "Side Project",
        desc: "Cloning existing website that with trending web design feels like static and animations.",
        image: "clone-project-2.png",
        list: ["HTML", "CSS", "JQuery"],
        url: "https://proud-smoke-04bb04e10.azurestaticapps.net/",
    },
]

const Home: React.FC = function () {
    return (
        <>
            <div className="banner pt-28 pb-44 text-white">
                <div className="intro mb-6">
                    <p className="text-2xl md:text-3xl mb-3">Hello,</p>
                    <p className="text-4xl md:text-6xl mb-3 italic font-montserrat font-bold">
                        I&apos;m Chee Chong
                    </p>
                    <p className="text-2xl md:text-3xl mb-16">
                        Front End / Full Stack Developer
                    </p>
                </div>
                <div className="social-media flex justify-center space-x-4">
                    <SocialIcon
                        url="https://www.linkedin.com/in/chee-chong-8bb538204/"
                        className="item rounded-full hover:bg-tertiary transform transition 
                            duration-500 hover:scale-110"
                        bgColor="#fff"
                        style={{ height: 40, width: 40 }}
                    />
                    <SocialIcon
                        url="https://github.com/cheechongtey"
                        className="item rounded-full hover:bg-tertiary transform transition 
                            duration-500 hover:scale-110"
                        bgColor="#fff"
                        style={{ height: 40, width: 40 }}
                    />
                    <SocialIcon
                        url="mailto:cheechongtey@gmail.com"
                        className="item rounded-full hover:bg-tertiary transform transition 
                            duration-500 hover:scale-110"
                        bgColor="#fff"
                        style={{ height: 40, width: 40 }}
                    />
                </div>
            </div>
            <section className="py-10 text-white">
                <div className="title text-4xl font-firacode text-tertiary font-bold mb-16">
                    #Featured_Works
                </div>
                <div className="work-session">
                    {projectObj.map((obj, index) => {
                        return (
                            <Item
                                imagePosition={
                                    index % 2 === 0 || index === 0
                                        ? "right"
                                        : "left"
                                }
                                title={obj.title}
                                desc={obj.desc}
                                image={obj.image}
                                list={obj.list}
                                url={obj.url}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Home
