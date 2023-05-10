// import Home from "../pages/Home"
import Work from "../pages/Work"
import About from "../pages/About"
import Contact from "../pages/Contact"

const Route = [
    {
        url: "/works",
        name: "Featured Works",
        Component: Work,
    },
    {
        url: "/",
        name: "About Me",
        Component: About,
    },
    {
        url: "/contact",
        name: "Contact Me",
        Component: Contact,
    },
]

export default Route
