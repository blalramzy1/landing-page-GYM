import React from 'react'
import { about } from '../data'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const About = () => {
  const { title, icon, subtitle1, subtitle2, link } = about;
  return (
    <section className=' py-[80px] 
    md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
      <div className='container mx-auto'>
        <div className='section-title-group justify-start' 
        data-aos='fade-up' 
        data-aos-delay='100'
        >
        <img src={icon} alt="" />
        <h2 className='h2 section-title'>
          {title} <span className='text-primary-200 rounded'>.</span>{' '}</h2>
      </div>
      <div className='px-8 max-w-[950px]'>
      <p className='md:text-body-md mb-12' 
      data-aos='fade-up' 
      data-aos-delay='200'
      >
      {subtitle1}</p>
      <p className='md:text-body-md mb-8'
      data-aos='fade-up' 
      data-aos-delay='100'
      >
      {subtitle2}</p>
      <a className='link flex items-center gap-x-2 text-lg 
      hover:gap-x-4 transition-all' 
      href="/" data-aos='fade-right' 
      data-aos-delay='100'
      >
        {link}
        <IoIosArrowDroprightCircle className='text-xl'/>

        </a>
      </div>
      
      </div>
    </section>
  )
}

export default About