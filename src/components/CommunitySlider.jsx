import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'


const CommunitySlider = ({testimonials}) => {
  return <Swiper 
  slidesPerView={3}
  spaceBetween={32}
  centeredSlides={'auto'}
  grabCursor={true}
  modules={[]}>
    {testimonials.map((testimonial,idx)=>{
        const {image,name,message} = testimonial;

      return <SwiperSlide key={idx}>
        <div className='relative'>
          <div>
            <img className='rounded-sm' src={image} alt="" />
          </div>
          <div className='absolute bottom-[30px] text-white p-[20px] text-center'>
            <div className='mb-8 italic text-lg font-light'>{message}</div>
            <div className='flex justify-center items-center gap-x-[3px]'>
              <span className='text-[30px] text-primary-200 text-bold'>~</span>
              <div className='text-[20px] font-bold'>{name}</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>
  
}

export default CommunitySlider