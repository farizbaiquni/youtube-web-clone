import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import HeaderWatch from '../components/watch/HeaderWatch'
import SidebarWatch from '../components/watch/SidebarWatch'
import WatchVideo from '../components/watch/'

function Watch() {

    const[showSidebar, setShowSidebar] = useState(false);


    return (
        <div>
           <HeaderWatch 
                showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
            />            
            <SidebarWatch showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <WatchVideo />
        </div>
    )
}

export default Watch
