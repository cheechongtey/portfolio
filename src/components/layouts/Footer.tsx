import React from "react"
import { useLocation } from "react-router-dom"

const Footer: React.FC = function () {
    const { pathname } = useLocation()

    return (
        <footer
            className={`flex flex-row justify-center text-tertiary text-xs py-4 px-4 md:px-0 text-center ${
                pathname === "/" ? "hidden" : ""
            }`}
        >
            All Rights Reserved &copy; 2021 Chee Chong
        </footer>
    )
}

export default Footer
