import React from 'react'
import ReactPlayer from 'react-player/youtube'

const VideoSection = () => {
    return (
        <div className='bg-indigo-300 lg:p-40 m-auto text-center '>
            <ReactPlayer className="flex items-center justify-center w-full m-auto " url='https://www.youtube.com/watch?v=2eNm4KJp1q0' width={'100%'} height={600} />
        </div>
    )
}

export default VideoSection