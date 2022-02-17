import React, { useState } from "react";

const Hero = () => {
    const [show, setShow] = useState(false);
    return <div className="lg:px-6 xl:px-0">
        <div className="container mx-auto relative z-20">

        </div>
        <div className="mx-auto container relative z-0 px-4 xl:px-0">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                    <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
                        Welcome to Transhumanism Africa
                    </h1>
                    <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">
                        Leapfroging Africa into the Fourth Industrial Revolution
                    </h2>
                    <div className="w-full flex justify-center md:block">
                        <a href="#about">  <button className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p">
                            Learn More
                        </button></a>
                    </div>
                </div>
                <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                    {/* <img className=h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                    <img
                        className="md:absolute md:w-1/2 md:-ml-28 rounded-xl"
                        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80"
                        alt
                    />
                </div>
            </div>
        </div>
    </div>
};

export default Hero;
