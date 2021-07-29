import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SidebarMinimal from '../components/SidebarSidebarMinimal';
import SidebarFull from '../components/SidebarFull';
import SearchVideo from '../components/search-video/SearchVideo';

function Search() {

    //Sidebar option : normal, mini, full;
    const[isNormal, setIsNormal] = useState(true);
    const[isMinimal, setIsMinimal] = useState(false);
    const[isFull, setIsFull] = useState(false);
    const[videos, setVideos] = useState(null)

    const {keyword} = useParams()

    useEffect(() => {
        
        async function getSearchVideo(){
            await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${keyword}&key=AIzaSyB_1mfqc2jVtISriLjNZSn987h27rdm2KU`)
            .then(response => response.json())
            .then(result => setVideos(result))
        }

        getSearchVideo()

    }, [keyword])

    return (
        <div>
           <Header 
                isNormal={isNormal} setIsNormal={setIsNormal} 
                isMinimal={isMinimal} setIsMinimal={setIsMinimal}
                isFull={isFull} setIsFull={setIsFull}
            />            
            <Sidebar isNormal={isNormal} />
            <SidebarMinimal isMinimal={isMinimal}/>
            <SidebarFull isNormal={isNormal} setIsNormal={setIsNormal} isFUll={isFull} setIsFull={setIsFull}/>
            <div className={`absolute mt-16 mx-2 bg-gray-100 
                ${isNormal ? `lg:left-56 lg-max:left-20 sm-max:left-0` : ``} 
                ${isMinimal ? `sm:left-20` : ``} 
                ${isFull ? `sm:left-20` : ``}
                w-auto grid grid-cols-1 gap-x-3 gap-y-5                  
                `}
            >
                {
                    videos?.items?.map(video => 
                        (<SearchVideo key={video.id.videoId} data={video}/>)
                    )
                }
                
            </div>
        </div>
    )
}

export default Search
