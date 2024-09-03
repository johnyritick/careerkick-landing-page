import React from 'react'
import CtaButton from './CtaButton'

const WhatYouLearn = () => {
    return (
        <React.Fragment>
            <div className='w-[100%] sm:w-[80%] flex flex-col mx-auto items-center text-white'>
                <h2 className='custom-headings'>
                    What You’ll Learn:
                </h2>
                <div className="learning-wrapper">
                    <div className='learning-card'>
                        <h3>1. The BAMS Advantage:</h3>
                        <p>
                            Gain a deep understanding of what BAMS is, its curriculum, and why it’s becoming a popular choice among NEET aspirants.
                        </p>
                    </div>
                    <div className='learning-card'>
                        <h3>2. Top Colleges at Your Fingertips:</h3>
                        <p>
                            Meet representatives from the leading BAMS colleges and learn about their programs. Apply directly during the webinar and take the first step toward your medical career.
                        </p>
                    </div>
                    <div className='learning-card'>
                        <h3>3. Career Opportunities in Ayurveda:</h3>
                        <p>
                            Explore the wide range of career paths available to BAMS graduates, from clinical practice to research, wellness tourism, and more.
                        </p>
                    </div>

                    <div className='learning-card'>
                        <h3>4. Expert Insights and Q&A:</h3>
                        <p>
                            Hear from esteemed guests in the BAMS field. They’ll share their experiences and answer your burning questions about pursuing a career in Ayurveda.
                        </p>
                    </div>
                </div>
            </div>
            <CtaButton
                text='BOOK YOUR SEAT FOR FREE!'
                link='#'
                helpText='Very Limited Seats Are Left!' />
        </React.Fragment>
    )
}

export default WhatYouLearn