import React from "react"

const TodoEmptyState = () => {
    return (
        <section className="flex items-center justify-center text-center my-16 h-96 bg-grey rounded-xl">
            <div>
                <h2 className="flex items-center text-3xl font-bold mb-4">
                    <span className="mr-4">No tasks!</span>
                    <img src="icons/popper.png" alt="" className="w-8 h-8 inline-block" />
                </h2>
                <p>Start killing that list; <br />add a task above!</p>
            </div>
        </section>
    )
}

export default TodoEmptyState