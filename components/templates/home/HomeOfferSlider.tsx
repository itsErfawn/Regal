"use client"
import ProductCard from '@/components/modules/products/ProductCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function HomeOfferSlider() {
  return (
    <Swiper
    slidesPerView={2}
    spaceBetween={24}
    breakpoints={{
        576:{
            slidesPerView:2.5
        },
        768:{
            slidesPerView:3
        },
        992:{
            slidesPerView:4
        }
    }}
    >
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
    </Swiper>
  )
}

export default HomeOfferSlider