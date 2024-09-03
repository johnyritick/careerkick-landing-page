import React from 'react'
import CtaButton from './CtaButton'
import Carousel from './Carousel'

const imageArr = [
    '', '', '',
    '', '', ''
]

const StudentImage = () => {
    return (
        <React.Fragment>

            <div className='text-white w-[100%] sm:w-[80%] flex flex-col mx-auto'>
                <h2 className='custom-headings'>
                    Students Who Have Attended This Event Last Year
                    Are Now Studying In Top BAMS Colleges!
                </h2>

                <Carousel />

                <p className='text-xl mt-8 text-center'>
                    Not Just This, We have Helped 20000+ Students In getting Into
                    Top BAMS Colleges In Last 5 years
                </p>
            </div>
            <CtaButton
                text='REGISTER FOR THE WEBINAR NOW!'
                link='#'
                helpText='Get Free Bonus Worth Rs.19999/-, If You Register Today! '
            />
            <div className='text-white w-[100%] sm:w-[80%] flex flex-col mx-auto'>
                <div className='flex flex-row justify-center'>
                    <h2 className='custom-headings w-[full] sm:w-[70%]'>
                        *Special Scholarship For Students
                        With <span className='green-text'>300+ NEET Score</span>
                    </h2>
                </div>
                {/** add custom grdient card */}
                <p className='custom-gradient-card mx-auto'>
                    Get Upto 25K Scholarship On College Tuition Fees
                    By Attending This Webinar

                </p>
            </div>
            <CtaButton
                text='Yes, I Want To Claim The Scholarship!'
                link='#'
                helpText=''
            />
        </React.Fragment>
    )
}

export default StudentImage