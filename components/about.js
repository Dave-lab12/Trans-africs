import React from "react";
import aboutImg from '/public/pattern.jpg'
import pattern2 from '/public/file.jpg'
import styles from '../styles/about.module.css'
const About = () => {

    return (
        <>
            <div style={{ backgroundImage: `url(${aboutImg.src})` }} className={styles.wrapper} ></div>

            <div id="about" className="flex flex-col md:flex-row w-full">
                <div className="w-1/2 h-screen flex-1 invisible md:visible">
                    <img
                        className="w-full h-full "
                        src={pattern2.src}
                        alt="pattern"
                    />

                </div>
                <div className=" ml-24 mr-12 flex-1">
                    <div className="w-full " >
                        <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9 text-center">
                            About Transhumanism Africa
                        </h2>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                            Transhumanism Africa (TA) is a network of transhumanists across the
                            African continent as well as of peoples of African descent in the
                            Diaspora actively promoting transhumanism in Africa.

                            Transhumanism Africa (TA) is a network of transhumanists across the
                            African continent as well as of peoples of African descent in the
                            Diaspora actively promoting transhumanism in Africa.
                            Transhumanism Africa (TA) is a network of transhumanists across the
                            African continent as well as of peoples of African descent in the
                            Diaspora actively promoting transhumanism in Africa.
                            Transhumanism Africa (TA) is a network of transhumanists across the

                            Transhumanism Africa (TA) is a network of transhumanists across the
                            African continent as well as of peoples of African descent in the
                            Diaspora actively promoting transhumanism in Africa.
                            Transhumanism Africa (TA) is a network of transhumanists across the
                            African continent as well as of peoples of African descent in the
                            Diaspora actively promoting transhumanism in Africa.
                            Transhumanism Africa (TA) is a network of transhumanists across the
                            Transhumanism Africa (TA) is a network of transhumanists across the
                            African continent as well as of peoples of African descent in the
                            Diaspora actively promoting transhumanism in Africa.
                            Transhumanism Africa (TA) is a network of transhumanists across the
                            African continent as well as of peoples of African descent in the
                            Diaspora actively promoting transhumanism in Africa.
                            Transhumanism Africa (TA) is a network of transhumanists across the
                            Transhumanism Africa (TA) is a network of transhumanists across the
                            African continent as well as of peoples of African descent in the
                            Diaspora actively promoting transhumanism in Africa.
                            Transhumanism Africa (TA) is a network of transhumanists across the
                            African continent as well as of peoples of African descent in the
                            Diaspora actively promoting transhumanism in Africa.
                            Transhumanism Africa (TA) is a network of transhumanists across the


                        </p>
                    </div>

                    <div className="  md:gap-14 gap-16 justify-between my-20 w-full">
                        <div className="w-full ">
                            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
                                What is Transhumanism?
                            </h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
                                Transhumanism can be defined as the philosophical movement that
                                advocates for the transformation of the human condition by
                                developing and making widely available sophisticated technologies to
                                greatly enhance human intellect and physiology

                            </p>
                            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 m-3.5">
                                Join the Movement
                            </h2>
                            <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 ">
                                Transhumanism Africa is aimed at creating a community of like-minded
                                individuals or organizations interested in emerging and beneficial
                                technologies, that will contribute to positive impact and creating
                                positive futures to the African continent that push the limits of
                                physical and intellectual capabilities.
                            </p>
                        </div>
                    </div>
                </div >

            </div>
        </>
    );
};

export default About;


