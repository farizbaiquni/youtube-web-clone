import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function TotalView({videoId}) {

    const[number, setNumber] = useState(0)
    const[totalView, setTotalView] = useState(0);
    const[numberText, setNumberText] = useState("");

    console.log("Total View RE-RENDER")

    useEffect(() => {

        async function getVideoInfo(){
            await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyB_1mfqc2jVtISriLjNZSn987h27rdm2KU`)
            .then(response => response.json())
            .then( result => setNumber(result.items[0]?.statistics.viewCount))
        }

        getVideoInfo()

        
        if(number?.length < 4){
            setTotalView(number)
            setNumberText('')
        } else if(number?.length >= 4 && number?.length < 7){
            setTotalView(Math.round(number / 1000))
            setNumberText('K ')
        } else if(number?.length === 7){
            setTotalView((number / 1000000).toFixed(1))
            setNumberText('M ')
        } else if(number?.length >= 8 && number?.length < 10){
            setTotalView(Math.round(number / 1000000))
            setNumberText('M ')
        } else if(number?.length === 10){
            setTotalView((number / 1000000000).toFixed(1))
            setNumberText('B ')
        } else if(number?.length >= 11 && number?.length < 13){
            setTotalView(Math.round(number / 1000000000))
            setNumberText('B ')
        } else if(number?.length === 13){
            setTotalView((number / 1000000000000).toFixed(1))
            setNumberText('T ')
        } else if(number?.length >= 14 && number?.length < 17){
            setTotalView(Math.round(number / 1000000000000))
            setNumberText('T ')
        }

    }, [number, videoId])

    return (
        <>
            <span>{totalView} {numberText} {totalView <= 1 ? 'view' : 'views' }</span>
        </>
    )
}

TotalView.propTypes = {
    videoId: PropTypes.string.isRequired
}

export default TotalView

