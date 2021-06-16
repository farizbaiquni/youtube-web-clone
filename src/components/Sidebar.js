import React from 'react'
import PropTypes from 'prop-types'

function Sidebar({isNormal}) {

    return (
        <div className={`flex flex-col h-96 fixed top-14 h-full overflow-x-hidden z-10 left-0  bg-pink-500
        w-56
        lg-max:w-20 
        sm-max:hidden
        ${!isNormal || isNormal === undefined? "hidden" : ""}
        `
        }>

            <a href="./" className={`flex items-center py-2 cursor-pointer w-full mt-2 hover:bg-gray-100 lg-max:flex-col`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#606060" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-7 ml-6">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <p className="lg-max:text-xs">Home</p>
            </a>

            <a href="./" className={`flex items-center py-2 cursor-pointer w-full hover:bg-gray-100 lg-max:flex-col`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#606060" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-7 ml-6"
            >
                <circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/>
            </svg>
                <p className="lg-max:text-xs">Explore</p>
            </a>

            <a href="./" className={`flex items-center py-2 cursor-pointer w-full hover:bg-gray-100 lg-max:flex-col`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#606060" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-7 ml-6">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>
                </svg>
                <p className="lg-max:text-xs">Subscription</p>
            </a>
            
        </div>
    )
}

Sidebar.propTypes = {
    isNormal: PropTypes.bool.isRequired
}

export default Sidebar
