import React from 'react'

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <img src="/monkey-not-found.png" alt=""/>
            <div className="w-96">
                <h2 className="text-center">{`This page isn't available. Sorry about that.Try searching for something else.`}</h2>
            </div>
        </div>
    )
}

export default NotFound
