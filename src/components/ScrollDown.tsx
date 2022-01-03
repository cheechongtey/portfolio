import React from "react"

const ScrollDown: React.FC<{ showScroll: boolean }> = function ({
    showScroll,
}) {
    return (
        <div className={`scroll-down ${showScroll ? "" : "hide"}`}>
            <span className="letter text-white uppercase font-semibold tracking-widest">
                Scroll Down
            </span>
            <span className="letter line" />
        </div>
    )
}

export default ScrollDown
