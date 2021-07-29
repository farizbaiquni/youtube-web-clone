import React from 'react'
import '../video.css'

function Watch() {
    return (
        <div className="flex 985px-max:flex-col 985px-max:items-center justify-center mx-5 bg-yellow-500">
            <div className="flex flex-col w-3/4 985px-max:w-full mt-16 mr-4 
                max-w-900px    
                1125px-max:max-w-
            ">
                <div id="container_youtube_video" className="">
                    <iframe
                        id="youtube_video"
                        src="https://www.youtube.com/embed/-bVU8K6jlKE"
                        className="985px-max:ml-4">
                    </iframe> 
                </div>

                <div id="youtube_video_information" className="w-full mt-5 985px-max:ml-2 bg-green-300 h-96">
                    <h1 className="text-lg">Youtube Video Title</h1>
                    <div className="flex">
                        <div className="flex-1 bg-green-900">
                            <p>9,047,447,026 views . 19 July 2021</p>
                        </div>
                        <div className="flex content-end bg-blue-600">
                            <p className="mx-2 text text-lg">999MM</p>
                            <p className="mx-2 text-lg">999M</p>
                            <p className="mx-2 text-lg">SHARE</p>
                            <p className="mx-2 text-lg">SAVE</p>
                            <p className="mx-2 text-lg">...</p>
                        </div>
                    </div>

                    <table>
                        <thead>
                        
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="row-span-2 w-14 bg-yellow-300">
                                    <img src="/youtube.png" alt="" className="w-10 h-10 border rounded-full min-w-max"/>
                                </td>
                                <td className="text-left">
                                    <p>Channel Name</p>
                                    <p>50.8M subscribers</p>
                                </td>
                                <td>
                                    <button className="bg-red-600 p-2 text-lg font-semibold">Subscribe</button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="bg-red-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, id ipsum. Sapiente at aspernatur voluptates? Animi dolor recusandae a veniam eaque saepe repudiandae natus. Qui blanditiis cupiditate dicta nihil ipsam.</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>


                    {/* <div id="youtube_video_description">
                        <div className="flex items-center">
                            <div>
                                <img src="/youtube.png" alt="" className="w-10 h-10 border rounded-full mr-3"/>
                            </div>
                            <div className="flex-1">
                                <p>Channel Name</p>
                                <p>50.8M subscribers</p>
                            </div>

                            <div>
                                <button className="bg-red-600 p-2 text-lg font-semibold">Subscribe</button>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
            
            <div className="flex flex-none w-thumbnails-width 985px-max:w-full h-96 mt-16 bg-pink-600
                1125px-max:min-w-0 
              1125px-max:bg-blue-500
                1125px-max:flex-auto
            ">
                <h1>{window.innerWidth}</h1>
            </div>
        </div>
                
    )
}

export default Watch
