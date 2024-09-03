import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import '../components/Home/HomeStyle.css';
import StudentImage from '../components/Home/StudentImage';
import Shiksha from '../components/Home/Shiksha';
import ShouldRegister from '../components/Home/ShouldRegister';
import FAQ from '../components/Home/FAQ';
import DoNotMisOut from '../components/Home/DoNotMisOut';
import GuestSpeaker from '../components/Home/GuestSpeaker';
import RegisterBonus from '../components/Home/RegisterBonus';
import WhatYouLearn from '../components/Home/WhatYouLearn';
import StudentTestimonial from '../components/Home/StudentTestimonial';
import Glimpse from '../components/Home/Glimpse';

export const Home = () => {
  return <React.Fragment>
    <div className='bg-black'>
      <HeroSection />
      <StudentImage />
      <Shiksha />
      <ShouldRegister />
      <Glimpse />
      <StudentTestimonial />
      <WhatYouLearn />
      <RegisterBonus />
      <GuestSpeaker />
      <DoNotMisOut />
      <FAQ />
    </div>
  </React.Fragment>
}
