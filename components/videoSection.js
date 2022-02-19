import React from 'react'
import ReactPlayer from 'react-player/youtube'

const VideoSection = () => {
    return (
        <div className='bg-indigo-300 lg:p-40 m-auto text-center '>
            <ReactPlayer className="flex items-center justify-center w-full m-auto " url='https://www.youtube.com/watch?v=bTMS9y8OVuY&list=TLGGceV3vXgOT4sxOTAyMjAyMg' width={'100%'} height={600} />
        </div>
    )
}

export default VideoSection