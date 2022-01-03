import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

import RouteList from "./routes/Route"

import "./styles/App.scss"

const App: React.FC = function () {
    return (
        <Router>
            <div className="App relative tracking-widest leading-7">
                <header className="w-full font-firacode text-white">
                    <Navbar />
                </header>
                <main className="container mx-auto">
                    <Routes>
                        {RouteList.map(({ url, Component }) => {
                            return <Route path={url} element={<Component />} />
                        })}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
