import React from 'react'
import CtaButton from './CtaButton'
import Image1 from "../../Assets/Images/image_1.jpg"
import Image2 from "../../Assets/Images/image-2.jpg"

import Image3 from "../../Assets/Images/image-3.jpg"
import Image4 from "../../Assets/Images/image-4.jpg"
import Image5 from "../../Assets/Images/image-5.jpg"
import Image6 from "../../Assets/Images/image-6.jpg"


const Glimpse = () => {
    return (
        <React.Fragment>
            <div className='flex flex-col mx-auto w-[100%] sm:w-[80%] text-white'>
                <h2 className='custom-headings'>
                    Glimpse From Shiksha Samagam Seminar (2023)
                </h2>

                <div className='flex flex-row image-wrapper'>
                    <img src={Image1} alt='image-1' className='image-card'/>
                    <img src={Image2} alt='image-2' className='image-card' />

                    <img src={Image3} alt='image-3' className='image-card' />
                    <img src={Image4} alt='image-4' className='image-card' />

                    <img src={Image5} alt='image-5' className='image-card' />
                    <img src={Image6} alt='image-6' className='image-card' />

                </div>
            </div>
            <CtaButton
                text='BOOK YOUR SEAT IN SHIKSHA SAMAGAM WEBINAR'
                link='#'
                helpText=''
            />
        </React.Fragment>
    )
}

export default Glimpse