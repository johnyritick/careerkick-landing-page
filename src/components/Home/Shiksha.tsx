import React from 'react'
import CtaButton from './CtaButton'

const Shiksha = () => {
    return (
        <React.Fragment>
            <div className='text-white w-[100%] sm:w-[80%] flex flex-col mx-auto'>
                <h2 className='custom-headings'>Why Attend Shiksha Samagam 2.0 (2024)?</h2>
                <div className='shiksha-wrapper'>
                    <div className='shiksha-card'>
                        <h3>Direct College Applications:</h3>
                        <p>
                            Apply to top BAMS colleges instantly during the webinar—no hassle, just results.
                        </p>
                    </div>
                    <div className='shiksha-card'>
                        <h3>Expert Guidance from BAMS Professionals:</h3>
                        <p>
                            Learn directly from the experts about BAMS, career paths, and how to make the most of your NEET score.
                        </p>
                    </div>

                    <div className='shiksha-card'>
                        <h3>Explore Lucrative BAMS Careers:</h3>
                        <p>
                            Discover the rewarding career opportunities available with a BAMS degree and how to seize them.
                        </p>
                    </div>
                    <div className='shiksha-card'>
                        <h3>Exclusive Admission Tips:</h3>
                        <p>
                            Get insider tips on how to maximize your NEET score for BAMS admissions.
                        </p>
                    </div>
                    <div className='shiksha-card'>
                        <h3>Connect with Top Colleges:</h3>
                        <p>
                            Engage with representatives from leading BAMS colleges and start your journey to a successful career in Ayurveda.
                        </p>
                    </div>
                </div>
            </div>
            <CtaButton
                text='BOOK YOUR SEAT FOR FREE!'
                link='#'
                helpText='Very Limited Seats Are Left!'
            />
        </React.Fragment>
    )
}

export default Shiksha