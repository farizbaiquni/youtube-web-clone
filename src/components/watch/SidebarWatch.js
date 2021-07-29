import React from 'react'
import PropTypes from 'prop-types'

function SidebarWatch({showSidebar, setShowSidebar}) {
    
    return (
        <div className={`flex fixed z-30 h-full overflow-x-hidden left-0
        ${!showSidebar ? "w-0" : "w-full"} 
        transition-all ease-linear duration-150
        `
        }>

            <div className="flex flex-col z-50 w-72 flex-none bg-white">
                
                <div className="w-full h-14 flex items-center cursor-pointer" onClick={() => {setShowSidebar(false);}}>
                    <div className="pl-8 mr-7">
                        <div className="w-4 h-0.5 mb-1 bg-black"></div>
                        <div className="w-4 h-0.5 mb-1 bg-black"></div>
                        <div className="w-4 h-0.5 mb-1 bg-black"></div>
                    </div>

                    <div className="flex">
                        <img className="w-8 mr-2 object-contain" src="/youtube.png" alt="Youtube"/>
                        <p className="text-xl font-semibold text">Youtube</p>
                    </div>
                </div>

                <hr className="bg-gray-400 w-full"/>

                <a href="./" className={`flex items-center py-2 cursor-pointer w-full mt-2 hover:bg-gray-100`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#606060" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-7 ml-6">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <p >Home</p>
                </a>

                <a href="./" className={`flex items-center py-2 cursor-pointer w-full hover:bg-gray-100`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#606060" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-7 ml-6"
                >
                    <circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/>
                </svg>
                    <p >Explore</p>
                </a>

                <a href="./" className={`flex items-center py-2 cursor-pointer w-full hover:bg-gray-100`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#606060" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-7 ml-6">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>
                    </svg>
                    <p >Subscription</p>
                </a>
            </div>

            <div className="w-full bg-black opacity-50" 
                onClick={() => {setShowSidebar(false);}}
            >

            </div>
            
        </div>
    )
}

SidebarWatch.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
    setShowSidebar: PropTypes.func.isRequired,
}

export default SidebarWatch
