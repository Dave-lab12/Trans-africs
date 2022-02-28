import React, { useEffect, useState } from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'

import { data } from '../data'
import Link from 'next/link'
const PlayCards = () => {

    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

            {
                data.map((el, index) => {


                    return <>
                        <div key={index} className="rounded overflow-hidden shadow-lg">
                            <img className="w-full h-80" src={el.image} alt="Forest" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{el.title}</div>
                                <p className="text-gray-700 text-base">
                                    {el.description}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button  ><Link href={`/podcast/${el.id}`}><AiFillPlayCircle className='text-5xl text-indigo-700' /></Link></button>
                            </div>
                        </div>


                    </>
                })
            }

        </div>

    )
        ;
};

export default PlayCards;
















