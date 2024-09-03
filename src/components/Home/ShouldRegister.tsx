import React from 'react'
import CtaButton from './CtaButton'

const ShouldRegister = () => {
    return (
        <React.Fragment>
            <div className='text-white flex flex-row flex-wrap w-[100%] sm:w-[80%] mx-auto'>
                <div className="neet-wrapper">
                    <div className='neet-card'>
                    <span className='font-semibold'>NEET Aspirants:</span>
                        <p className=''>
                            
                            If you’ve taken the NEET exam and are considering a career in Ayurveda, this webinar is tailored for you. Learn how to use your score to get into top BAMS colleges.
                        </p>
                    </div>
                    <div className='neet-card'>
                    <span className='font-semibold'>Parents of NEET Students:</span>
                        <p className=''>
                            
                            Concerned about your child’s future? This webinar will provide clarity on BAMS as a viable and rewarding career path.
                        </p>
                    </div>
                    <div className='neet-card'>
                    <span className='font-semibold'>BAMS Enthusiasts & Ayurveda Lovers:</span>

                        <p className=''>
                            Curious about the ancient science of Ayurveda? Explore how a BAMS degree can open doors to a fulfilling career in natural medicine.
                        </p>
                    </div>
                    <div className='neet-card'>
                    <span className='font-semibold'>Career Counsellors & Educators:</span>

                        <p className=''>
                            Stay updated on the latest trends in BAMS education and get insights that will help you guide your students effectively.
                        </p>
                    </div>
                </div>
            </div>
            <CtaButton
                text='BOOK YOUR SEAT NOW FOR FREE!'
                link='#'
                helpText='Get Free Bonus Worth Rs.19999/-, If You Register Today! '
            />
        </React.Fragment>
    )
}

export default ShouldRegister