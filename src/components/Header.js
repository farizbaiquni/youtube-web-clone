import React from 'react'
import PropTypes from 'prop-types'

function Header({ isNormal, setIsNormal, isMini, setIsMini, isFull, setIsFull, setSizeContent}) {

    return (
        <div className="flex justify-between items-center pl-8 pr-8 pt-1 pb-1 fixed z-20 w-full bg-white">
           
            <div className="flex items-center mr-10 w-40">
                <div className="mr-5 cursor-pointer" 
                    onClick={() => {

                        setIsNormal(!isNormal)

                        if(isMini == true  && isNormal == false){
                            setIsMini(false)
                        }

                        if(isFull == true  && isNormal == false){
                            setIsFull(false)
                        }

                        if(window.innerWidth > 1023 && isNormal == true && isFull == false){
                            setIsMini(!isMini)
                        } 

                        if(window.innerWidth < 1023 && isNormal == true && isMini == false){
                            setIsFull(!isFull)
                        }
                    }}
                >
                    <div className="w-4 h-0.5 mb-1 bg-black"></div>
                    <div className="w-4 h-0.5 mb-1 bg-black"></div>
                    <div className="w-4 h-0.5 mb-1 bg-black"></div>
                </div>

                <div className="flex items-center cursor-pointer">
                    <img className="w-8 object-contain mr-1" src="./youtube.png" alt="Youtube"/>
                    <p className="text-xl font-semibold tracking-youtube font-senibold">Youtube</p>
                </div>
            </div>
            

            
            <form action="" className="flex items-center flex-grow-0 flex-shrink p-3" style={{flexBasis: "728px"}}>
                <input type="text" placeholder="Search" className="h-7 flex-1 px-2 border border-gray-400"/>
                <button type="submit" className="h-7 px-5  border-r border-t border-b bg-gray-100 border-gray-400">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" width="15" 
                    height="15" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#000000" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </form>



            <div className="flex items-center ml-3">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#606060" stroke="#606060" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="object-contain w-10 cursor-pointer">
                    <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#606060" stroke="#606060" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-4 object-contain w-10 cursor-pointer">
                    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="20"  height="20" viewBox="0 0 24 24" fill="#606060" stroke="#606060" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-4 object-contain w-10 cursor-pointer">
                    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
                </svg>

                <a href="./">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZDXIMcKgVVJu7CyqaiGnzVqpmWG24iEyrA&usqp=CAU" alt="profile" className="w-9 rounded-full ml-5 cursor-pointer"/>
                </a>
            </div>


        </div>
    )
}

Header.propTypes = {
    isNormal: PropTypes.bool,
    setIsNormal: PropTypes.func,
    isMini: PropTypes.bool,
    setIsMini: PropTypes.func,
    isFull: PropTypes.bool,
    setIsFull: PropTypes.func,
    setSizeContent: PropTypes.func,
}
export default Header
