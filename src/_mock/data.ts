import { iProjectProps } from "../interface"

export const projectObj: iProjectProps[] = [
    {
        title: "V-More Asia",
        desc: `International e-commerce supply chain management platform which targeted customer in Asia 
        by providing high quality products and rewarding both sellers and buyers.`,
        image: "vmore",
        list: ["PHP", "JQuery", "CSS", "MYSQL", "Laravel", "Bootstrap"],
        url: "https://sg.vmoreasia.com",
    },
    {
        title: "unifi Rewards",
        desc: "unifi Rewards is a one-stop self service portal for unifi customers to manage their earned rewards.",
        image: "unifi",
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
        image: "iotTechnex",
        list: ["PHP", "ReactJS", "SASS", "MYSQL", "Laravel", "Bootstrap"],
        url: "https://iottechnex.com/",
    },
    {
        title: "Side Project",
        desc: "Cloning existing website for learning purpose.",
        image: "cloneProject1",
        list: ["HTML", "CSS", "JQuery"],
        url: "https://blue-plant-057b70100.azurestaticapps.net/",
    },
    {
        title: "Side Project",
        desc: "Cloning existing website that with trending web design feels like static and animations.",
        image: "cloneProject2",
        list: ["HTML", "CSS", "JQuery"],
        url: "https://proud-smoke-04bb04e10.azurestaticapps.net/",
    },
]

export const navItems = [
    {
        url: "/",
        label: "#Home",
    },
    {
        url: "/works",
        label: "#Featured_Works",
    },
    {
        url: "/about",
        label: "#About",
    },
]

export const svg3DEntries = [
    {
        label: "React JS",
        target: "_top",
    },
    {
        label: "PHP",
        target: "_top",
    },
    {
        label: "jQuery",
        target: "_top",
    },
    {
        label: "MySQL",
        target: "_top",
    },
    {
        label: "Javascript",
        target: "_top",
    },
    { label: "Node JS", target: "_top" },
    { label: "CSS", target: "_top" },
    { label: "SASS", target: "_top" },
    { label: "React Native", target: "_top" },
    { label: "Bootstrap", target: "_top" },
    { label: "Typescript", target: "_top" },
    { label: "Tailwind CSS", target: "_top" },
    { label: "Git", target: "_top" },
    { label: "Redux", target: "_top" },
    { label: "Express JS", target: "_top" },
]

export const svg3DSettings = {
    entries: svg3DEntries,
    width: "100%",
    height: 450,
    radius: "65%",
    radiusMin: 75,
    bgDraw: false,
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1.2,
    fontFamily: "Montserrat, Fira Code",
    fontSize: "16",
    fontColor: "#1DCED8",
    fontWeight: "bold", // bold
    fontStyle: "normal", // italic
    fontStretch: "normal",
    fontToUpperCase: true,
    tooltipFontFamily: "Montserrat, Fira Code",
    tooltipFontSize: "11",
    tooltipFontColor: "#1DCED8",
    tooltipFontWeight: "bold", // bold
    tooltipFontStyle: "normal", // italic
    tooltipFontStretch: "normal",
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: "left",
    tooltipDiffX: 0,
    tooltipDiffY: 10,
    animatingSpeed: 0.01,
    animatingRadiusLimit: 1.3,
}
