import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/audioPlayer.module.css'
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
const Player = ({ play, isPlayingP, setIsPlayingP }) => {
    console.log(play);
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;

    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, play]);

    console.log(isPlayingP);
    useEffect(() => {
        if (play?.audio && isPlayingP && setIsPlayingP) {
            // setIsPlaying(true)
            // togglePlayPause()
            audioPlayer.current.play()
            setIsPlaying(true)
            animationRef.current = requestAnimationFrame(whilePlaying)
        }
        if (isPlayingP == false) {
            audioPlayer.current.pause()
            setIsPlaying(false)
            cancelAnimationFrame(animationRef.current);
        }

    }, [play, isPlayingP])


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
            let playPromise = audioPlayer.current.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    audioPlayer.current.play();
                }).catch(error => {
                    console.log(error);
                })
            }

            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar?.current?.value = audioPlayer?.current?.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer?.current?.currentTime = progressBar?.current?.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar?.current?.style?.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar?.current?.value);
    }

    const backThirty = () => {
        progressBar?.current?.value = Number(progressBar.current.value - 30);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar?.current?.value = Number(progressBar.current.value + 30);
        changeRange();
    }



    return (<div className='fixed bottom-5 bg-gray-400 p-1 rounded-lg w-10/12'>
        <div className={styles.audioPlayer}>
            <audio ref={audioPlayer} src={play && play.audio} preload="metadata"></audio>
            {/* <button className={styles.forwardBackward} onClick={backThirty}><BsArrowLeftShort /> 30</button> */}
            <button onClick={togglePlayPause} className={styles.playPause}>
                {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
            </button>
            {/* <button className={styles.forwardBackward} onClick={forwardThirty}>30 <BsArrowRightShort /></button> */}

            {/* current time */}
            <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div className='w-10/12 mx-1.5'>
                <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
            </div>

            {/* duration */}
            <div className={styles.duration}>{(duration && !isNaN(duration)) ? calculateTime(duration) : '--|--'}</div>
        </div>
    </div>);
};

export default Player;
