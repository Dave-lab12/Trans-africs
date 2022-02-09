import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineForward } from 'react-icons/ai'
import { RiRewindMiniFill } from 'react-icons/ri'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { data } from '../data'
import rewind from '../assets/rewind.png'
const NewPlayer = () => {

    let [audioData, setAudioData] = useState({})
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

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


    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer.current?.loadedmetadata, audioPlayer?.current?.readyState, id]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar?.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30);
        console.log(progressBar.current.value);

        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 30);
        console.log(progressBar.current.value);
        changeRange();
    }

    if (audioData) {

        return (<div className='h-fit bg-indigo-400 py-12 px-32'>
            <audio ref={audioPlayer} src={audioData.audio} preload="metadata"></audio>
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
                    <span className="text-white">{(duration && !isNaN(duration)) ? calculateTime(duration) : '--|--'}</span>
                    <input type='range' ref={progressBar} onChange={changeRange} className='
                    mx-4 form-range
                    appearance-none
                    rounded-3xl
                    h-2
                    w-full
                    h-6
                    p-0
                    bg-white-300
                    focus:outline-none focus:ring-0 focus:shadow-none' />
                    <span className="text-white">{calculateTime(currentTime)}</span>

                </div>
                <div className='flex justify-between items-center text-7xl text-white mt-12'>
                    <span className='cursor-pointer' onClick={backThirty}><img className='w-11' src={rewind.src} /></span>
                    <span className='cursor-pointer' onClick={togglePlayPause}>
                        {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                    </span>
                    <span></span>
                    {/* <span className='cursor-pointer' onClick={forwardThirty}> <AiOutlineForward /></span> */}
                </div>
            </div>
        </div >);
    };
}

export default NewPlayer;




