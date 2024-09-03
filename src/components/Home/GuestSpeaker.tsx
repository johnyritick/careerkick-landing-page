import React from 'react'
import CtaButton from './CtaButton'

const speaker = [
    {
        "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJPR_VuXHvRQBME60XEkCKffBwDbyg7PVkg&s',
        'name': 'Mr. Nikhil Sachan',
        'designation': 'Founder & CEO Careerkick Services & Ntechzy',
        'detail': `Nikhil Sachan is the visionary founder of India’s largest college counseling company, Careerkick Services. Over the past 7 years, he has personally guided and helped over 2 lakh students secure admissions into top medical and BAMS colleges across the country. His expertise and dedication have made him a well-known figure in the medical education industry.
Beyond his contributions to education, Nikhil is also a leading personality in the tech world. As the founder of NTechzy, a global tech company, he has made significant strides in delivering cutting-edge solutions to clients worldwide. His dual expertise in education and technology makes him a powerful mentor who understands both academic excellence and innovative thinking.`
    },
    {
        "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJPR_VuXHvRQBME60XEkCKffBwDbyg7PVkg&s',
        'name': 'Mr. Nikhil Sachan',
        'designation': 'Founder & CEO Careerkick Services & Ntechzy',
        'detail': `Nikhil Sachan is the visionary founder of India’s largest college counseling company, Careerkick Services. Over the past 7 years, he has personally guided and helped over 2 lakh students secure admissions into top medical and BAMS colleges across the country. His expertise and dedication have made him a well-known figure in the medical education industry.
Beyond his contributions to education, Nikhil is also a leading personality in the tech world. As the founder of NTechzy, a global tech company, he has made significant strides in delivering cutting-edge solutions to clients worldwide. His dual expertise in education and technology makes him a powerful mentor who understands both academic excellence and innovative thinking.`
    },
    {
        "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJPR_VuXHvRQBME60XEkCKffBwDbyg7PVkg&s',
        'name': 'Mr. Nikhil Sachan',
        'designation': 'Founder & CEO Careerkick Services & Ntechzy',
        'detail': `Nikhil Sachan is the visionary founder of India’s largest college counseling company, Careerkick Services. Over the past 7 years, he has personally guided and helped over 2 lakh students secure admissions into top medical and BAMS colleges across the country. His expertise and dedication have made him a well-known figure in the medical education industry.
Beyond his contributions to education, Nikhil is also a leading personality in the tech world. As the founder of NTechzy, a global tech company, he has made significant strides in delivering cutting-edge solutions to clients worldwide. His dual expertise in education and technology makes him a powerful mentor who understands both academic excellence and innovative thinking.`
    },
]

const GuestSpeaker = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col mx-auto text-white w-full sm:w-[80%]">

                <h3 className='custom-headings'>
                    MEET OUR <span className='green-text'>GUEST</span> SPEAKERS
                </h3>

                <div className='speaker-wrapper'>
                    {speaker.map((item, index) => {
                        return index % 2 == 0 ? <div className='speaker-card-even'>
                            <div className='left'>
                                <p className='speaker-name'>{item.name}</p>
                                <p className='speaker-designation'>{item.designation}</p>
                                <p className='speaker-details'>
                                    {item.detail}
                                </p>

                            </div>
                            <div className='right'>
                                <img src={item.img} alt={item.name} className='speaker-img' />
                            </div>
                        </div> : <div className='speaker-card-odd'>
                            <div className='left'>
                                <img src={item.img} alt={item.name} className='speaker-img' />
                            </div>
                            <div className='right'>
                                <p className='speaker-name'>{item.name}</p>
                                <p className='speaker-designation'>{item.designation}</p>
                                <p className='speaker-details'>
                                    {item.detail}
                                </p>
                            </div>
                        </div>

                    })}
                </div>

                <div className='speaker-wrapper-mobile'>
                    {speaker.map((item, index) => {
                        return  <div className='speaker-mobile-card-even'>
                            <div className='right'>
                                <img src={item.img} alt={item.name} className='speaker-mobile-img' />
                            </div>
                            <div className='left'>
                                <p className='speaker-mobile-name'>{item.name}</p>
                                <p className='speaker-mobile-designation'>{item.designation}</p>
                                <p className='speaker-mobile-details'>
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <CtaButton
                text=' BOOK YOUR SEAT FOR FREE!'
                link='#'
                helpText=''
            />
        </React.Fragment>
    )
}

export default GuestSpeaker