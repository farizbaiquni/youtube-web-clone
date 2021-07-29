import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ViewCount from './TotalView'
import '../video.css'
import { formatDistance} from 'date-fns'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constans/routes'

function SearchVideo({data}) {

    
    const[viewCount, setViewCount] = useState(0);

    console.log(data.id.videoId)

    console.log("SEARCHVIDEO RE-RENDER")



    return (
        <Link to={ROUTES.WATCH + data.id.videoId}> 
            <div className="flex cursor-pointer">
            <img src={data.snippet.thumbnails.medium.url} alt="" className=""/>
            <div className="pl-3 pr-3">
                <div id="video__title" className="font-semibold break-words"> {data.snippet.title}</div>
                <div className="flex items-center mt-3 mb-3">
                    <img 
                        src={data.snippet.thumbnails?.medium?.url}
                        alt=""
                        className=" w-5 h-5 object-cover rounded rounded-full mr-2"
                        />
                    <h2 className="text-sm">{data.snippet.channelTitle}</h2>
                </div>
                <p className="text-sm">
                    <ViewCount videoId={data.id.videoId} />
                    <span> . </span>
                    {formatDistance(Date.parse(data.snippet.publishedAt), new Date())} ago
                </p>
                <p id="video__description_search" className="text-xs mt-2">{data.snippet.description}</p>
            </div>
        </div>
        </Link>
    )
}

SearchVideo.propTypes = {
    data : PropTypes.object.isRequired
}

export default SearchVideo
