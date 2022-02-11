import React from "react";
import Link from 'next/link'
function Footer() {
    return (
        <>
            <div className=" bg-linear-pink-invert pb-12">
                <div className="mx-auto container pt-20 lg:flex flex-col items-center justify-center">
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">Transhumanism</h1>

                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <Link href='/podcast'>    Podcast </Link>
                                </li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <Link href='/login' >  login </Link>
                                </li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <Link href='/register'>  signup</Link>
                                </li>
                                {/* <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li> */}
                                {/* <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li> */}
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2022 Transhumanism. All rights reserved</p>
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                </div>
            </div>
        </>
    );
}

export default Footer;
