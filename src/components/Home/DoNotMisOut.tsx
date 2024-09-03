import React from 'react'
import CtaButton from './CtaButton'

const DoNotMisOut = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col mx-auto text-white w-[90%] sm:w-[80%] ">
        <h2 className='custom-headings'>Don’t Miss Out!</h2>
        <h3 className='last-heading'>
          Secure your spot in "Siksha Samagam 2.0 (2024)" and take the first step toward a successful career in BAMS. Seats are limited, so register now and ensure your future in the world of Ayurveda!

        </h3>
      </div>
      <CtaButton
        text='REGISTER NOW!'
        link='#'
        helpText='' />
    </React.Fragment>
  )
}

export default DoNotMisOut