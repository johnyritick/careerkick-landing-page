import React from 'react'

const CtaButton = ({text, link, helpText} : ({text: string, link: string, helpText: string})) => {
  return (
    <div className='flex flex-col mx-auto my-10 w-[90%] sm:w-[60%]'>
        <a href={link} className='cta-btn'>{text}</a>
        {helpText !== "" && <p>
        {helpText}
        </p>}
    </div>
  )
}

export default CtaButton