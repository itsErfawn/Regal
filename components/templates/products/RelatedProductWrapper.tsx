"use client"
import ProductCard from '@/components/modules/products/ProductCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function RelatedProductWrapper() {
  return (
    <div className="col-span-12 mb-10 ">
        <h2 className='my-8'>محصولات مشابه</h2>
        <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
            600:{
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
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default RelatedProductWrapper