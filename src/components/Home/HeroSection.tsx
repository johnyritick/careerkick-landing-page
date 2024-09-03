import React, { useEffect, useState } from 'react';
import HeroChart from "../../Assets/Images/Hero_Page_Chart.png";
import { Header } from '../NavBar/Header';
import CtaButton from './CtaButton';

const HeroSection = () => {
    const screenWidth = window.innerWidth;
    console.log("screenWidth", screenWidth);

    // Timer state
    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Convert seconds to HH:MM:SS format
    const formatTime = (time: any) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    };

    return (
        <React.Fragment>

            <div className='flex flex-col justify-between text-white text-center'>
                <h1 className='top-heading'>SHIKSHA SAMAGAM 2.0 (2024) - FOR BAMS ASPIRANTS</h1>
                <div className='flex flex-row justify-center text-center mx-auto'>
                    <h2 className='custom-headings w-[full] sm:w-[70%]'>
                        Unlock Your Path To The <span className='green-text'>Best BAMS College </span>
                        On <span className='green-text'> Low Neet Score & Low Budget</span>
                    </h2>
                </div>

                <p className='text-center text-[16px] sm:text-xl md:text-xl lg:text-xl md: my-4 mx-4 sm:mx-0'>
                    Get direct access to Top BAMS Colleges, Learn from experts in Ayurveda, apply directly to colleges & Instantly Pre-Book Your Seat!
                </p>

                <div className='flex flex-row flex-wrap w-[95%] sm:w-[80%] mx-auto items-center bg-[#222222]'>
                    <div className='flex flex-col justify-center w-full sm:w-1/2 px-1 sm:px-4 py-4 sm:py-16'>
                        <div className='flex flex-row bg-[#181818] rounded-md px-6 py-2 my-2 sm:my-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock green-text mt-1 sm:mt-2 mr-4" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                            </svg>
                            <p className='text-white text-[18px] sm:text-2xl font-semibold'> 2 Hours Webinar - 100% FREE</p>
                        </div>
                        <div className='flex flex-row bg-[#181818] rounded-md px-6 py-2 my-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar2-event green-text mt-1 sm:mt-2 mr-4" viewBox="0 0 16 16">
                                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <p className='text-white text-[18px] sm:text-2xl font-semibold'>5 September 2024 - 12 PM </p>
                        </div>
                        <div className='flex flex-row bg-[#181818] rounded-md px-6 py-2 my-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-translate green-text mt-1 sm:mt-2 mr-4" viewBox="0 0 16 16">
                                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
                            </svg>
                            <p className='text-white text-[18px] sm:text-2xl font-semibold'> Venue - Zoom (Online)</p>
                        </div>
                        <div className='flex flex-row bg-[#181818] rounded-md px-6 py-2 my-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gift-fill green-text mt-1 sm:mt-2 mr-4" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                            </svg>
                            <p className='text-white text-[18px] sm:text-2xl font-semibold'> Get Free Bonus Worth Rs. 19999/- </p>
                        </div>
                    </div>
                    <div className='w-[95%] sm:w-1/2 flex flex-col'>
                        <iframe
                            className='iframe-tag'
                            src="https://www.youtube.com/embed/9CF3nEhu_ng?si=XdzChZGmCy0EtMMy"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                        <div>
                            <p className='text-[15px] sm:text-xl font-semibold text-white text-center mt-6 sm:mt-6 mb-8 sm:mb-0 ml-2'>
                                👆 Watch This Video Before Going Anywhere 👆
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CtaButton text='BOOK YOUR SEAT IN THE WEBINAR FOR FREE!' link="#" helpText="" />
            <div className='text-white text-center'>
                <p className='text-3xl sm:text-4xl font-semibold'>
                    Registrations Closing In
                </p>
                <p className='text-4xl font-semibold my-8 text-[red]'>
                    {formatTime(timeLeft)}
                </p>
            </div>
        </React.Fragment>
    );
};

export default HeroSection;
