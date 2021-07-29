import React, { useState, useEffect } from 'react'
import './video.css'
import PropTypes from 'prop-types'

function Video({data}) {

    const[dataChannel, setDataChannel] = useState(null);
    const[totalView, setTotalView] = useState(0);
    const[numberText, setNumberText] = useState("");

    useEffect(() => {

        async function getChannelInfo(){
            await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${data.snippet.channelId}&key=AIzaSyB_1mfqc2jVtISriLjNZSn987h27rdm2KU`).then(response => response.json()).then(result => setDataChannel(result))
        }

        getChannelInfo()

        const number = data.statistics.viewCount
        if(number.length < 4){
            setTotalView(number)
            setNumberText('')
        } else if(number.length >= 4 && number.length < 7){
            setTotalView(Math.round(number / 1000))
            setNumberText('K ')
        } else if(number.length === 7){
            setTotalView((number / 1000000).toFixed(1))
            setNumberText('M ')
        } else if(number.length >= 8 && number.length < 10){
            setTotalView(Math.round(number / 1000000))
            setNumberText('M ')
        } else if(number.length === 10){
            setTotalView((number / 1000000000).toFixed(1))
            setNumberText('B ')
        } else if(number.length >= 11 && number.length < 13){
            setTotalView(Math.round(number / 1000000000))
            setNumberText('B ')
        } else if(number.length === 13){
            setTotalView((number / 1000000000000).toFixed(1))
            setNumberText('T ')
        } else if(number.length >= 14 && number.length < 17){
            setTotalView(Math.round(number / 1000000000000))
            setNumberText('T ')
        }

    }, [data.statistics.viewCount, data.snippet.channelId])

    // console.log(dataChannel.items[0].snippet.thumbnails.medium.url)
    // console.log(data)

    return (
        <div className="flex md:flex-col w-full">
            <img src={data.snippet.thumbnails?.medium?.url} alt="" className={" w-80 "}/>
            {/* <iframe className="w-full"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe> */}
            <div className="flex flex-1 mt-3">
                <img 
                    src={dataChannel?.items[0].snippet.thumbnails.medium.url}
                    alt=""
                    className=" w-10 h-10 object-cover rounded rounded-full mx-2"
                    />
                <div className="flex flex-col">
                    <div id="video__title" className="font-semibold break-words"
                    > {data.snippet.title}</div>
                    <h2 className="text-sm">{data.snippet.channelTitle}</h2>
                    <h3 className="text-sm"> {totalView} {numberText} {totalView <= 1 ? 'view' : 'views' }</h3>
                </div>
            </div>
        </div>
    )
}

Video.propTypes = {
    data : PropTypes.shape({
        contentDetails: PropTypes.object.isRequired,
        snippet: PropTypes.object.isRequired,
        statistics: PropTypes.object.isRequired,
    })
}

export default Video
