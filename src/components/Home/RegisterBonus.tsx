import React from 'react'
import CtaButton from './CtaButton'

const leftData = [
    {
        'head': 'Personalized Guidance: ',
        "text": " Receive tailored advice on your BAMS admission strategy."
    },
    {
        'head': 'College Selection Help:',
        "text": "Get expert recommendations for the best BAMS colleges based on your NEET score."
    },
    {
        'head': 'Budget Planning:',
        "text": "Learn how to maximize your budget for top college options."
    },
    {
        'head': 'Exclusive Insider Tips:',
        "text": "Gain insights into the BAMS admission process to boost your chances of success."
    }
]

const rightData = [
    {
        'head': 'Previous Year Government College Cutoff',
        "text": ""
    },
    {
        'head': 'Previous Year Top 10 Private College Cutoff',
        "text": ""
    },
    {
        'head': 'Detailed Medical Courses Information',
        "text": ""
    },
    {
        'head': 'College Selection Help:',
        "text": "Detailed Info About BAMS & Ayush Counselling"
    }
]

const RegisterBonus = () => {
    return (
        <React.Fragment>
            <div className='w-full sm:w-[80%] flex flex-col mx-auto items-center text-white'>
                <h2 className='custom-headings'>👇 Get This  Free Bonus Worth Rs.19999/-, <br />If You Register Today! 👇</h2>
                <div className="wrapper">
                    <div className="card">
                        <div className="card-content">
                            <div className='flex flex-col sm:flex-row justify-between'>
                                <div className='flex flex-col'>
                                    <h2 className="card-title">Bonus 1</h2>
                                    <p className="card-price">30 Mins One-On-One Counselling Session With Experts</p>
                                </div>
                                <button className="apply-btn">Apply Now</button>
                            </div>
                            <ul className="benefits-list">
                                {leftData.map((item) => {
                                    return <li>
                                        <p><span className='font-semibold'>{item.head}</span> {item.text}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                        <div className='flex flex-col sm:flex-row justify-between'>
                                <div className='flex flex-col'>
                                    <h2 className="card-title">Bonus 2</h2>
                                    <p className="card-price">30 Mins One-On-One Counselling Session With Experts</p>
                                </div>
                                <button className="apply-btn">Apply Now</button>
                            </div>
                            <ul className="benefits-list">
                                {rightData.map((item) => {
                                    return <li>
                                        <p><span className='font-semibold'>{item.head}</span></p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <CtaButton
                text='BOOK YOUR SEAT FOR FREE!'
                link='#'
                helpText='' />
        </React.Fragment>
    )
}

export default RegisterBonus