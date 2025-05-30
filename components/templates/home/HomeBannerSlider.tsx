"use client"
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
function HomeBannerSlider() {
  return (
    <Swiper 
    slidesPerView={2.1}
    spaceBetween={10}
    breakpoints={{
        992:{
            slidesPerView:3.2
        },
        768:{
            slidesPerView:2.5
        },
        576:{
            slidesPerView:2
        }
    }}
    >
        <SwiperSlide>
            <Link href={'/'} >
            <img src="/assets/images/banner-2.png" alt="" />
            </Link> 
        </SwiperSlide>
        <SwiperSlide>
            <Link href={'/'} >
            <img src="/assets/images/banner-3.png" alt="" />
            </Link> 
        </SwiperSlide>
        <SwiperSlide>
            <Link href={'/'} >
            <img src="/assets/images/banner-4.png" alt="" />
            </Link> 
        </SwiperSlide>
        <SwiperSlide>
            <Link href={'/'} >
            <img src="/assets/images/banner-4.png" alt="" />
            </Link> 
        </SwiperSlide>
    </Swiper>
  )
}

export default HomeBannerSlider