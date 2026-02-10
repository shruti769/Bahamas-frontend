import BahaMoments from '@/components/about/bahamasmoment'
import DiscoverSection from '@/components/about/discoversection'
import HeroSection from '@/components/about/herosection'
import WhatMakesUsDifferent from '@/components/about/Whatmakesusdifferent'
import WhoWeAre from '@/components/about/whoweare'
import WhyWeExist from '@/components/about/WhyWeExist'
import WhyChoose from '@/components/home/WhyChoose'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <DiscoverSection/>
      <BahaMoments/>
      
      <WhyWeExist/>
      <WhoWeAre/>
      <WhatMakesUsDifferent/>
      <WhyChoose/>
    </div>
  )
}

export default AboutPage