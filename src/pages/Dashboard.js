import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SidebarMinimal from '../components/SidebarSidebarMinimal'
import SidebarFull from '../components/SidebarFull'
import Video from '../components/Video'

function Dashboard() {

    //Sidebar option : normal, mini, full;
    const[isNormal, setIsNormal] = useState(true);
    const[isMini, setIsMini] = useState(false);
    const[isFull, setIsFull] = useState(false);

    const[videos, setVideos] = useState(null)

    useEffect( () => {
        
        async function getPopularVideos(){
            await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyB_1mfqc2jVtISriLjNZSn987h27rdm2KU&maxResults=12").then(data => data.json())
            .then(items => setVideos(items))
        }

        getPopularVideos()
            
    }, [])

    return (
        <div >
        <Header 
            isNormal={isNormal} setIsNormal={setIsNormal} 
            isMini={isMini} setIsMini={setIsMini}
            isFull={isFull} setIsFull={setIsFull}
        />            
            <Sidebar isNormal={isNormal} />
            <SidebarMinimal isMini={isMini}/>
            <SidebarFull isNormal={isNormal} setIsNormal={setIsNormal} isFUll={isFull} setIsFull={setIsFull}/>
            <div className={`absolute mt-16 mx-2 bg-gray-100 
                ${isNormal ? `lg:left-56 lg-max:left-20 sm-max:left-0` : ``} 
                ${isMini ? `sm:left-20` : ``} 
                ${isFull ? `sm:left-20` : ``}
                w-auto grid 
                 xl:grid-cols-4 xl-max:grid-cols-3 lg-max:grid-cols-2 md-max:grid-cols-1
                gap-x-3 gap-y-10
                
                `}
            >
                {
                    videos?.items.map(data => <Video key={data.id} data={data}/> )
                }
                
            </div>
        </div>
              
    )
}

export default Dashboard
