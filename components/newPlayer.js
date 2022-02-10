import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineForward, AiOutlineBackward } from 'react-icons/ai'
import { RiRewindMiniFill } from 'react-icons/ri'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { data } from '../data'
import ReactPlayer from 'react-player'

const NewPlayer = () => {

    let [audioData, setAudioData] = useState({})
    const [played, setPlayed] = useState(0);
    const [isPlaying, setIsPlaying] = useState(0);
    const [duration, setDuration] = useState(0);
    const progress = useRef(null);
    const player = useRef(null);

    const router = useRouter()
    let id = parseFloat(router.query.id)
    useEffect(() => {
        console.log(data, id);
        data.map(el => {
            if (el.id === id) {
                setAudioData(el)
            }
        })


    }, [id])
    const togglePlaying = () => {
        setIsPlaying(isPlaying => !isPlaying)
    }
    const onDuration = (duration) => {
        setDuration(duration)
    }
    const handleChange = () => {
        // setPlayed(progress.current.value)
        player.current.seekTo(progress.current.value)
    }


    const handleBackwards = () => {
        // setPlayed(played => played + 30)
        player.current.seekTo(played - 30)
    }
    const handleForwards = () => {
        player.current.seekTo(played + 30)


    }

    if (audioData) {

        return (
            <div className='h-fit bg-indigo-400 py-12 px-32'>
                {/* <audio ref={audioPlayer} src={audioData.audio} preload="metadata"></audio> */}
                <div className='max-w-screen-md m-auto'>
                    <div className='flex items-center text-white text-xl cursor-pointer'>

                        <Link href='/podcast'><IoMdArrowRoundBack /></Link>
                        <span className='mx-2'> <Link href='/podcast'>Back</Link></span>
                    </div>

                    <div className='flex items-center justify-center mb-24 gap-24 pt-8'>
                        <img className='gap-10 max-w-md' src={audioData.image} alt='album cover' />
                        <div>
                            <h1 className='text-5xl text-white font-extrabold'>{audioData.title}</h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center '>
                        <span className="text-white">{(played / 60).toFixed(2)}</span>
                        <input type='range' ref={progress} onChange={handleChange} defaultValue='0' value={played} max={duration} className='
                    mx-4 form-range
                    appearance-none
                    rounded-3xl
                    h-2
                    w-full
                   
                    p-0
                    bg-gray-300
                    focus:outline-none focus:ring-0 focus:shadow-none' />

                        <span className="text-white">{duration}</span>

                    </div>
                    <div className='flex justify-between items-center text-7xl text-white mt-12'>

                        <span className='cursor-pointer' onClick={handleBackwards}> <AiOutlineBackward /></span>
                        <span className='cursor-pointer' onClick={togglePlaying}>
                            {
                                isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />
                            }

                        </span>
                        <span className='cursor-pointer' onClick={handleForwards} > <AiOutlineForward /></span>
                    </div>
                </div >
                <ReactPlayer url={`${audioData.audio}`} width="100%"
                    onProgress={(progress) => {
                        setPlayed(progress.playedSeconds);
                    }}
                    ref={player}
                    playing={isPlaying}
                    onDuration={onDuration}
                />
            </div >);
    };
}
export default NewPlayer;