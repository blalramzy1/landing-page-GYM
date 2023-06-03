import React from 'react'

import { community } from '../data'

import CoummunitySlider from './CommunitySlider'
const Community = () => {
  const {icon ,title , test ,testimonials} = community;
  return (
    <section className='section relative' >
      <div className='container mx-auto'>
      <div className='flex'>
        <div className='section-title-group max-w-[240px] 
        p-4 lg:px-0 lg:ml-0 mx-auto'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
        >
          <img src={icon} alt="" />
          <h2 className='h2 section-title'>{title} <span className='text-primary-200'>.</span></h2>
        </div>
        <div className='absolute -right-[375px] lg:-right-[280px] top-48 lg:top-0 w-[1140px]'
         data-aos='fade-left'
         data-aos-offset='200'
         data-aos-delay='300'>
          <CoummunitySlider testimonials={testimonials} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Community