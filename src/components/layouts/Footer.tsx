import React from "react"
import { useLocation } from "react-router-dom"

const Footer: React.FC = function () {
    const { pathname } = useLocation()

    return (
        <footer
            className={`flex flex-row justify-center text-xs text-footer py-4  ${
                pathname === "/" ? "hidden" : ""
            }`}
        >
            All Rights Reserved C 2021 Chee Chong
        </footer>
    )
}

export default Footer
