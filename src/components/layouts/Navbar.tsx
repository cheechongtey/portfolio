import React from "react"
import { Link } from "react-router-dom"

import { navItems } from "../../_mock/data"

const Navbar: React.FC<{ onClickHamburger: any; expand: boolean }> = function ({
    expand,
    onClickHamburger,
}) {
    return (
        <>
            <div className="navigation-bar fixed w-full z-50">
                <div className="mobile-nav justify-end pt-10 pr-6 flex">
                    <div
                        role="button"
                        className={`hamburger flex flex-col ${
                            expand ? "toggled" : "untoggle"
                        }`}
                        onClick={() => onClickHamburger(!expand)}
                        tabIndex={0}
                        onKeyDown={() => null}
                    >
                        <span className="stick stick-1" />
                        <span className="stick stick-2" />
                        <span className="stick stick-3" />
                    </div>
                </div>
            </div>
            <div
                className={`mobile-expand-menu ${
                    expand === true ? "" : "hide"
                } `}
            >
                <div className="h-full flex flex-col justify-center items-center">
                    {navItems.map((value) => {
                        return (
                            <Link
                                to={value.url}
                                className="items text-2xl md:text-4xl hover:text-tertiary transform transition 
                                hover:scale-110 mb-16"
                                rel="noreferrer"
                                onClick={() => onClickHamburger(!expand)}
                                key={value.url}
                            >
                                {value.label}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Navbar
