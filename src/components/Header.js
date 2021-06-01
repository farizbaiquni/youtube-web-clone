import React from 'react'
// import './header.css'

function Header() {
    return (
        <div className="header flex justify-evenly items-center bg-red-500 pl-3 pr-3 pt-3">
           
            <div className="flex items-center mr-10 w-40">
                <div className="mr-5">
                    <div className="w-5 h-1 mb-1 bg-black"></div>
                    <div className="w-5 h-1 mb-1 bg-black"></div>
                    <div className="w-5 h-1 mb-1 bg-black"></div>
                </div>

                <div className="bg-yellow-400 flex items-center">
                    <img className="w-8 object-contain" src="./youtube.png" alt="Youtube"/>
                    <p className="text-xl font-semibold">Youtube</p>
                </div>
            </div>
            

            
            <form action="" className="bg-blue-500 flex items-center flex-grow-0 flex-shrink p-3" style={{flexBasis: "728px"}}>
                <input type="text" className="h-7 flex-1"/>
                <button type="submit" className="h-7 px-5 bg-green-300">
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

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#606060" stroke="#606060" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="object-contain w-10 bg-blue-50">
                    <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#606060" stroke="#606060" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-4 object-contain w-10 bg-blue-50">
                    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="20"  height="20" viewBox="0 0 24 24" fill="#606060" stroke="#606060" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-4 object-contain w-10 bg-blue-50">
                    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
                </svg>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZDXIMcKgVVJu7CyqaiGnzVqpmWG24iEyrA&usqp=CAU" alt="profile" className="w-10 rounded-full ml-5"/>
            </div>


        </div>
    )
}

export default Header
