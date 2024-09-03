import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is Siksha Samagam 2.0 (2024)?',
    answer:
      'Siksha Samagam 2.0 (2024) is a 2-hour webinar designed for BAMS aspirants. It offers direct access to top BAMS colleges, expert guidance from industry professionals, and the opportunity to apply directly to colleges during the event.',
  },
  {
    question: 'Who should attend this webinar?',
    answer:
      'This webinar is ideal for NEET aspirants, parents of NEET students, BAMS enthusiasts, Ayurveda lovers, and career counselors who want to learn more about BAMS and explore career opportunities in Ayurveda.',
  },
  {
    question: 'Is the webinar free to attend?',
    answer:
      'Yes, the webinar is 100% free to attend. All you need to do is register, and you’ll receive access to the live session on Zoom.',
  },
  {
    question: 'How do I register for the webinar?',
    answer:
      'To register, click on the "Book Your Seat for Free" button on the landing page. Fill out the registration form, and you\'ll receive a confirmation email with all the details.',
  },
  {
    question: 'What if I have a low NEET score? Can I still benefit from this webinar?',
    answer:
      'Absolutely! Siksha Samagam 2.0 is specifically designed to help students with low NEET scores find the best BAMS colleges that match their profile and budget.',
  },
  {
    question: 'What bonuses do I get if I register today?',
    answer:
      'By registering today, you\'ll receive a free bonus worth Rs. 19,999/-, which includes a 30-minute one-on-one counseling session with our experts. This session will offer personalized guidance, college selection help, budget planning, and insider tips on the BAMS admission process.',
  },
  {
    question: 'Will I be able to apply to colleges during the webinar?',
    answer:
      'Yes, you will have the opportunity to directly apply to top BAMS colleges during the webinar, making the process quick and hassle-free.',
  },
  {
    question: 'What can I expect to learn from this webinar?',
    answer:
      'You\'ll learn about the BAMS curriculum, meet representatives from top colleges, explore career opportunities in Ayurveda, and gain expert insights through Q&A sessions.',
  },
  {
    question: 'Can parents attend the webinar?',
    answer:
      'Yes, parents are encouraged to attend. The webinar will provide clarity on BAMS as a career path and help them understand the admission process and opportunities available to their children.',
  },
];

const FAQ = () => {
  // State for tracking which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the answer display
  const toggleAnswer = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-[100%] sm:w-[80%] flex flex-col mx-auto items-center text-white pt-6 sm:pt-0'>
      <h2 className='custom-headings'>Frequently Asked Questions</h2>

      <div className='faq-wrapper'>
        {faqData.map((item, index) => (
          <div key={index} className='faq-card py-4'>
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => toggleAnswer(index)}
            >
              <p className='font-semibold text-[16px] sm:text-2xl'>{item.question}</p>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ▼
              </span>
            </div>
            {openIndex === index && <hr className='my-4'/>}
            {openIndex === index && (
              <p className='text-[14px] sm:text-xl mt-2 transition-all duration-300 ease-in-out'>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
