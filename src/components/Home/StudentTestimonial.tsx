import React from 'react'
import CtaButton from './CtaButton'

const data = [
    {
        'message': `"Last year, I attended the Siksha Samagam seminar, and it was truly a turning point for me. Thanks to the CareerKick team, I'm now studying at Major SD Singh Ayurvedic Medical College, one of the top BAMS colleges in UP."`,
        "writer": "— Priya R., BAMS Student"
    },
    {
        'message': '"I got 200 marks in NEET last year, and I was worried about finding the right college within my budget. After attending Siksha Samagam, CareerKick guided me to secure a seat in a top BAMS college with an annual fee of just 2.20 lakhs. I couldn’t be happier!"',
        "writer": "— Ankit M., BAMS Aspirant"
    },
    {
        'message': '"Siksha Samagam 2023 was a game-changer for me. With the expert advice and direct applications, I got into my dream BAMS college in UP. The CareerKick counselors were incredibly supportive throughout the process."',
        "writer": "— Ritika S., BAMS Student"
    },
    {
        'message': `"I was skeptical about my chances with a NEET score of 180, but attending Siksha Samagam turned things around. CareerKick's guidance helped me get into a top BAMS college that perfectly matched my budget and preferences."`,
        "writer": "— Vivek K., BAMS Student"
    },
    {
        'message': '"The Siksha Samagam seminar was more than just informative; it was life-changing. CareerKick’s counselors helped me navigate through the complexities of BAMS admissions and secured my spot at one of the best colleges in the state."',
        "writer": "— Megha T., BAMS Student"
    },
    {
        'message': '"Thanks to the Siksha Samagam seminar, I’m now a proud student of one of the leading BAMS colleges. The CareerKick team’s support and guidance were crucial in helping me achieve my goals."',
        "writer": "— Sneha P., BAMS Student"
    },
    {
        'message': '"With a NEET score of 220, I didn’t think I could get into a top BAMS college. But after attending Siksha Samagam, I received personalized guidance that led me to secure a seat in a reputed college within my budget."',
        "writer": "— Rahul S., BAMS Student"
    },
    {
        'message': '"I attended Siksha Samagam last year, and it was the best decision I made. CareerKick counselors helped me every step of the way, from understanding the BAMS course to securing admission in a top college in UP."',
        "writer": "— Aditi J., BAMS Student"
    }
]

const StudentTestimonial = () => {
    return (
        <React.Fragment>
            <div className='flex flex-col mx-auto w-[100%] sm:w-[80%] text-white'>
                <div className='flex flex-row justify-center'>

                    <h2 className='custom-headings w-[full] sm:w-[70%]'>
                        See What Our Previous Students Are Saying About Us</h2>
                </div>
                <div className='w-[90%] sm:w-full'>
                    <div className="testimonial-wrapper">
                        {data.map((item) => {
                            return <div className='testimonial-card'>
                                <p>{item.message}</p>
                                <strong>{item.writer}</strong>
                            </div>
                        })}
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

export default StudentTestimonial