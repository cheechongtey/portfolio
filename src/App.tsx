import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

import RouteList from "./routes/Route"

import "./styles/App.css"

const App: React.FC = function () {
    return (
        <div className="App">
            <header className="w-full font-firacode text-white">
                <Navbar />
            </header>
            <main className="container mx-auto">
                <Router>
                    <Routes>
                        {RouteList.map(({ url, Component }) => {
                            return <Route path={url} element={<Component />} />
                        })}
                    </Routes>
                </Router>
            </main>
            <Footer />
        </div>
    )
}

export default App
