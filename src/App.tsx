import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TagManager from "react-gtm-module"

import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

import RouteList from "./routes/Route"

import "./styles/App.scss"

const App: React.FC = function () {
    const [expand, setExpand] = useState<boolean>(false)

    const onClickHamburger = (state: boolean) => {
        setExpand(state)
    }

    useEffect(() => {
        console.log("sdfsdf")
        TagManager.initialize({ gtmId: "GTM-TNF5SFQ" })
        console.log(TagManager)
    }, [])

    return (
        <Router>
            <div
                className={`App tracking-widest leading-7 ${
                    expand ? "fixed" : "relative"
                }`}
            >
                <header className="w-full font-firacode text-white">
                    <Navbar
                        onClickHamburger={onClickHamburger}
                        expand={expand}
                    />
                </header>
                <main className="container mx-auto">
                    <Routes>
                        {RouteList.map(({ url, Component }) => {
                            return (
                                <Route
                                    path={url}
                                    element={<Component />}
                                    key={url}
                                />
                            )
                        })}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
