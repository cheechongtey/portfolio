import React from "react"

const Navbar: React.FC = function () {
    return (
        <div className="flex flex-row justify-center space-x-12 py-14 text-xl font-bold">
            <a
                className="hover:text-tertiary transform transition duration-500 hover:scale-110"
                href="/"
            >
                #Home
            </a>
            <a
                className="hover:text-tertiary transform transition duration-500 hover:scale-110"
                href="/"
            >
                #Featured_Works
            </a>
            <a
                className="hover:text-tertiary transform transition duration-500 hover:scale-110"
                href="/"
            >
                #About
            </a>
            <a
                className="hover:text-tertiary transform transition duration-500 hover:scale-110"
                href="/"
            >
                #Contact
            </a>
        </div>
    )
}

export default Navbar
