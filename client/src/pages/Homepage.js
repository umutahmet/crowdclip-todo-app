import React from "react"

const Homepage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="flex items-center justify-center text-center pt-48 pb-16">
                <div>
                    <h1 className="text-7xl font-black tracking-tighter mb-6">Crowdclip <br /> Todo App</h1>
                    <h2 className="text-xl">The only todo app you'll <br /> ever need.</h2>
                </div>
            </div>
            <img src="images/product-shot.png" alt="" className="mx-auto" />
        </div>
    )
}

export default Homepage
