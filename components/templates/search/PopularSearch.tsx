"use client"
import React from 'react'
import PopularSearchItems from './PopularSearchItems'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
function PopularSearch() {
  return (
    <div className='col-span-12 pb-6 border-b border-b-neutral-4'>
        <p className='text-neutral-13 body-3 mt-6 mb-4' >جستجوهای پرطرفدار</p>
            <Swiper 
            slidesPerView={3.1}
            breakpoints={{
                576:{
                    slidesPerView:5
                },
                768:{
                    slidesPerView:6.5
                },
                992:{
                    slidesPerView:10
                }
            }}
             >
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
               <SwiperSlide>
            <PopularSearchItems/>
               </SwiperSlide>
            </Swiper>
    </div>
  )
}

export default PopularSearch